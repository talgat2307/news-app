import {
  DELETE_COMMENT,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS, POST_COMMENT_FAILURE,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
} from '../actionTypes';

const initialState = {
  loading: false,
  error: null,
  commentsData: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, commentsData: action.commentsList };
    case FETCH_COMMENTS_FAILURE:
      return { ...state, error: action.error };
    case POST_COMMENT_REQUEST:
      return { ...state, loading: true };
    case POST_COMMENT_SUCCESS:
      return { ...state, loading: false };
    case POST_COMMENT_FAILURE:
      return { ...state, error: action.error };
    // case DELETE_COMMENT:
    //   return {
    //     ...state,
    //     commentsData: state.commentsData.filter(item => item.id !== action.commentId),
    //   };
    default:
      return state;
  }
};

export default commentsReducer;