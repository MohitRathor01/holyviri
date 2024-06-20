import React from "react";
import "../pagesCss/HvtFooter.css";

const HvtFooter = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <img
              src="images/logo.png"
              alt=""
              className="img-fluid rounded-circle mb-3"
              style={{ maxHeight: "85px" }}
            />
            <h1 className="h5">Holy Vrindavan Tour</h1>
            <p className="text-white">
              Welcome to the official website of Holy Vrindavan Tour. We are the
              number one travel agent in Braj, providing our clients with the
              best from hotel bookings to transportation. Our Braj tour packages
              are designed to make sure you won’t miss out on any of these
              amazing destinations! We cover Vrindavan, Mathura, Nandgaon,
              Barsana, Govardhan, Gokul, and Dauji.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h1 className="h5">Contact Us</h1>
            <p>📞 +91 6399778850</p>
            <p>
              📧{" "}
              <a
                href="mailto:holyvrindavantour@gmail.com"
                className="text-white"
              >
                holyvrindavantour@gmail.com
              </a>
            </p>
            <p>
              📍 Near Anand Krishna Van hotel, Madhuvan Colony, Vrindavan
              (Mathura) Pin code: 281121
            </p>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <h1 className="h5">Quick Links</h1>
            <a
              href="#"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Refund Policy
            </a>
            <a
              href="#"
              className="text-white d-block mb-2 text-decoration-none"
            >
              Reservation Policy
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black text-secondary text-center py-3">
        <p className="mb-0">
          &copy; 2023 Holy Vrindavan Tour. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default HvtFooter;
