import React from 'react'
import Doctors from '../components/Doctors'
import AppointmentList from '../components/AppointmentList'
import {doctorData,appointmentData} from '../helpers/data'
import "../CSS/Home.css"

const Home = () => {
  return (
    <div>
        <h1 className='text-primary my-5 '>Clinic React</h1>
        <h3 className='my-4 '>Our Specialists</h3>
        <Doctors doctors={doctorData}/>
        <AppointmentList appointment={appointmentData}/>
    </div>
  )
}

export default Home