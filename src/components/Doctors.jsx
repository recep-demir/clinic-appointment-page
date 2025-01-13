import React from "react";
import DoctorsCard from "./DoctorsCard";

const Doctors = ({ doctors, onDoctorClick }) => {
  return (
    <div className="container">
      <div className="row justify-content-center gap-3">
        {doctors.map((e) => (
          <div
            className="col-12 col-sm-6 col-md-3 d-flex justify-content-center"
            key={e.id}
            onClick={() => onDoctorClick(e.name)}
          >
            <DoctorsCard {...e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
