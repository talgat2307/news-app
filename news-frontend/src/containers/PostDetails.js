import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsDetails } from '../store/actions/newsActions';
import {
  deleteSingleComment,
  fetchComments,
  postComment,
} from '../store/actions/commentActions';

const PostDetails = ({ match }) => {

    const [comment, setComment] = useState({
      author: '',
      comment: '',
      news_id: '',
    });

    const dispatch = useDispatch();
    const newsDetails = useSelector(state => state.newsState.newsDetails);
    const comments = useSelector(state => state.commentsState.commentsData);

    useEffect(() => {
      dispatch(fetchNewsDetails(match.params.id));
    }, [dispatch, match.params.id]);

    const inputChangeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setComment(prevState => {
        return {
          ...prevState,
          [name]: value,
          news_id: newsDetails.id,
        };
      });
    };

    const submitCommentHandler = (e) => {
      e.preventDefault();
      dispatch(postComment(comment));

      setComment({
        author: '',
        comment: '',
        news_id: '',
      });
    };

    useEffect(() => {
      const interval = setInterval(() => {
        dispatch(fetchComments());
      }, 2000);
      return () => clearInterval(interval);
    }, [dispatch]);

    const deleteCommentHandler = (id) => {
      dispatch(deleteSingleComment(id));
    };

    return (
      <div>
        <section>
          <h1>{newsDetails.title}</h1>
          <p style={{ color: 'gray' }}><Moment date={newsDetails.publish_date}/>
          </p>
          <p>{newsDetails.body}</p>
        </section>
        <section>
          <h2>Comments</h2>
          {comments && comments.map(comment => {
            if (comment.news_id === newsDetails.id) {
              return (
                <div
                  key={comment.id}
                  className={'comment'}>
                  <p><strong>{comment.author}</strong>: {comment.comment}</p>
                  <div>
                    <button
                      onClick={() => {deleteCommentHandler(comment.id);}}>Delete
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </section>
        <section className='addComment'>
          <h2>Add Comment</h2>
          <form
            onSubmit={(e) => {submitCommentHandler(e);}}
            className='Form'
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id='name'
                name='author'
                value={comment.author}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div>
              <label htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                value={comment.comment}
                onChange={(e) => inputChangeHandler(e)}
                id="comment"
                cols="30"
                rows="10"
              />
            </div>
            <button>Add</button>
          </form>
        </section>

      </div>
    );
  }
;

export default PostDetails;