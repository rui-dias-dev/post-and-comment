import { PostI } from '../@types'

export const getPosts = async (page: number): Promise<PostI[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`,
  )

  if (!response.ok) {
    throw new Error('Error getting posts.')
  }
  return response.json()
}

export const getSinglePost = async (postId: number): Promise<PostI> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  )
  if (!response.ok) {
    throw new Error('Error getting post.')
  }
  return response.json()
}
