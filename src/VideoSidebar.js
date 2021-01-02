import React,{useState} from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FavoriteBorder } from "@material-ui/icons";
 




function VideoSidebar({likes,share,comment}){




    const[liked,setLiked]= useState(false);
     return(





     <div className="VideoSidebar">
      <div className="VideoSidebar__button">
          {liked ? ( <FavoriteIcon onClick={(e)=>setLiked(false)}/>  )
          :
         ( <FavoriteBorder onClick={(e)=>setLiked(true)}/>
         )
        }
{          <p>{liked ? likes + 1 : likes}</p>
}      </div>
      <div className="VideoSidebar__button">
          <MessageIcon />
          <p>{comment}</p>
      </div>
      <div className="VideoSidebar__button">
          <ShareIcon />
          <p>{share}</p>
      </div>
     </div>
     )
 }




 export default VideoSidebar