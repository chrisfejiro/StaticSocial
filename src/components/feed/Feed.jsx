import React from "react";
import "./feed.css";
import Give from "../giving/Give";
import Post from "../post/Post";
import { Posts } from "../../dummy";

const Feed = () => {
  return (
    <div className="feedbar">
      <div className="feedWrap">
        <Give />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
