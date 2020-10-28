import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNews, fetchNews } from '../store/actions/newsActions';

const Posts = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.newsState.newsData);


  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const deleteNewsHandler = (id) => {
    dispatch(deleteNews(id));
  };

  return (
    <div className="Posts">
      <div className='PostsHead'>
        <h2>Posts</h2>
        <h2><Link to={'/add-post'}>Add new post</Link></h2>
      </div>
      {news && news.map(post => {
        return (
          <div
            className='post'
            key={post.id}
          >
            <div className='imageBox'>
              <img
                src="https://collection.cooperhewitt.org/images/pictureless-person-sq.jpg"
                alt="anonymous" width={'100px'}/>
            </div>
            <div className='postText'>
              <p>{post.body}</p>
              <div className='postFooter'>
                <p style={{ color: 'gray' }}><Moment date={post.publish_date}/>
                </p>
                <p><Link to={`/news/${post.id}`}>Read full post</Link></p>
              </div>
              <button onClick={() => deleteNewsHandler(post.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;