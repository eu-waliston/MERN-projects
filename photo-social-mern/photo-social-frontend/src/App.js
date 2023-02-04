import React, { useState, useEffect } from 'react';
import './App.css';

import Post from './components/post/Post';

import { makeStyles } from '@mui/styles';

import Modal from '@mui/material/Modal';
import { Button, Input } from '@mui/material';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    poistion: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shasows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);

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
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2>Modal Code</h2>
        </div>

      </Modal>


      <div className='app__header'>
        <img src={require("./components/assets/logo.png")} alt="Header" className="app__headerImage" />
      </div>

      <Button onClick={() => setOpen(true)}>
        Sign Up
      </Button>

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
