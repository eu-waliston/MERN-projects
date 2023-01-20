import React from "react";
import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://res.cloudinary.com/dlpmq2eal/video/upload/v1674213711/pinterestdownloader.com-1674213663.240808_ktzfzo.mp4"
          channel="@Animes-Loff"
          description="Short Anime Lofi Video Ghibi Studios's"
          song="Lofi Relax"
          likes={345}
          shares={200}
          messages={90}
        />

        <Video
          url="https://res.cloudinary.com/dlpmq2eal/video/upload/v1674213711/pinterestdownloader.com-1674213663.240808_ktzfzo.mp4"
          channel="@Animes-Loff"
          description="Short Anime Lofi Video Ghibi Studios's"
          song="Lofi Relax"
          likes={345}
          shares={200}
          messages={90}
        />
      </div>
    </div>
  );
}

export default App;
