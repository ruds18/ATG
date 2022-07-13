import React from "react";
import "../../components/posts/Post.css";
import post1 from "../../assets/post1.png";
import author1 from "../../assets/post1_author.png";
import view from "../../assets/views.svg";
import share from "../../assets/share.svg";
function Post() {
  return (
    <div className="container-fluid">

      <div className="card" style={{ width: "45rem" }}>
        <img src={post1} className="card-img-top border-0" alt="..." />
        <div className="card-body">
         <h4 className="post-type">✍️ Article</h4>
          <h5 className="card-title ">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
          <p className="card-text">
          I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
          </p>
          <div className="post-info mt-4 d-flex justify-content-between">
            <div className="post-info_author d-flex align-items-center">
             <img src={author1} alt=""/>
             <h3>Sarthak Kamra</h3>
            </div>
            <div className="post-info_views d-flex align-items-center">
                <div className="views d-flex align-items-center">
                    <img src={view} alt=""/>
                    <p className="px-2">1.4k views</p>
                </div>
                <img  style={{ marginLeft : "30px" }} src={share} alt=""/>
            </div>
          </div>
        </div>


      </div>
      <div className="card mt-3" style={{ width: "18rem;" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
          What if famous brands had regular fonts? Meet RegulaBrands!
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem;" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
