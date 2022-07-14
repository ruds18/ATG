import React from "react";
import "../../components/posts/Post.css";
import calendar from '../../assets/calendar.svg'
import location from '../../assets/location.svg'
import view from "../../assets/views.svg";
import share from "../../assets/share.svg";
function Post({ post_tittle, post_description, post_type, post_author_img, post_views, post_author, post_img , date, meeting_location, website}) {
  return (
    <div className="container-fluid">

      <div  className="card mt-3" style={{ width: "45rem" }}>
       {post_img ?   <img src={post_img} className="card-img-top border-0" alt="..." /> : ''  }
        <div className="card-body">
          <h4 className="post-type">{post_type}</h4>
          <h5 className="card-title ">{post_tittle}</h5>
          {post_description ?  <p className="card-text">
            {post_description}
          </p> : ''}

          {meeting_location && date ? <div className="card_meeting  mt-2 d-flex justify-content-start ">
             <div className="date d-flex ">
                <img src={calendar} alt=""/>
                <p className="px-1">{date}</p>
             </div>
             <div className="location d-flex mx-4">
               <img src={location} alt=""/>
               <p className="px-1">{meeting_location}</p>
             </div>
          </div>: ''}

         {website ?  <div className="website mt-3">
            <button className=" d-flex align-items-center justify-content-center w-100 bg-transparent">{website}</button>
          </div> : ''}
          <div className="post-info mt-4 d-flex justify-content-between">
            <div className="post-info_author d-flex align-items-center">
              <img src={post_author_img} alt="" />
              <h3>{post_author}</h3>
            </div>
            <div className="post-info_views d-flex align-items-center">
              <div className="views d-flex align-items-center">
                <img src={view} alt="" />
                <p className="px-2">{post_views}</p>
              </div>
              <img style={{ marginLeft: "30px" }} src={share} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Post;
