import React from 'react'
import '../../components/posts/Posts.css'
import navDropDown from '../../assets/navDropDown.svg'
import join_posts from '../../assets/join_posts.svg'
import Post from './Post'
import editIcon from '../../assets/edit.svg'
import location from '../../assets/location.svg'
import info from '../../assets/info.svg'

function Posts() {
    return (
        <div className=" posts container d-flex align-items-center  justify-content-between flex-column">
            <div className="Posts_nav container-fluid mx-5 d-flex d align-items-center">
                <ul className="Posts_nav-options list-group-horizontal   list-group mb-2">
                    <li className="Posts_nav-option  list-group-item border-0" >All Posts(32)</li>
                    <li className="Posts_nav-option list-group-item border-0" > Article</li>
                    <li className="Posts_nav-option list-group-item border-0">Event</li>
                    <li className="Posts_nav-option list-group-item border-0" >Education</li>
                    <li className="Posts_nav-option list-group-item border-0">job</li>
                </ul>

                <div className="Posts_nav-btns ">
                    <button type="button" class="btn btn-secondary ms-2 ">Write a post <span><img className="mr-4" src={navDropDown} alt="" /></span> </button>
                    <button type="button" class="btn btn-primary"> <span> <img className="mr-4" src={join_posts} alt="" /> </span> Join Group  </button>
                </div>
            </div>

            <div className="  post-section pt-5 w-70 container-fluid  d-flex justify-content-between ">
                <div className="post">
                    <Post />
                </div>
                <div className="post-options pt-4   d-flex flex-column">
                    <div class="input-group mb-3">
                        <span class=" bg-transparent border-0" ><img src={location} className="img-fluid" alt="" /></span>
                        <input type="text" class="form-control bg-transparent border-0" placeholder="Lucknow,India" aria-label="Username" aria-describedby="basic-addon1" />
                        <span class="input-group-text bg-transparent border-0" id="basic-addon1"><img src={editIcon} alt="" /></span>
                    </div>
                    <div className="d-flex post-options_info ">
                        <img  src={info} alt="" />
                        <p >Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
