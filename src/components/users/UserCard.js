import React from 'react'
import { NavLink } from 'react-router-dom'

export const UserCard = ({first_name, email, avatar}) => {
  return (
    <div className="card m-2 mb-3"style={{width: "18rem"}} >
      <img src={avatar} className="card-img-top mt-2" />
      <div className="card-body">
        <h5 className="card-title">{first_name}</h5>
        <p className="card-text">{email}</p>
        <NavLink 
            
              className="btn btn-primary" 
              exact
              to="/questions">
                  Detail
        </NavLink>
      </div>
    </div>
  )
}
