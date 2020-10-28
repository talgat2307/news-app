import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNews } from '../store/actions/newsActions';

const AddPost = props => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPost(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitPostHandler = (e) => {
    e.preventDefault();
    dispatch(postNews(post));

    setPost({
      title: '',
      body: '',
    });

    props.history.push('/');
  };

  return (
    <div className='AddPost'>
      <h2>Add new post</h2>
      <form
        onSubmit={(e) => submitPostHandler(e)}
        className='Form'
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id='title'
            name='title'
            value={post.title}
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            name="body"
            value={post.body}
            onChange={(e) => inputChangeHandler(e)}
            id="content"
            cols="30"
            rows="10"
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="file"/>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default AddPost;