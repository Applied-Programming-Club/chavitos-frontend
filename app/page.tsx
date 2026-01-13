import React from "react";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <img src="https://via.placeholder.com/150x150?text=Chavitos+Logo" alt="Chavitos Barber Shop Logo" />
          <h1>Chavitos Barber Shop</h1>
        </div>
        <button>Book Appointment</button>
      </header>

      <section>
        <h2>Welcome to Chavitos</h2>
        <p>Welcome pg</p>
      </section>

      <section>
        <h2>Services & Prices</h2>
        <div>
          <div>
            <h3>Children's Specialist</h3>
            <p>price #1</p>
          </div>
          <div>
            <h3>Men's Hairdressing</h3>
            <p>price #2</p>
          </div>
          <div>
            <h3>Hot Towel Shaping</h3>
            <p>price #3</p>
          </div>
          <div>
            <h3>Women's Haircuts</h3>
            <p>price #4</p>
          </div>
          <div>
            <h3>Balayah Ray Dyes</h3>
            <p>price #5</p>
          </div>
          <div>
            <h3>Hairstyles for Special Occasions</h3>
            <p>price #6</p>
          </div> {/* Added missing closing div */}
          <div>
            <h3>Weddings</h3>
            <p>price #6</p>
          </div> {/* Added missing closing div */}
          <div>
            <h3>Fifteen Years</h3>
            <p>price #6</p>
          </div> {/* Added missing closing div */}
          <div>
            <h3>Makeup</h3>
            <p>price #6</p>
          </div> {/* Added missing closing div */}
          <div>
            <h3>Straightening and Perms</h3>
            <p>price #6</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Our Work</h2>
        <div>
          <img src="https://via.placeholder.com/300x300?text=Haircut+1" alt="Haircut example 1" />
          <img src="https://via.placeholder.com/300x300?text=Haircut+2" alt="Haircut example 2" />
          <img src="https://via.placeholder.com/300x300?text=Haircut+3" alt="Haircut example 3" />
          <img src="https://via.placeholder.com/300x300?text=Haircut+4" alt="Haircut example 4" />
          <img src="https://via.placeholder.com/300x300?text=Haircut+5" alt="Haircut example 5" />
          <img src="https://via.placeholder.com/300x300?text=Haircut+6" alt="Haircut example 6" />
        </div>
      </section>

      <section>
        <h2>About Us</h2>
        <p>About us desc</p>
      </section>

      <section>
        <h2>Hours</h2>
        <ul>
          <li>hours1</li>
          <li>hours2</li>
          <li>hours3</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <div>
          <div>
            <h3>Address</h3>
            <p>Address</p>
          </div>
          <div>
            <h3>Phone</h3>
            <button>Call number</button>
          </div>
          <div>
            <h3>desc</h3>
            <p>Or book your appointment online</p>
            <button>Book Now</button>
          </div>
        </div>
      </section>

      <footer>
        <p>© Copyright</p>
        <p>desc footer</p>
      </footer>
    </div>
  );
}