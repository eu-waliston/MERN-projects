import React, { useState, useEffect } from "react";
import "./App.css";

import Pusher from 'pusher-js';

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

import axios from './components/axios'

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then(res => {
      setMessages(res.data)
    })
  })

  useEffect(() => {


    const pusher = new Pusher("f6fcde04f278d879b96b", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    };
  }, [messages]);


  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
};
export default App;
