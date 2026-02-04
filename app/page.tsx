import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="font-sans bg-cyan-50 text-cyan-900">
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className="flex justify-between items-center p-4 border-b border-red-300 bg-cyan-100">
        <div>
          <img
            src="https://via.placeholder.com/150x50?text=LOGO"
            alt="Barber Shop Logo"
            width={150}
            height={50}
          />
        </div>

        <div className="space-x-4">
          <Link href="/services">
            <button className="px-4 py-2 rounded bg-cyan-200 hover:bg-red-200 hover:text-red-800 transition">
              Services
            </button>
          </Link>
          <Link href="/about">
            <button className="px-4 py-2 rounded bg-cyan-200 hover:bg-red-200 hover:text-red-800 transition">
              About
            </button>
          </Link>
          <Link href="/schedule">
            <button className="px-4 py-2 rounded bg-red-500 text-white font-bold hover:bg-red-600 transition">
              BOOK APPOINTMENT
            </button>
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="text-center py-12 border-b border-red-300">
        <div className="relative w-full h-[500px]">
          <img
            src="https://via.placeholder.com/1200x500?text=Barber+Shop+Hero+Image"
            alt="Barber Shop Interior"
            className="w-full h-full object-cover rounded"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Precision <span className="text-red-500">Grooming</span>
        </h1>
        <p className="mt-2 text-cyan-800">
          Providing the best haircuts and beard trims in the city.
        </p>

        <Link href="/schedule">
          <button className="mt-4 px-8 py-3 bg-red-500 text-white text-lg rounded hover:bg-red-600 transition">
            Book Your Chair
          </button>
        </Link>
      </section>

      {/* --- SERVICES & PRICING --- */}
      <section className="py-12 px-4">
        <h2 className="text-3xl text-center font-semibold">
          Our <span className="text-red-500">Services</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            ["Children's Specialist", "$15"],
            ["Men's Hairdressing", "$20"],
            ["Hot Towel Shavering", "$25"],
            ["Women's Haircuts", "$30"],
            ["Balayash", "$45"],
            ["Hairstyles for Special Occasions", "$40"],
            ["Weddings", "$60"],
            ["Fifteen Years", "$50"],
            ["Makeup", "$35"],
            ["Straightening and Perms", "$55"],
          ].map(([title, price], index) => (
            <div
              key={index}
              className="border border-cyan-300 hover:border-red-400 rounded p-6 w-72 text-center bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={`https://via.placeholder.com/260x200?text=${encodeURIComponent(
                  title,
                )}`}
                alt={title}
                width={260}
                height={200}
                className="rounded"
              />

              <h3 className="text-xl font-semibold mt-4">{title}</h3>
              <div className="text-2xl mt-3 mb-4 font-bold text-red-500">
                {price}
              </div>

              <Link href="/schedule">
                <button className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-red-500 transition">
                  Book Appointment
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="py-12 px-4 text-center bg-cyan-100">
        <h2 className="text-3xl font-semibold">
          Our <span className="text-red-500">Work</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {["Fade 1", "Beard 2", "Style 3", "Fade 4"].map((item, i) => (
            <img
              key={i}
              src={`https://via.placeholder.com/300x300?text=${item}`}
              alt={item}
              width={300}
              height={300}
              className="rounded hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* --- ABOUT & HOURS --- */}
      <section className="py-12 px-4 flex flex-wrap justify-center gap-12">
        <div className="max-w-md">
          <h2 className="text-3xl font-semibold">
            About Our <span className="text-red-500">Barber Shop</span>
          </h2>
          <p className="mt-2">
            We are a community-focused barber shop dedicated to classic
            techniques and modern styles.
          </p>

          <h3 className="mt-4 font-semibold text-red-500">Opening Hours</h3>
          <ul className="mt-2 list-disc list-inside">
            <li>Monday - Saturday: 8:00 AM - 8:00 PM</li>
            <li>Sunday: 10:00 AM - 3:00 PM</li>
          </ul>
        </div>

        <img
          src="https://via.placeholder.com/400x300?text=Shop+Interior"
          alt="Inside the shop"
          width={400}
          height={300}
          className="rounded"
        />
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer className="py-12 px-4 bg-cyan-900 text-cyan-100 text-center">
        <h2 className="text-3xl font-semibold text-red-400">
          Contact & Location
        </h2>

        <p className="mt-2">
          <strong>Address:</strong> 16625 Redmond Way Suite L Redmond WA. 98052
        </p>
        <p className="mt-1">
          <strong>Phone:</strong> (909) 964-2214
        </p>
        <p className="mt-1">
          <strong>Email:</strong> chavitos2000@hotmail.com
        </p>

        <div className="mt-6">
          <img
            src="https://via.placeholder.com/800x200?text=Map+Location"
            alt="Map"
            width={800}
            height={200}
            className="rounded"
          />
        </div>

        <p className="mt-6 text-sm text-cyan-300">
          © 2026 Chavitos Barber and Beauty Salon
        </p>
      </footer>
    </main>
  );
}
