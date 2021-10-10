import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUsers } from '../../hooks/useGetUsers'

export const UserScreen = () => {
  const {userId} = useParams()
  const {data} = useGetUsers(userId)
  console.log(data)
  return (
    <div>
      <h1>{data.email}</h1>
    </div>
  )
}
