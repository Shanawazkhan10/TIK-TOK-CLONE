import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom"
import Video from "./video"
import "./App.css"
import db from "./firebase"







function App(){

    const [videos,setVideos]=useState([]);

 useEffect(()=>{
  db.collection('videos').onSnapshot(snapshot=>(
      setVideos(snapshot.docs.map(doc=>doc.data()))
  ))
 },[videos])
    return(
<>

<div className="App">
   
  {/* <h1> HELLO TIKTOK, WE BUILD YOU USE</h1> */}
  <div class="app__videos">
  {
    videos.map(({url,channel,description,song,likes,messages,shares})=>(
 <Video url={url}
 channel={channel}
 description={description}
  song={song}
  likes={likes}
  messages={messages}
   shares={shares}
   />
    ))
    }
  </div>
  </div>
</>

    )
}
export default App;