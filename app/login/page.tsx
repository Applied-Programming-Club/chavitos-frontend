import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the optimized Image component

export default function LoginPage() {
  return (
    <main>
      {/* --- TOP NAVIGATION BAR --- */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", borderBottom: "1px solid black" }}>
        <div>
          {/* Using Next.js Image for Logo */}
          <Image 
            src="https://via.placeholder.com/150x50?text=LOGO" 
            alt="Barber Shop Logo" 
            width={150} 
            height={50} 
            priority // Loads this image first
          />
        </div>
        <div>
          <Link href="/services"><button type="button">Services</button></Link>
          <Link href="/about"><button type="button" style={{ margin: "0 10px" }}>About</button></Link>
          <Link href="/schedule">
            <button type="button" style={{ fontWeight: "bold" }}>BOOK APPOINTMENT</button>
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section style={{ textAlign: "center", padding: "50px 20px", borderBottom: "1px solid #ccc" }}>
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
          <Image 
            src="https://via.placeholder.com/1200x500?text=Barber+Shop+Hero+Image" 
            alt="Barber Shop Interior" 
            fill // Fills the container
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 style={{ fontSize: "3rem", marginTop: "20px" }}>Precision Grooming</h1>
        <p>Providing the best haircuts and beard trims in the city.</p>
        <Link href="/schedule">
          <button type="button" style={{ padding: "10px 30px", fontSize: "1.2rem" }}>Book Your Chair</button>
        </Link>
      </section>

      {/* --- SERVICES & PRICING --- */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
          
          {/* SERVICE ITEM 1 */}
          <div style={{ border: "1px solid #000", padding: "20px", width: "300px", textAlign: "center" }}>
            <Image src="https://via.placeholder.com/260x200?text=Haircut" alt="Haircut" width={260} height={200} />
            <h3>Haircut</h3>
            <p>Professional cut and styling.</p>
            <div style={{ fontSize: "1.5rem", marginBottom: "15px" }}>$25</div>
            <Link href="/schedule"><button type="button">Book Appointment</button></Link>
          </div>

          {/* SERVICE ITEM 2 */}
          <div style={{ border: "1px solid #000", padding: "20px", width: "300px", textAlign: "center" }}>
            <Image src="https://via.placeholder.com/260x200?text=Beard+Trim" alt="Beard Trim" width={260} height={200} />
            <h3>Beard Trim</h3>
            <p>Shape and tidy for a sharp look.</p>
            <div style={{ fontSize: "1.5rem", marginBottom: "15px" }}>$15</div>
            <Link href="/schedule"><button type="button">Book Appointment</button></Link>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION (NEW) --- */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Our Work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginTop: "20px" }}>
          {/* Replace these with real portfolio photos later */}
          <Image src="https://via.placeholder.com/300x300?text=Fade+1" alt="Portfolio 1" width={300} height={300} />
          <Image src="https://via.placeholder.com/300x300?text=Beard+2" alt="Portfolio 2" width={300} height={300} />
          <Image src="https://via.placeholder.com/300x300?text=Style+3" alt="Portfolio 3" width={300} height={300} />
          <Image src="https://via.placeholder.com/300x300?text=Fade+4" alt="Portfolio 4" width={300} height={300} />
        </div>
      </section>

      {/* --- ABOUT & HOURS --- */}
      <section style={{ padding: "40px 20px", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
        <div style={{ maxWidth: "500px" }}>
          <h2>About Our Barber Shop</h2>
          <p>We are a community-focused barber shop dedicated to classic techniques and modern styles.</p>
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday  9:00 AM - 7:00 PM</li>
            <li>Saturday: 10:00 AM - 5:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <Image src="https://via.placeholder.com/400x300?text=Shop+Interior" alt="Inside the shop" width={400} height={300} />
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer style={{ padding: "40px 20px", backgroundColor: "#eee", textAlign: "center" }}>
        <h2>Contact & Location</h2>
        <p><strong>Address:</strong> 123 Grooming St, Barbertown, BT 55432</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        
        <div style={{ margin: "20px 0" }}>
          <Image src="https://via.placeholder.com/800x200?text=Map+Location" alt="Map" width={800} height={200} />
        </div>

        <Link href="/schedule">
          <button type="button" style={{ padding: "15px 40px", fontSize: "1rem" }}>Book Appointment</button>
        </Link>
        <p style={{ marginTop: "20px" }}>© 2026 Barber Shop Name</p>
      </footer>
    </main>
  );
}