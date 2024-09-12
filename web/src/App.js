import React from 'react';
import './App.css';

// Image imports
import img1 from './assets/images/shakti.png';
import varja from './assets/images/vajra.png';
import aura from './assets/images/aura.png';
import att from './assets/images/attraction.png';
import back from './assets/images/wall2.png'; // Background image import

// Component imports
import Footer from './component/Footer/Footer';
import Testimonial from './component/Testimonial/Testimonial';
import Navbar from './component/Navbar/Navbar';
import AppStore from './component/AppStore/AppStore';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import React Icons
function App() {
  const books = [
    { src: img1, title: "Shakti", author: "R.k Mohan", price: 500 },
    { src: varja, title: "Vajra", author: "Achari.Dash", price: 650 },
    { src: aura, title: "Aura", author: "Leela Devi.A.k", price: 700 },
    { src: att, title: "Law of Attraction", author: "William.D.k", price: 1050 }
  ];

  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Home Section */}
        <section id="home" className="container">
          {/* Home content could go here */}
        </section>

        {/* Books Section */}
        <section id="books" className="container">
          <h2>Our Collection of Books</h2>
          <div className="row">
            {books.map((book, index) => (
              <div key={index} className="col-md-3">
                <div className="card glass-card h-100">
                  <img src={book.src} className="card-img-top" alt={book.title} />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h4 className="card-text">Author: {book.author}</h4>
                    <h5 className="card-text">Price: {book.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <br />
        <section
          id="about"
          className="container"
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '250px',
            color: 'white',
          }}
        >
          <h2>About Us</h2>
          <p style={{ color: 'white' }}>
          Our bookstore offers a diverse collection of books to cater to every reader's taste. From bestsellers to rare finds, we pride ourselves on our extensive selection, ensuring there's something for everyone. Whether you're looking for the latest novels, timeless classics, or unique genres, our store has it all. Visit us at our different locations to explore our curated collection and discover your next great read. Experience the joy of reading with our top-notch book collection and personalized service.


          </p>
          <h1>Store Locations:</h1>
          <div className="location-list">
            <p style={{color:"white"}}><FaMapMarkerAlt /> India</p>
            <p style={{color:"white"}}><FaMapMarkerAlt /> USA</p>
            <p style={{color:"white"}}><FaMapMarkerAlt /> UK</p>
          </div>
        </section>
        <br></br>

        {/* App Store Section */}
        <AppStore />

        {/* Testimonial Section */}
        <Testimonial />
        <br></br>

        {/* Contact Section */}
        <section id="contact" className="container" style={{ color: "black", textAlign: "center" }}>
  <h2>Contact Us</h2>
  <p>Email: vasudevsanchapu@gmail.com</p>
  <p>Phone: +919640809042</p>
  <p>Address: India,Vizag,Gajuwaka-532127</p>
</section>

      </div>

      {/* Footer Section */}
      <br />
      <Footer />
    </>
  );
}

export default App;
