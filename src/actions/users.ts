import { UserI } from '../@types'

export const getUsers = async (page: number): Promise<UserI[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`,
  )

  if (!response.ok) {
    throw new Error('Error getting users.')
  }
  return response.json()
}
