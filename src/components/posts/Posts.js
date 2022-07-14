import React from 'react'
import '../../components/posts/Posts.css'
import navDropDown from '../../assets/navDropDown.svg'
import join_posts from '../../assets/join_posts.svg'
import Post from './Post'
import editIcon from '../../assets/edit.svg'
import location from '../../assets/location.svg'
import info from '../../assets/info.svg'
import post1 from "../../assets/post1.png";
import author1 from "../../assets/post1_author.png";
import post2 from '../../assets/post2.png'
import author2 from '../../assets/author_post2.png'
import post3 from '../../assets/post3.png'
import author3 from '../../assets/author_post3.png'
import author4 from '../../assets/author_post4.png'


function Posts() {

 const posts_data = [
     {
         id: 1,
         post_img: post1,
         post_type : '✍️ Article',
         post_tittle: 'What if famous brands had regular fonts? Meet RegulaBrands!',
         post_description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
         post_author_img: author1 ,
         post_author: 'Sarthak Kamra',
         post_views: '1.4k views'
     },
     {
        id: 2,
        post_img: post2,
        post_type : '🔬️ Education',
        post_tittle: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        post_description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
        post_author_img: author2,
        post_author: 'Sarah West',
        post_views: '1.2k views'
     },
     {
         id:3,
         post_img: post3,
         post_type : '🗓️ Meetup',
         post_tittle: 'Finance & Investment Elite Social Mixer @Lujiazui',
         post_description: '',
         date: 'Fri, 12 Oct, 2018',
         meeting_location: 'Ahmedabad, India',
         post_author_img: author3,
         post_author: 'Ronal Jones',
         post_views: '1.2k views',
         website: 'Visit Website'

     },{
         id: 4,
         post_type : '💼️ Job',
         post_tittle: 'Software Developer',
         date: 'Innovaccer Analytics Private Ltd.',
         meeting_location: 'Noida, India',
         post_views: '1.4k views',
         post_author: 'Joseph Gray',
         post_author_img:author4  ,
         website: 'Apply on Timesjobs'
     }
 ]

  const posts = posts_data.map((data)=>
      <Post post_type={data.post_type} post_tittle={data.post_tittle} post_description={data.post_description} post_author_img={data.post_author_img} post_author={data.post_author} post_views={data.post_views} post_img={data.post_img} date={data.date} meeting_location = {data.meeting_location} website={data.website}  />
  )

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

            <div className="  post-section pt-3 w-70 container-fluid  d-flex justify-content-between ">
                <div className="post">
                    {posts}
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
