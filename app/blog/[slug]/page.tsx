import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import LuxuryCottagesFAQ from '@/components/LuxuryCottagesFAQ';
import { blogPosts, BlogPost } from '../data';

// Next.js 16 dynamic route types
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes during build for maximum performance
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate SEO metadata dynamically for each post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Cloud Walks',
    };
  }

  return {
    title: `${post.seoTitle} | Cloud Walks Blog`,
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://cloudwalks.com/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: `https://cloudwalks.com/blog/${post.slug}`,
      siteName: 'Cloud Walks Home Stay',
      title: `${post.title} | Cloud Walks Homestay`,
      description: post.seoDescription,
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Cloud Walks Homestay`,
      description: post.seoDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Filter other articles to show as recommended "Read Next" posts at the bottom
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Define structured JSON-LD data for Google rich snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'image': `https://cloudwalks.com${post.coverImage}`,
    'datePublished': new Date(post.publishedAt).toISOString(),
    'author': {
      '@type': 'Person',
      'name': post.author.name,
      'jobTitle': post.author.role,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Cloud Walks Home Stay',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://cloudwalks.com/logo.png',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://cloudwalks.com/blog/${post.slug}`,
    },
  };

  // Dynamically generate table of contents based on subheadings in the article
  const subheadings = post.content
    .filter((item) => item.type === 'subheading')
    .map((item) => item.text || '');

  return (
    <main style={{ backgroundColor: '#fdfbf7', color: '#1a1a1a', minHeight: '100vh' }}>
      {/* Schema.org Article Structured Data */}
      <Script
        id={`json-ld-blog-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* ─── Breadcrumbs & Main Article Header ─── */}
      <section style={{ padding: '140px 5% 40px 5%', borderBottom: '1px solid rgba(197, 160, 89, 0.12)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', color: '#888888', marginBottom: '2.5rem', fontFamily: 'var(--font-cinzel), serif', fontWeight: '500', letterSpacing: '0.05em' }}>
            <Link href="/" className="breadcrumb-link" style={{ color: '#888888' }}>HOME</Link>
            <span>/</span>
            <Link href="/blog" className="breadcrumb-link" style={{ color: '#888888' }}>JOURNAL</Link>
            <span>/</span>
            <span style={{ color: 'var(--primary)' }}>{post.title.toUpperCase()}</span>
          </div>

          {/* Heading Block */}
          <div style={{ maxWidth: '900px' }}>
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.8rem',
              letterSpacing: '0.25em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
              fontWeight: '600',
            }}>
              {post.category}
            </span>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontFamily: 'var(--font-cinzel), serif',
              fontWeight: '300',
              lineHeight: '1.2',
              letterSpacing: '0.02em',
              color: '#1a1a1a',
              marginBottom: '2rem',
            }}>
              {post.title}
            </h1>

            {/* Author Profile + Read Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', borderTop: '1px solid rgba(197, 160, 89, 0.15)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--primary)' }}>
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.88rem', color: '#1a1a1a', fontWeight: '600' }}>
                    {post.author.name}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--primary)', letterSpacing: '0.05em' }}>
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div style={{ height: '30px', width: '1px', backgroundColor: 'rgba(197, 160, 89, 0.25)', display: 'none' }} className="meta-divider" />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.82rem', color: '#666666' }}>
                <div>
                  <span style={{ color: '#999999', display: 'block', fontSize: '0.7rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Published On</span>
                  <span style={{ fontWeight: '500', color: '#333333' }}>{post.publishedAt}</span>
                </div>
                <div>
                  <span style={{ color: '#999999', display: 'block', fontSize: '0.7rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Reading Time</span>
                  <span style={{ fontWeight: '500', color: '#333333' }}>{post.readTime}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Hero Image Section ─── */}
      <section style={{ padding: '40px 5% 20px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            position: 'relative',
            aspectRatio: '21 / 9',
            minHeight: '300px',
            maxHeight: '550px',
            overflow: 'hidden',
            borderRadius: '8px',
            border: '1px solid rgba(197, 160, 89, 0.25)',
            boxShadow: '0 25px 60px rgba(197, 160, 89, 0.05)'
          }}>
            {/* Elegant inner decorative frame */}
            <div style={{
              position: 'absolute',
              inset: '15px',
              border: '1px solid rgba(255,255,255,0.25)',
              zIndex: 2,
              pointerEvents: 'none'
            }} />

            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Two-Column Article Layout ─── */}
      <section style={{ padding: '40px 5% 100px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          
          {/* Main Article Body Column */}
          <article style={{ flex: '1 1 700px', maxWidth: '800px' }}>
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p 
                      key={index} 
                      style={{ 
                        fontSize: '1.08rem', 
                        lineHeight: '1.9', 
                        color: '#444444', 
                        fontWeight: '300', 
                        marginBottom: '1.8rem',
                        fontFamily: 'var(--font-inter), sans-serif'
                      }}
                    >
                      {block.text}
                    </p>
                  );

                case 'subheading':
                  // ID created by kebab-casing the text for table of contents anchors
                  const headingId = block.text?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <h2 
                      key={index}
                      id={headingId}
                      style={{ 
                        fontFamily: 'var(--font-cinzel), serif', 
                        fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)', 
                        color: '#1a1a1a', 
                        fontWeight: '400', 
                        letterSpacing: '0.02em', 
                        marginTop: '3.2rem', 
                        marginBottom: '1.3rem', 
                        borderBottom: '1px solid rgba(197, 160, 89, 0.18)', 
                        paddingBottom: '0.6rem',
                        scrollMarginTop: '120px' // accounts for fixed navbar during smooth scrolls
                      }}
                    >
                      {block.text}
                    </h2>
                  );

                case 'list':
                  return (
                    <ul 
                      key={index} 
                      style={{ 
                        listStyle: 'none', 
                        paddingLeft: '0', 
                        marginBottom: '2rem', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.9rem' 
                      }}
                    >
                      {block.items?.map((item, itemIdx) => (
                        <li 
                          key={itemIdx} 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: '0.8rem', 
                            fontSize: '1.05rem', 
                            lineHeight: '1.7', 
                            color: '#444444', 
                            fontWeight: '300' 
                          }}
                        >
                          <span style={{ 
                            width: '6px', 
                            height: '6px', 
                            borderRadius: '50%', 
                            backgroundColor: 'var(--primary)', 
                            marginTop: '0.65rem', 
                            flexShrink: 0 
                          }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );

                case 'table':
                  return (
                    <div 
                      key={index} 
                      style={{ 
                        overflowX: 'auto', 
                        marginBottom: '2.5rem', 
                        marginTop: '1.8rem', 
                        border: '1px solid rgba(197, 160, 89, 0.18)', 
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.01)'
                      }}
                    >
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', minWidth: '550px' }}>
                        <thead>
                          <tr style={{ backgroundColor: 'rgba(197, 160, 89, 0.06)', borderBottom: '1px solid rgba(197, 160, 89, 0.18)' }}>
                            {block.headers?.map((headerText, headIdx) => (
                              <th 
                                key={headIdx} 
                                style={{ 
                                  padding: '1.1rem 1.2rem', 
                                  textAlign: 'left', 
                                  fontFamily: 'var(--font-cinzel), serif', 
                                  fontSize: '0.78rem', 
                                  letterSpacing: '0.1em', 
                                  fontWeight: '600', 
                                  color: 'var(--primary)' 
                                }}
                              >
                                {headerText}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows?.map((rowCells, rowIdx) => (
                            <tr 
                              key={rowIdx} 
                              style={{ 
                                borderBottom: rowIdx === (block.rows?.length || 0) - 1 ? 'none' : '1px solid rgba(197, 160, 89, 0.08)', 
                                backgroundColor: rowIdx % 2 === 0 ? '#FFFDF9' : '#ffffff' 
                              }}
                            >
                              {rowCells.map((cellText, cellIdx) => (
                                <td 
                                  key={cellIdx} 
                                  style={{ 
                                    padding: '1.1rem 1.2rem', 
                                    color: '#555555', 
                                    fontWeight: '300', 
                                    lineHeight: '1.6' 
                                  }}
                                >
                                  {cellText}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );

                case 'highlight':
                  return (
                    <div 
                      key={index} 
                      style={{
                        borderLeft: '4px solid var(--primary)',
                        backgroundColor: 'rgba(197, 160, 89, 0.04)',
                        padding: '2rem 2.2rem',
                        borderRadius: '0 8px 8px 0',
                        marginBottom: '2.2rem',
                        marginTop: '1.8rem',
                        fontStyle: 'italic',
                        color: '#222222',
                        fontSize: '1.08rem',
                        lineHeight: '1.85',
                        fontWeight: '300',
                        fontFamily: 'var(--font-inter), sans-serif'
                      }}
                    >
                      {block.text}
                    </div>
                  );

                case 'cta':
                  return (
                    <div 
                      key={index} 
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(197, 160, 89, 0.25)',
                        borderRadius: '8px',
                        padding: '3rem 2.5rem',
                        boxShadow: '0 20px 45px rgba(197, 160, 89, 0.03)',
                        margin: '3.5rem 0',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.2rem'
                      }}
                    >
                      <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.5rem', color: '#1a1a1a', fontWeight: '400', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                        {block.title}
                      </h3>
                      <p style={{ color: '#666666', fontSize: '1.02rem', lineHeight: '1.7', fontWeight: '300', maxWidth: '600px', marginBottom: '0.5rem' }}>
                        {block.text}
                      </p>
                      <Link href={block.link || '#'}>
                        <button className="luxury-button" style={{ padding: '1rem 3rem', fontSize: '0.78rem', letterSpacing: '0.18em' }}>
                          {block.linkText?.toUpperCase()}
                        </button>
                      </Link>
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </article>

          {/* Sidebar Column (Sticky Widgets) */}
          <aside style={{ flex: '1 1 300px', maxWidth: '360px' }}>
            <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Table of Contents Widget */}
              {subheadings.length > 0 && (
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(197, 160, 89, 0.15)',
                  borderRadius: '6px',
                  padding: '2rem 1.8rem',
                  boxShadow: '0 10px 30px rgba(197, 160, 89, 0.01)',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '0.9rem',
                    letterSpacing: '0.15em',
                    color: 'var(--primary)',
                    fontWeight: '600',
                    borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
                    paddingBottom: '0.8rem',
                    marginBottom: '1.2rem',
                    textTransform: 'uppercase'
                  }}>
                    Table of Contents
                  </h3>

                  <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {subheadings.map((sub, sIdx) => {
                      const headingId = sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                      return (
                        <Link 
                          key={sIdx}
                          href={`#${headingId}`}
                          style={{
                            display: 'flex',
                            gap: '0.6rem',
                            fontSize: '0.88rem',
                            color: '#555555',
                            lineHeight: '1.4',
                            fontWeight: '300',
                          }}
                          className="toc-link"
                        >
                          <span style={{ color: 'var(--primary)', fontWeight: '500' }}>0{sIdx + 1}.</span>
                          <span>{sub}</span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* Lead-Gen Stay Card Widget */}
              <div style={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                borderRadius: '6px',
                padding: '2.5rem 2rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #111111 100%)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.3em',
                  color: 'var(--primary)',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  Experience the Magic
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '1.6rem',
                  fontWeight: '300',
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                  lineHeight: '1.3'
                }}>
                  Escape to Kodaikanal&apos;s High Peaks
                </h3>

                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: '#cccccc',
                  fontWeight: '300',
                }}>
                  Wake up to rolling mists, enjoy campfires under starlit nights, and sleep in cozy wood-panel cabins.
                </p>

                <div style={{ borderTop: '1px solid rgba(197, 160, 89, 0.25)', paddingTop: '1.2rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#aaaaaa', letterSpacing: '0.05em' }}>Starting from only</span>
                  <span style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.8rem', color: 'var(--primary)', fontWeight: '600' }}>₹3,500 <span style={{ fontSize: '0.9rem', fontWeight: '300', color: '#aaaaaa' }}>/ Night</span></span>
                </div>

                <div style={{ marginTop: '0.8rem' }}>
                  <Link href="/contact">
                    <button className="luxury-button" style={{ width: '100%', padding: '0.9rem', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                      BOOK YOUR ESCAPE
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* ─── "Read Next" / Recommendations Section ─── */}
      <section style={{
        padding: '80px 5% 80px 5%',
        borderTop: '1px solid rgba(197, 160, 89, 0.15)',
        backgroundColor: '#faf7f2',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--primary)',
                fontWeight: '600',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.4rem'
              }}>
                FURTHER READING
              </span>
              <h2 style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '2rem',
                fontWeight: '400',
                color: '#1a1a1a',
                letterSpacing: '0.03em'
              }}>
                Recommended Articles
              </h2>
            </div>
            
            <Link 
              href="/blog" 
              className="view-all-link"
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                color: 'var(--primary)',
                fontWeight: '600',
                borderBottom: '1px solid var(--primary)',
                paddingBottom: '2px',
              }}
            >
              VIEW ALL JOURNAL ENTRIES
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2.5rem',
          }}>
            {otherPosts.map((recPost) => (
              <article 
                key={recPost.slug}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(197, 160, 89, 0.15)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(197, 160, 89, 0.01)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="article-card"
              >
                {/* Cover Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image
                    src={recPost.coverImage}
                    alt={recPost.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="card-img"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '4px 8px',
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '0.62rem',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    borderRadius: '4px',
                  }}>
                    {recPost.category.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.8rem 1.6rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.72rem', color: '#777777' }}>
                    <span>{recPost.publishedAt}</span>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
                    <span>{recPost.readTime}</span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '1.18rem',
                    color: '#1a1a1a',
                    fontWeight: '500',
                    lineHeight: '1.4',
                  }}>
                    <Link href={`/blog/${recPost.slug}`} style={{ color: '#1a1a1a', transition: 'color 0.2s' }} className="title-link">
                      {recPost.title}
                    </Link>
                  </h3>

                  <p style={{
                    color: '#666666',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    fontWeight: '300',
                    flex: 1,
                  }}>
                    {recPost.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(197, 160, 89, 0.08)',
                    paddingTop: '1rem',
                    marginTop: '0.5rem',
                  }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: '500', color: '#333333' }}>By {recPost.author.name}</span>
                    
                    <Link href={`/blog/${recPost.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.72rem', letterSpacing: '0.05em' }} className="read-more-link">
                      READ POST
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 0.3s ease' }}>
                        <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Luxury Footer containing FAQs & contact form anchor */}
      <LuxuryCottagesFAQ />

      {/* Styled inline components */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .meta-divider {
            display: none !important;
          }
        }
        .article-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 15px 35px rgba(197, 160, 89, 0.08) !important;
          border-color: rgba(197, 160, 89, 0.35) !important;
        }
        .article-card:hover .card-img {
          transform: scale(1.04) !important;
        }
        .title-link:hover {
          color: var(--primary) !important;
        }
        .read-more-link:hover svg {
          transform: translateX(4px) !important;
        }
        .breadcrumb-link {
          transition: color 0.2s ease !important;
        }
        .breadcrumb-link:hover {
          color: var(--primary) !important;
        }
        .toc-link {
          transition: all 0.25s ease !important;
        }
        .toc-link:hover {
          color: var(--primary) !important;
          transform: translateX(4px) !important;
        }
        .view-all-link {
          transition: opacity 0.2s ease !important;
        }
        .view-all-link:hover {
          opacity: 0.7 !important;
        }
      `}} />
    </main>
  );
}
