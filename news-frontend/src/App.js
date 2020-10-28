import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Posts from './containers/Posts';
import PostDetails from './containers/PostDetails';
import AddPost from './containers/AddPost';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={'/'} exact component={Posts} />
          <Route path={'/news/:id'} component={PostDetails} />
          <Route path={'/add-post'} component={AddPost} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </div>
);

export default App;
