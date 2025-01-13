import React from 'react'
import Doctors from '../components/Doctors'
import AppointmentList from '../components/AppointmentList'
import {doctorData,appointmentData} from '../helpers/data'
import "../CSS/Home.css"
import AddModal from '../components/AddModal'

const Home = () => {
  return (
    <div>
        <h1 className='text-white my-5 '>Clinic React</h1>
        <h3 className='text-white my-4 '>Our Specialists</h3>
        <Doctors doctors={doctorData}/>
        <AppointmentList appointment={appointmentData}/>
        <AddModal/>
    </div>
  )
}

export default Home