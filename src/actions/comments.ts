import { CommentI, CommentBodyI } from '../@types'

export const getCommentsFromPost = async (
  postId: number,
  page: number,
): Promise<CommentI[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_page=${page}&_limit=5`,
  )

  if (!response.ok) {
    throw new Error('Error getting comments.')
  }
  return response.json()
}

export const createComment = async (
  postId: number,
  comment: CommentBodyI,
): Promise<CommentI> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    },
  )
  if (!response.ok) {
    throw new Error('Error creating comment.')
  }
  return response.json()
}

export const updateComment = async (
  commentId: number,
  comment: CommentBodyI,
): Promise<CommentI> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    },
  )
  if (!response.ok) {
    throw new Error('Error updating comment.')
  }
  return response.json()
}

export const deleteComment = async (commentId: number): Promise<void> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`,
    {
      method: 'DELETE',
    },
  )

  if (!response.ok) {
    throw new Error('Error deleting comment.')
  }

  return response.json()
}
