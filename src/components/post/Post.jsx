import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummy";
import {useState} from "react";

const Post = ({ post }) => {
  const [like,setLike]=useState(post.like)
  const [isLiked,setIsLiked]=useState(false);
 function likeHandler (){
  
   if(isLiked ){
     setLike(like-1)
     setIsLiked(false)
   }
   else{
     setLike(like+1)
     setIsLiked(true)
   }
 }
  return (
    <div className="post">
      <div className="wrap">
        <div className="top">
          <div className="topLeft">
            <img
              src={
                Users.filter((u) => u.id === post?.userId)[0]?.profilePicture
              }
              alt=""
              className="profileImg"
            />{" "}
            <span className="username">
              {Users.filter((u) => u.id === post?.userId)[0]?.username}
            </span>
            <span className="date">{post.date}</span>
          </div>
          <div className="topRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="center">
          <img src={post.photo} alt="" className="posts" />
          <span className="text">{post?.desc}</span>
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <img
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
              className="like"
            />
            <img
              src="/assets/heart.jfif"
              onClick={likeHandler}
              alt=""
              className="like"
            />
            <span className="counter">{like} </span>
          </div>
          <div className="bottomRight">
            <span className="commentText">{post.comment} 0 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
