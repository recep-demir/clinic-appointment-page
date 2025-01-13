import React, { useState } from "react";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { doctorData, appointmentData } from "../helpers/data";
import "../CSS/Home.css";
import AddModal from "../components/AddModal";

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleOpenModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAppointment = {
      id: Date.now(),
      patient: formData.get("patient"),
      day: formData.get("day"),
      doctor: selectedDoctor,
    };
    setAppointments([...appointments, newAppointment]);
    handleCloseModal();
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  const handleConsulted = (id) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, consulted: !appointment.consulted }
          : appointment
      )
    );
  };

  return (
    <div>
      <h1 className="text-white my-5">Clinic React</h1>
      <h3 className="text-white my-4">Our Specialists</h3>
      <Doctors doctors={doctorData} onDoctorClick={handleOpenModal} />
      <AppointmentList
        appointment={appointments}
        onDelete={handleDeleteAppointment}
        onConsulted={handleConsulted}
      />
      <AddModal
        show={showModal}
        handleClose={handleCloseModal}
        selectedDoctor={selectedDoctor}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;
