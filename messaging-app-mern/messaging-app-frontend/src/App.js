import React, { useState, useEffect } from "react";
import "./App.css";
import Pusher from "pusher.js";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("f6fcde04f278d879b96b", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind__all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);





  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
export default App;
