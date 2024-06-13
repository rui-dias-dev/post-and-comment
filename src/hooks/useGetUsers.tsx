import { useState, useEffect, useCallback, useRef } from 'react'
import { getUsers } from '../actions/users'
import { UserI } from '../@types'

const useGetUsers = () => {
  const [users, setUsers] = useState<UserI[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasMore, setHasMore] = useState(true)

  // added this in order to stop reactStrict mode from running the useEffect twice
  const initialized = useRef(false)

  const loadUsers = useCallback(async (page: number) => {
    setIsLoading(true)
    setError('')
    try {
      const newUsers = await getUsers(page)
      setUsers((prevUsers) => [...prevUsers, ...newUsers])
      setCurrentPage((prevPage) => prevPage + 1)
      setHasMore(newUsers.length > 0)
      setError('')
    } catch (error) {
      console.error(error)
      setError('Failed to load users.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleLoadMoreUsers = useCallback(() => {
    loadUsers(currentPage)
  }, [loadUsers, currentPage])

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true

      loadUsers(currentPage)
    }
  }, [loadUsers])

  return {
    users,
    isLoading,
    error,
    hasMore,
    handleLoadMoreUsers,
  }
}

export default useGetUsers
