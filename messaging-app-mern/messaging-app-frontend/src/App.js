import React, { useState, useEffect } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";

import axios from "./components/axios";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {
const [messages, setMessages] = useState([]);

useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
}, [messages]);

return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/app" element={[<Sidebar />, <Chat messages={messages} />]} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};
export default App;
