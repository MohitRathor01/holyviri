import React from 'react';
import '../pagesCss/HvtPayment.css';

const HvtPayment = () => {
  return (
    <div className="container hvtpayment my-4">
      <div className="row">
        <div className="col-md-4">
          <h4 className='text-center'>Policy Details</h4>
          <p className='text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae leo aliquam gravida.</p>
          <p>Return Policy: You can return within 30 days from the date of purchase.</p>
        </div>
        <div className="col-md-4 text-center barcode">
          <h4 className='text-center' > Barcode</h4>
          <img src="https://via.placeholder.com/150" alt="Barcode" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h4 className='text-center'>Bank Details</h4>
          <p className='text-center'>Account Name: Vinay Kumar</p>
          <p className='text-center'>Account Number: 1234567890</p>
          <p className='text-center'>Bank: ABC Bank</p>
          <p className='text-center'>IFSC: ABCD0123456</p>
        </div>
      </div>
    </div>
  );
};

export default HvtPayment;
