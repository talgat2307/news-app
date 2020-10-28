import {
  DELETE_NEWS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS,
  POST_NEWS_FAILURE,
  POST_NEWS_REQUEST,
  POST_NEWS_SUCCESS,
} from '../actionTypes';

const initialState = {
  loading: false,
  error: null,
  newsData: [],
  newsDetails: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { ...state, loading: true };
    case FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, newsData: action.newsList };
    case FETCH_NEWS_FAILURE:
      return { ...state, error: action.error };
    case NEWS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case NEWS_DETAILS_SUCCESS:
      return { ...state, loading: false, newsDetails: action.singleNews };
    case POST_NEWS_REQUEST:
      return { ...state, loading: true };
    case POST_NEWS_SUCCESS:
      return { ...state, loading: false };
    case POST_NEWS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case DELETE_NEWS:
      return {
        ...state,
        newsData: state.newsData.filter(x => x.id !== action.newsId),
      };
    default:
      return state;
  }
};

export default newsReducer;