import React from 'react';
import "./videofooter.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFooter({username,description,song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">






            <h3>{username}</h3>
            <p>{description} </p>
			<MusicNoteIcon/>
            <div className="ticker__class">
           <Ticker className="footer__ticker" mode="smooth">
            { ({index})=>(
                  <>
                  <p>{song}</p>
                </>  
            )
              
            } 
       
        
           </Ticker>
         
           </div> 
            </div>
        </div>
    )
}

export default VideoFooter
