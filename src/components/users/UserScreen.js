import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUsers } from '../../hooks/useGetUsers'
import { UserCard } from './UserCard'

export const UserScreen = () => {
  const {userId} = useParams()
  const {data} = useGetUsers(userId)
  console.log(data)
  return (
    <div className="row">
      <div className="col-md-4">
      <UserCard key={data.id} {...data} isDetail={true} />
      </div>
      <div className="col-md-8">

        <h4>Email: <span className="text-muted">{data.email}</span></h4>
        <h4>Complete Name: <span className="text-muted">{data.first_name} {data.last_name}</span></h4>
      </div>
    </div>
  )
}
