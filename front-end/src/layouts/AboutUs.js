import React from 'react';
import avatar from '../assets/avatar/userImage_1.jpg';

function AboutUs() {
     return (
          <div className='flex flex-col items-center p-5 gap-6 bg-side-bar-navigation' style={{ width: "100%", height: "60vh" }}>
               <div className='text-t-watch-color'>
                    <h1 className='text-3xl sm:text-6xl'>About Us</h1>
               </div>
               <div className='sm:flex justify-center  space-x-5 h-4/5'>
                    <div className=''>
                         <img src={avatar} alt="founderAvatar" className='w-full  rounded-3xl h-56 sm:h-80 object-cover'/>
                    </div>
                    <div className='pt-3 sm:pt-0 text-center sm:text-start sm:w-4/5 h-4/5'>
                         <p className='text-white-color sm:text-xl xl:text-3xl text-xs'>
                              It is a long established fact that a reader will be
                              distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less
                              normal distribution of letters, as opposed to
                              using 'Content here, content here', making it
                              look like readable English. Many desktop
                              publishing packages and web page editors now
                              use Lorem Ipsum as their default model text,
                              and a search for 'lorem ipsum' will uncover
                              many web sites still in their infancy. Various
                              versions have evolved over the years,                             
                         </p>
                    </div>
               </div>
          </div>
     );
}

export default AboutUs;