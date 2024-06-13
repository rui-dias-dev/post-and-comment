import { useState, useEffect, useCallback, useRef } from 'react'
import { getPosts } from '../actions/posts'
import { PostI } from '../@types'

const useGetPosts = () => {
  const [posts, setPosts] = useState<PostI[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasMore, setHasMore] = useState(true)

  // added this in order to stop reactStrict mode from running the useEffect twice
  const initialized = useRef(false)

  const loadPosts = useCallback(async (page: number) => {
    setIsLoading(true)
    setError('')
    try {
      const newPosts = await getPosts(page)
      setPosts((prevPosts) => [...prevPosts, ...newPosts])
      setCurrentPage((prevPage) => prevPage + 1)
      setHasMore(newPosts.length > 0)
      setError('')
    } catch (error) {
      console.error(error)
      setError('Failed to load posts.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleLoadMorePosts = useCallback(() => {
    loadPosts(currentPage)
  }, [loadPosts, currentPage])

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true

      loadPosts(currentPage)
    }
  }, [loadPosts])

  return {
    posts,
    isLoading,
    error,
    hasMore,
    handleLoadMorePosts,
  }
}

export default useGetPosts
