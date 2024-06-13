import { CommentI } from '../../@types'

export enum CommentActionTypes {
  ADD_COMMENT = 'ADD_COMMENT',
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
  LOAD_COMMENTS = 'LOAD_COMMENTS',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_HAS_MORE = 'SET_HAS_MORE',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

export function addCommentAction(newComment: CommentI) {
  return {
    type: CommentActionTypes.ADD_COMMENT,
    payload: {
      newComment,
    },
  } as const
}

export function updateCommentAction(updatedComment: CommentI) {
  return {
    type: CommentActionTypes.UPDATE_COMMENT,
    payload: {
      updatedComment,
    },
  } as const
}

export function deleteCommentAction(commentId: number) {
  return {
    type: CommentActionTypes.DELETE_COMMENT,
    payload: {
      commentId,
    },
  } as const
}

export function loadCommentsAction(comments: CommentI[], hasMore: boolean) {
  return {
    type: CommentActionTypes.LOAD_COMMENTS,
    payload: {
      comments,
      hasMore,
    },
  } as const
}

export function setLoadingAction(isLoading: boolean) {
  return {
    type: CommentActionTypes.SET_LOADING,
    payload: {
      isLoading,
    },
  } as const
}

export function setErrorAction(error: string) {
  return {
    type: CommentActionTypes.SET_ERROR,
    payload: {
      error,
    },
  } as const
}

export function setHasMoreAction(hasMore: boolean) {
  return {
    type: CommentActionTypes.SET_HAS_MORE,
    payload: {
      hasMore,
    },
  } as const
}

export function setCurrentPageAction(currentPage: number) {
  return {
    type: CommentActionTypes.SET_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  } as const
}

export type CommentActions =
  | ReturnType<typeof addCommentAction>
  | ReturnType<typeof updateCommentAction>
  | ReturnType<typeof deleteCommentAction>
  | ReturnType<typeof loadCommentsAction>
  | ReturnType<typeof setLoadingAction>
  | ReturnType<typeof setErrorAction>
  | ReturnType<typeof setHasMoreAction>
  | ReturnType<typeof setCurrentPageAction>
