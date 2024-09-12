import React from 'react';
import AppStoreImg from '../../assets/images/app_store.png';
import PlayStoreImg from '../../assets/images/play_store.png';
import Gif from '../../assets/images/mobile_bike.gif';

const AppStore = () => {
  return (
    <div className="app-store-section py-8">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 text-center text-lg-left mb-4 mb-lg-0">
            <h1 className="display-5 font-weight-bold">
              Your Books are Waiting for You on Android and iOS
            </h1>
            <p className="lead">
              Get access to our extensive collection of books right from your mobile device.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-5">
              {/* Play Store Button */}
              <a href="#" className="mr-2">
                <img
                  src={PlayStoreImg}
                  alt="Play store"
                  className="store-img"
                  style={{ width: '120px' }} // Adjust size
                />
              </a>
              {/* App Store Button */}
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt="App store"
                  className="store-img"
                  style={{ width: '120px' }} // Adjust size
                />
              </a>
            </div>
          </div>

          {/* GIF Section */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={Gif}
              alt="mobile bike"
              className="img-fluid rounded-md"
              style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
