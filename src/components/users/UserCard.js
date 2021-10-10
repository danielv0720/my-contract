import React from 'react'

export const UserCard = ({first_name, email}) => {
  return (
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">{first_name}</h5>
        <p className="card-text">{email}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  )
}
