import React from 'react'
import "../CSS/AppointmentList.css"
import { MdOutlineCancel } from "react-icons/md";




const AppointmentList = ({appointment}) => {
    return (
        <div >
          {appointment && appointment.length > 0 ? (
            appointment.map((item) => (
              <div className='patientlist' key={item.id}>
                <div>
                <h4 className='text-danger'>{item.patient}</h4>
                <h5 className='text-white'>{item.doctor}</h5>
                </div>
                <div className='mt-3'  >
                
                <h4 className='text-white'>{new Date(item.day).toLocaleDateString()}</h4>

                </div>
                <div className='mt-3'>
                <MdOutlineCancel className='icon-red' />
                </div>
                
                
               
              </div>
            ))
          ) : (
            <p>No appointments available</p>
          )}
        </div>
      );
}

export default AppointmentList