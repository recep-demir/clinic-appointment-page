import React from "react";

const AddModal = ({ show, handleClose, selectedDoctor, onSubmit }) => {
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-danger">
              Appointment for {selectedDoctor}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="patientName" className="form-label">
                  Patient Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="patientName"
                  name="patient"
                //   required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="appointmentDate" className="form-label">
                  Day&Time
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="appointmentDate"
                  name="day"
                //   required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
