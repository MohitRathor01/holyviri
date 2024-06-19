import React from 'react';
import { useParams } from 'react-router-dom';
import tours from "../Data/data.js";
import PlanCard from './PlanCard';

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find(t => t.id === parseInt(id));

  return (
    <div className="container mt-5">
      {tour ? (
        <>
          <h2>{tour.title}</h2>
          <img src={tour.imgSrc} alt={tour.title} className="img-fluid mb-4" />
          <p>{tour.details}</p>
          <h3>Plans</h3>
          <div className="row">
            {tour.plans.map((plan, index) => (
              <div className="col-12 col-md-6" key={index}>
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Tour not found</p>
      )}
    </div>
  );
}

export default TourDetails;
