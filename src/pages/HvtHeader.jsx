import React from 'react'
import '../pagesCss/HvtHeader.css';

export const HvtHeader = () => {
    
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src='images/logo.png' alt="Holy Vrindavan Tour" className="rounded-circle" style={{ maxHeight: '65px', marginRight: '10px' }} />
              <h3 className="mb-0 h5">Holy Vrindavan Tour</h3>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link " href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Destinations
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Vrindavan</a></li>
                    <li><a className="dropdown-item" href="#">Mathura</a></li>
                    <li><a className="dropdown-item" href="#">Nandgaon</a></li>
                    <li><a className="dropdown-item" href="#">Barsana</a></li>
                    <li><a className="dropdown-item" href="#">Dauji</a></li>
                    <li><a className="dropdown-item" href="#">Goverdhan</a></li>
                    <li><a className="dropdown-item" href="#">Gokul</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      );
}

