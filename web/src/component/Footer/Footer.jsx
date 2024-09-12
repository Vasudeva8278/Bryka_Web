import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center">
       {/* Contact Section */}
    
      {/* Grid container */}
      <div className="container p-4">
    
        {/* Section: Images */}
        <section className="">
          <div className="row">
            {[
              'https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp',
              'https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp',
              'https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp',
              'https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp',
              'https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp',
              'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
            ].map((imageSrc, index) => (
              <div key={index} className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay shadow-1-strong rounded"
                  data-mdb-ripple-init
                  data-ripple-color="light"
                >
                  <img src={imageSrc} className="w-100" alt={`City Image ${index + 1}`} />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section: Images */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Have Nice Day
        <a className="text-body" href="https://mdbootstrap.com/">
       
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
