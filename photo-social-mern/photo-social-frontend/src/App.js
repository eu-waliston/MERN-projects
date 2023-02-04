import React, { useState, useEffect } from 'react';
import './App.css';

import Post from './components/post/Post';

function App() {

  const [posts, setPosts] = useState([
    {
      username: "FB_Shaulyb",
      caption: " Build a Messaging app with MERNStack",
      imageUrl: "https://www.techlifediary.com/wp-content/uploads/2020/06/react-js.png"
    },
    {
      username: "Alka_Lapse",
      caption: "Such a bautiful world",
      imageUrl: "https://quotefancy.com/media/wallpaper/3840x2160/126631-Charles-Dickens-Quote-And-a-beautiful-world-you-live-in-%0Awhen-it-is.jpg"
    }
  ])

  return (
    <div className="App">
      <div className='app__header'>
        <img src={require("./components/assets/logo.png")} alt="Header" className="app__headerImage" />
      </div>

      {posts.map(post => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

    </div>
  );
}

export default App;
