import React,{useRef,useState} from  "react";
import "./video.css";
import VideoFooter from "./videofooter";
import VideoSidebar from "./VideoSidebar";
function Video({url,channel,description,song,likes,messages,shares}){

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const handlePlayVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
          } else {
            videoRef.current.play();
            setPlaying(true);
          }
    }
    return(
        <div className="video">
        <video 
        className="video__player"
        loop
        onClick={handlePlayVideo}
        ref={videoRef}
        src={url} >

        </video>
       <VideoFooter 
           username={channel}
           description={description}
           song={song}
       />
         <VideoSidebar
           likes={likes}
           share={shares}
           comment={messages}
           />
        </div>
    )
}
export default Video    