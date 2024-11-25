import React from 'react'
import Top from "../../components/top/Top";
import Left from "../../components/left/Left";
import Feed from "../../components/feed/Feed";
import Right from "../../components/right/Right";
import "./profile.css"
const profile = () => {
  return (
    // <>
    //   <Top />
    //     <div className="profile">
    //         <Left />
    //         <div className="right">
    //             <div className="top">
    //                 <div className="profileCover">
    //                     <img
    //                         src="/assets/Post/3.jfif"
    //                         alt=""
    //                         className="cover"
    //                     />
    //                     <img src="/assets/Person/8.jfif" alt="" className="avatar" />
    //                 </div>
    //                 <div className="info">
    //                     <h4 className="infoName">Ayenor Christopher</h4>
    //                     <span className="InfoDesc">Hello my friends</span>
    //                 </div>
    //             </div>
    //             <div className="bottom">
    //                 <Feed />
    //                 <Right  profile />
    //             </div>
    //         </div>
    //     </div>
    // </>

    <>
      <Top />
      <div className="profile">
        <Left />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img
                            src="/assets/Post/3.jfif"
                            alt=""
                            className="profileCoverImg"
                    />
                     <img src="/assets/Person/8.jfif" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                        <h4 className="profileInfoName">Ayenor Christopher</h4>
                        <span className="profileInfoDesc">Hello my friends</span>
                </div>
             </div>
            <div className="profileRightBottom">
                <Feed />
                <Right />
            </div>
        </div>
      </div>
    </>
  );
}

export default profile