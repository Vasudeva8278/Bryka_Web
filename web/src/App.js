import React from 'react';
import './App.css';

import img1 from './assets/images/shakti.png'; // Updated path
import varja from './assets/images/vajra.png';
import Footer from './component/Footer/Footer';
import Testimonial from './component/Testimonial/Testimonial';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <>
    <div className="App">
      {/* Navbar */}
      <Navbar/>

      {/* Home Section */}
      <section id="home" className="container">
        <h1>Welcome to Vasudev's Online Book Store</h1>
        <p>Your one-stop shop for the best books online!</p>
      </section>

      {/* Books Section */}
      <section id="books" className="container">
        <h2>Our Collection of Books</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={img1} className="card-img-top" alt="Book 1" />
              <div className="card-body">
                <h5 className="card-title">Book Title 1</h5>
                <p className="card-text">Author: Author 1</p>
                <p className="card-text">Price: $10</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={varja} className="card-img-top" alt="Book 2" />
              <div className="card-body">
                <h5 className="card-title">Book Title 2</h5>
                <p className="card-text">Author: Author 2</p>
                <p className="card-text">Price: $15</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={varja} className="card-img-top" alt="Book 2" />
              <div className="card-body">
                <h5 className="card-title">Book Title 2</h5>
                <p className="card-text">Author: Author 2</p>
                <p className="card-text">Price: $15</p>
              </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card">
              <img src={varja} className="card-img-top" alt="Book 2" />
              <div className="card-body">
                <h5 className="card-title">Book Title 2</h5>
                <p className="card-text">Author: Author 2</p>
                <p className="card-text">Price: $15</p>
              </div>
            </div>
            </div>
       
          {/* Add more books as needed */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <h2>About Us</h2>
        <p>We are an online bookstore dedicated to offering the best titles in fiction, non-fiction, and much more.</p>
      </section>

    <Testimonial />
      <section id="contact" className="container">
        <h2>Contact Us</h2>
        <p>Email: contact@bookstore.com</p>
        <p>Phone: 123-456-7890</p>
      </section>
      
      
    </div>
    
    </>
  );
}

export default App;
