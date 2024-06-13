import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  ReactNode,
  FC,
  useRef,
} from 'react'
import {
  getCommentsFromPost,
  updateComment,
  deleteComment,
} from '../actions/comments'
import { CommentI } from '../@types'
import { commentReducer } from '../reducers/comments/reducer'
import {
  addCommentAction,
  updateCommentAction,
  deleteCommentAction,
  loadCommentsAction,
  setLoadingAction,
  setErrorAction,
  setCurrentPageAction,
} from '../reducers/comments/actions'

interface CommentsContextType {
  comments: CommentI[]
  isLoading: boolean
  error: string
  hasMore: boolean
  loadMoreComments: () => void
  handleAddComment: (newComment: CommentI) => void
  handleUpdateComment: (updatedComment: CommentI) => void
  handleDeleteComment: (commentId: number) => void
}

interface CommentsProviderProps {
  postId: number
  children: ReactNode
}

export const CommentsContext = createContext<CommentsContextType | undefined>(
  undefined,
)

export const CommentsProvider: FC<CommentsProviderProps> = ({
  postId,
  children,
}) => {
  const [state, dispatch] = useReducer(commentReducer, {
    comments: [],
    isLoading: false,
    error: '',
    hasMore: true,
    currentPage: 1,
  })

  // added this in order to stop reactStrict mode from running the useEffect twice
  const initialized = useRef(false)

  const loadComments = useCallback(
    async (page: number) => {
      dispatch(setLoadingAction(true))
      dispatch(setErrorAction(''))
      try {
        const newComments = await getCommentsFromPost(postId, page)
        dispatch(loadCommentsAction(newComments, newComments.length > 0))
        dispatch(setCurrentPageAction(page))
      } catch (error) {
        console.error(error)
        dispatch(setErrorAction('Failed to load comments.'))
      } finally {
        dispatch(setLoadingAction(false))
      }
    },
    [postId],
  )

  const loadMoreComments = useCallback(() => {
    loadComments(state.currentPage + 1)
  }, [state.currentPage, loadComments])

  const handleAddComment = (newComment: CommentI) => {
    dispatch(addCommentAction(newComment))
  }

  const handleUpdateComment = async (updatedComment: CommentI) => {
    try {
      const updated = await updateComment(updatedComment.id, updatedComment)
      dispatch(updateCommentAction(updated))
    } catch (error) {
      console.error('Failed to update comment.')
    }
  }

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment(commentId)

      dispatch(deleteCommentAction(commentId))
    } catch (error) {
      console.error('Failed to delete comment.')
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      loadComments(1)
    }
  }, [loadComments])

  const contextValue: CommentsContextType = {
    ...state,
    loadMoreComments,
    handleAddComment,
    handleUpdateComment,
    handleDeleteComment,
  }

  return (
    <CommentsContext.Provider value={contextValue}>
      {children}
    </CommentsContext.Provider>
  )
}

export const useComments = (): CommentsContextType => {
  const context = useContext(CommentsContext)
  if (!context) {
    throw new Error('useComments must be used within a CommentsProvider')
  }
  return context
}
