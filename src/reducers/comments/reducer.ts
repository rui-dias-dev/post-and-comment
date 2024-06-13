import { CommentI } from '../../@types'
import { CommentActionTypes, CommentActions } from './actions'

interface CommentsState {
  comments: CommentI[]
  isLoading: boolean
  error: string
  hasMore: boolean
  currentPage: number
}

const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  error: '',
  hasMore: true,
  currentPage: 1,
}

export function commentReducer(
  state: CommentsState = initialState,
  action: CommentActions,
): CommentsState {
  switch (action.type) {
    case CommentActionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload.newComment, ...state.comments],
      }

    case CommentActionTypes.UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.updatedComment.id
            ? action.payload.updatedComment
            : comment,
        ),
      }

    case CommentActionTypes.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload.commentId,
        ),
      }

    case CommentActionTypes.LOAD_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...action.payload.comments],
        hasMore: action.payload.hasMore,
      }

    case CommentActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }

    case CommentActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      }

    case CommentActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      }

    default:
      return state
  }
}
