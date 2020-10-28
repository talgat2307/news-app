import {
  DELETE_NEWS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS, NEWS_DETAILS_FAILURE,
  NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS,
  POST_NEWS_FAILURE,
  POST_NEWS_REQUEST,
  POST_NEWS_SUCCESS,
} from '../actionTypes';
import axiosAPI from '../../axios';

const fetchNewsRequest = () => {
  return { type: FETCH_NEWS_REQUEST };
};

const fetchNewsSuccess = (newsList) => {
  return { type: FETCH_NEWS_SUCCESS, newsList };
};

const fetchNewsFailure = (error) => {
  return { type: FETCH_NEWS_FAILURE, error };
};

export const fetchNews = () => {
  return async dispatch => {
    dispatch(fetchNewsRequest());
    try {
      const response = await axiosAPI('/news');
      dispatch(fetchNewsSuccess(response.data));
    } catch (e) {
      dispatch(fetchNewsFailure(e));
    }
  };
};

const newsDetailsRequest = () => {
  return { type: NEWS_DETAILS_REQUEST };
};

const newsDetailsSuccess = (singleNews) => {
  return { type: NEWS_DETAILS_SUCCESS, singleNews };
};

const newsDetailsFailure = (error) => {
  return { type: NEWS_DETAILS_FAILURE, error };
};

export const fetchNewsDetails = (id) => {
  return async dispatch => {
    dispatch(newsDetailsRequest());
    try {
      const response = await axiosAPI(`/news/${id}`);
      dispatch(newsDetailsSuccess(response.data));
    } catch (e) {
      dispatch(newsDetailsFailure(e));
    }
  };
};

const postNewsRequest = () => {
  return { type: POST_NEWS_REQUEST };
};

const postNewsSuccess = () => {
  return { type: POST_NEWS_SUCCESS };
};

const postNewsFailure = () => {
  return { type: POST_NEWS_FAILURE };
};

export const postNews = (news) => {
  return async dispatch => {
    dispatch(postNewsRequest());
    try {
      const response = await axiosAPI.post('/news', news);
      dispatch(postNewsSuccess(response.data));
    } catch (e) {
      dispatch(postNewsFailure(e));
    }
  };
};

const deleteSingleNews = (newsId) => {
  return { type: DELETE_NEWS, newsId };
};

export const deleteNews = (newsId) => {
  return async dispatch => {
    await axiosAPI.delete(`/news/${newsId}`);
    dispatch(deleteSingleNews(newsId));
  };
};
