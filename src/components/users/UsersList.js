import React from 'react'
import { useGetUsers } from '../../hooks/useGetUsers'
import { UserCard } from './UserCard'

export const UsersList = () => {
  const { data } = useGetUsers();

  return (
    <div className="row">
      {
        data.map(user => 
          (
            <UserCard key={user.id} {...user} />
          )
        )
      }
    </div>
  )
}
