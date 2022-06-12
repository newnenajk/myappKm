import React from 'react';
import { images } from '../../contents';
// import {  new1 } from '../../contents';
import news1 from "../../assets/images/news/new1.jpg";
import './Home.scss';
const HomeIndex = () => {
  return (
    

<div>
    <div className='box__container'>
      <div className='pinkDiv'></div>
      <div className='blueDiv'></div>
      <h1>Welcome to Trsury </h1>
    </div>

    <div className="posts-listing">
      <div className="post-item">
        <a className="post-item__inner" href="#">
          <div className="post-item__thumbnail-wrapper">
            <div className="post-item__thumbnail" style={{ backgroundImage: `url(${news1})`}}>
            
            </div> 
            
            {/* </div>  */}
             {/* <h1 style={{color: "red"}}>{images.logo}</h1> */}
          </div> 
        </a>
      </div>

    </div>

    {/* <div class="posts-listing">
    
    <div class="post-item">
      <a class="post-item__inner" href="#">
    
        <div class="post-item__thumbnail-wrapper">
          <div class="post-item__thumbnail" style="background-image:url(image_url.jpg);"></div>
        </div>
    
        <div class="post-item__content-wrapper">
          <h2 class="post-item__title heading-size-4"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></h2>
      
          
    <div class="post-item__metas">
      <time class="post-item__meta post-item__meta--date" datetime="2022-02-14T20:24:54+00:00">February 14, 2022</time>
            <p class="post-item__meta post-item__meta--category">Category</p>
          </div>
      
                  <div class="post-item__excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        </div>
          
          <div class="post-item__read-more-wrapper">
            <p class="post-item__read-more">Read more</p>
          </div>
      
        </div>
    
      </a>
    </div>
    
   
    </div> */}

</div>
   
  );
}


export default HomeIndex;
