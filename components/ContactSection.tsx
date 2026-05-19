"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [bookingName, setBookingName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingGuests, setBookingGuests] = useState("1");
  const [bookingRoom, setBookingRoom] = useState("Rooms for honeymoon");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Cloud Walks! I would like to book a stay.

*Name:* ${bookingName}
*Check-in Date:* ${bookingDate || "Not specified"}
*Number of Guests:* ${bookingGuests}
*Cottage Type:* ${bookingRoom}`;

    const whatsappUrl = `https://wa.me/917868901688?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact-us"
      style={{
        backgroundColor: "#0d0d0d", // Deep luxury dark to transition to footer
        padding: "120px 5% 100px 5%",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(197, 160, 89, 0.15)",
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at top center, rgba(197, 160, 89, 0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.85rem",
              letterSpacing: "0.3em",
              color: "var(--primary)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          >
            Connect With Us
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "var(--font-cinzel), serif",
              fontWeight: "400",
              letterSpacing: "0.1em",
              color: "#ffffff",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Locate & Book Your Retreat
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "var(--primary)",
              margin: "1.5rem auto 0",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Two Column Layout */}
        <div
          className="contact-layout"
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          {/* Left: Google Map (Grayscale Dark Mode Style) */}
          <div
            style={{
              flex: "1 1 55%",
              backgroundColor: "#141414",
              border: "1px solid rgba(197, 160, 89, 0.2)",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="map-iframe-container"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "450px",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1425415037565!2d77.4775873!3d10.2500857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07676cf2aa42f5%3A0x8ea74bce53c99a57!2sCloudwalks%20Homestay!5e0!3m2!1sen!2sin!4v1779025282863!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div
              style={{
                marginTop: "1.8rem",
                textAlign: "center",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.95rem",
                lineHeight: "1.8",
                color: "#a0a0a0",
                fontWeight: "300",
              }}
            >
              <strong
                style={{
                  display: "block",
                  color: "#ffffff",
                  fontFamily: "var(--font-cinzel), serif",
                  letterSpacing: "0.1em",
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  marginBottom: "0.4rem",
                }}
              >
                CLOUDWALKS HOMESTAY
              </strong>
              Attuvampatti, Kodaikanal, Tamil Nadu 624101, India
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div
            style={{
              flex: "1 1 45%",
              backgroundColor: "#111111",
              border: "1px solid rgba(197, 160, 89, 0.3)",
              borderRadius: "16px",
              padding: "3rem",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Corner Decorative Elements */}
            <div style={{ position: "absolute", top: "15px", left: "15px", width: "20px", height: "20px", borderTop: "2px solid var(--primary)", borderLeft: "2px solid var(--primary)", opacity: 0.5 }} />
            <div style={{ position: "absolute", top: "15px", right: "15px", width: "20px", height: "20px", borderTop: "2px solid var(--primary)", borderRight: "2px solid var(--primary)", opacity: 0.5 }} />
            <div style={{ position: "absolute", bottom: "15px", left: "15px", width: "20px", height: "20px", borderBottom: "2px solid var(--primary)", borderLeft: "2px solid var(--primary)", opacity: 0.5 }} />
            <div style={{ position: "absolute", bottom: "15px", right: "15px", width: "20px", height: "20px", borderBottom: "2px solid var(--primary)", borderRight: "2px solid var(--primary)", opacity: 0.5 }} />

            <div style={{ textAlign: "center", marginBottom: "2.5rem", position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "1.6rem",
                  letterSpacing: "0.12em",
                  color: "#ffffff",
                  margin: "0 0 0.8rem 0",
                  fontWeight: "400",
                }}
              >
                REQUEST A BOOKING
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.9rem",
                  color: "#888888",
                  margin: 0,
                  fontWeight: "300",
                  letterSpacing: "0.05em",
                }}
              >
                Enter your details to reserve your premium stay directly via WhatsApp
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* Input Group: Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <label style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "var(--primary)", fontWeight: "600" }}>
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  className="premium-input"
                  style={{
                    padding: "1rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "1rem",
                    color: "#ffffff",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              {/* Grid for Date and Guests */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <label style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "var(--primary)", fontWeight: "600" }}>
                    CHECK-IN
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="premium-input"
                    style={{
                      padding: "1rem",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "1rem",
                      color: "#ffffff",
                      outline: "none",
                      transition: "all 0.3s ease",
                      colorScheme: "dark",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <label style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "var(--primary)", fontWeight: "600" }}>
                    GUESTS
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    required
                    placeholder="2"
                    value={bookingGuests}
                    onChange={(e) => setBookingGuests(e.target.value)}
                    className="premium-input"
                    style={{
                      padding: "1rem",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "1rem",
                      color: "#ffffff",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>
              </div>

              {/* Room Type Selector */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <label style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "var(--primary)", fontWeight: "600" }}>
                  WHICH TYPE OF ROOM
                </label>
                <select
                  value={bookingRoom}
                  onChange={(e) => setBookingRoom(e.target.value)}
                  className="premium-input"
                  style={{
                    padding: "1rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "1rem",
                    color: "#ffffff",
                    outline: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <option style={{ background: "#111", color: "#fff" }} value="Rooms for honeymoon">Rooms for honeymoon</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Romantic stay">Romantic stay</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Hill top room">Hill top room</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Lake view room">Lake view room</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Premium room for family">Premium room for family</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Grand Presidential Villa">Grand Presidential Villa</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Luxury Family Chalet">Luxury Family Chalet</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Cozy Wooden Attic Suite">Cozy Wooden Attic Suite</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Cozy Wooden Attic Loft">Cozy Wooden Attic Loft</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Premium Escape Cottage">Premium Escape Cottage</option>
                  <option style={{ background: "#111", color: "#fff" }} value="Cottage Garden View">Cottage Garden View</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="whatsapp-btn"
                style={{
                  marginTop: "1.5rem",
                  padding: "1.2rem",
                  border: "none",
                  borderRadius: "8px",
                  background: "linear-gradient(45deg, #25D366, #1EBE57)",
                  color: "#ffffff",
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  letterSpacing: "0.15em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.8rem",
                  boxShadow: "0 10px 20px rgba(37, 211, 102, 0.2)",
                  transition: "all 0.4s ease",
                  textTransform: "uppercase",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.48 2.03 14.041 1.001 11.54 1c-5.444 0-9.873 4.38-9.877 9.808-.001 1.763.486 3.486 1.415 5.014l-.955 3.488 3.624-.95zM17.307 14.3c-.3-.15-1.78-.88-2.05-.98-.28-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-1.12-.56-1.93-.97-2.7-2.29-.2-.35.2-.33.58-1.08.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.25-.6-.5-.52-.67-.53-.18-.01-.38-.01-.58-.01-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44s1.05 2.83 1.2 3.03c.15.2 2.06 3.15 5 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.25-.2-.55-.35z" />
                </svg>
                Enquire via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .map-iframe-container iframe {
            filter: grayscale(80%) invert(90%) contrast(120%) hue-rotate(180deg);
            transition: filter 0.5s ease;
          }
          .map-iframe-container:hover iframe {
            filter: grayscale(40%) invert(80%) contrast(110%) hue-rotate(180deg);
          }
          .premium-input:focus {
            border-color: var(--primary) !important;
            background-color: rgba(197, 160, 89, 0.05) !important;
            box-shadow: 0 0 15px rgba(197, 160, 89, 0.1);
          }
          .whatsapp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 25px rgba(37, 211, 102, 0.3) !important;
            background: linear-gradient(45deg, #1EBE57, #25D366) !important;
          }
          @media (max-width: 991px) {
            .contact-layout {
              flex-direction: column !important;
              gap: 2rem !important;
            }
          }
          @media (max-width: 768px) {
            .contact-layout > div:nth-child(2) {
              padding: 2rem !important;
            }
          }
        `
      }} />
    </section>
  );
}
