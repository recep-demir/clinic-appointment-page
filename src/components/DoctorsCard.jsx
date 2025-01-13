import React from 'react'
import "../CSS/DoctorsCard.css"

const DoctorsCard = ({name,img,dep,id}) => {
  return (
    <div >
         <div className="card w-100" style={{ width: "20rem" }}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">
      {dep}
    </p>
  </div>
  </div>
    </div>
  )
}

export default DoctorsCard