import { useEffect, useState } from "react"
import { getUsers } from "../services/getUsers"

export const useGetUsers = () => {
  const [users, setUsers] = useState({
    data: []
  })

  useEffect(() => {
    getUsers().then(users => {
      setUsers({
        data: users
      })
    })
  }, [])

  return users
}