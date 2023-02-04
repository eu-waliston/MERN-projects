import React from 'react';
import './App.css';

import Post from './components/post/Post';

function App() {
  return (
    <div className="App">
      <div className='app__header'>
        <img src={require("./components/assets/logo.png")} alt="Header" className="app__headerImage" />
      </div>

      <Post />
      <Post />
      <Post />
      
    </div>
  );
}

export default App;
