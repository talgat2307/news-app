import {
  DELETE_COMMENT,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  POST_COMMENT_FAILURE,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
} from '../actionTypes';
import axiosAPI from '../../axios';

const fetchCommentsRequest = () => {
  return { type: FETCH_COMMENTS_REQUEST };
};

const fetchCommentsSuccess = (commentsList) => {
  return { type: FETCH_COMMENTS_SUCCESS, commentsList };
};

const fetchCommentsFailure = (error) => {
  return { type: FETCH_COMMENTS_FAILURE, error };
};

export const fetchComments = () => {
  return async dispatch => {
    dispatch(fetchCommentsRequest());
    try {
      const response = await axiosAPI('/comments');
      dispatch(fetchCommentsSuccess(response.data));
    } catch (e) {
      dispatch(fetchCommentsFailure(e));
    }
  };
};

const postCommentRequest = () => {
  return { type: POST_COMMENT_REQUEST };
};

const postCommentSuccess = () => {
  return { type: POST_COMMENT_SUCCESS };
};

const postCommentFailure = (error) => {
  return { type: POST_COMMENT_FAILURE, error };
};

export const postComment = (comment) => {
  return async dispatch => {
    dispatch(postCommentRequest());
    try {
      const response = await axiosAPI.post('/comments', comment);
      dispatch(postCommentSuccess(response.data));
    } catch (e) {
      dispatch(postCommentFailure(e));
    }
  };
};

const deleteComment = (commentId) => {
  return { type: DELETE_COMMENT, commentId};
};

export const deleteSingleComment = (commentId) => {
  return async dispatch => {
    await axiosAPI.delete(`/comments/${commentId}`);
    // dispatch(deleteComment(commentId))
  };
};