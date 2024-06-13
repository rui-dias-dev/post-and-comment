import { useState, useEffect, useCallback, useRef } from 'react'
import { getSinglePost } from '../actions/posts'
import { PostI } from '../@types'

const useGetSinglePost = (postId: number) => {
  const [post, setPost] = useState<PostI | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // added this in order to stop reactStrict mode from running the useEffect twice
  const initialized = useRef(false)

  const loadPost = useCallback(async (id: number) => {
    setIsLoading(true)
    setError('')
    try {
      const fetchedPost = await getSinglePost(id)
      setPost(fetchedPost)
      setError('')
    } catch (error) {
      console.error(error)
      setError('Failed to load post.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true

      loadPost(postId)
    }
  }, [loadPost, postId])

  return {
    post,
    isLoading,
    error,
  }
}

export default useGetSinglePost
