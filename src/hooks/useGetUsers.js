import { useEffect, useState } from "react"
import { getUsers } from "../services/getUsers"

export const useGetUsers = (userId) => {
  const [users, setUsers] = useState({
    data: []
  })

  useEffect(() => {
    getUsers(userId).then(users => {
      setUsers({
        data: users
      })
    })
  }, [userId])

  return users
}