import React, { useState, useEffect } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

import axios from "./components/axios";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, [messages]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Chat messages={messages} />
        </div>
      )}
    </div>
  );
};
export default App;
