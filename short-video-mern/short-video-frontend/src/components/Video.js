import React , {useRef, useState} from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if(playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video">
      <video
        src="https://res.cloudinary.com/dlpmq2eal/video/upload/v1674213711/pinterestdownloader.com-1674213663.240808_ktzfzo.mp4"
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoFooter />
    </div>
  );
};

export default Video;