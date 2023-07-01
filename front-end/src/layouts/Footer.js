import React from "react";
import Telephone from "../common/TelephoneIcon";
import EnvelopeBasic from "../common/EnvelopeIcon";
import HomeBasic from "../common/HomeIcon";
import twitter from "../assets/socialIcon/twitter.png";
import facebook from "../assets/socialIcon/facebook.png";
import google from "../assets/socialIcon/gPlus.png";
import instergram from "../assets/socialIcon/instegram.png";
import master from "../assets/svg/cc-mastercard.svg";
import paypal from "../assets/svg/cc-paypal.svg";
import visa from "../assets/svg/cc-visa.svg";
import img1 from "../assets/brand/textsliderWatch_1.png"
import img2 from "../assets/brand/textsliderWatch_2.png";
import img3 from "../assets/brand/textsliderWatch_3.png";
import img4 from "../assets/brand/textsliderWatch_4.png";

function Footer() {
     return (
          <footer>
               <div className="flex flex-col items-center gap-4 bg-g-theme-color pt-3">
                    <div className="text-t-watch-color">
                         <h1 className="text-4xl">G ZWAT</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-x-4 xl:gap-x-11 gap-y-4">
                         <div className="text-center  space-y-2">
                              <h1 className="text-text-button-color text-2xl lg:text-lg">CONTACT US</h1>
                              <ul className="text-t-watch-color space-y-1">
                                   <li>
                                        <div className="flex justify-center gap-x-3"> <Telephone /> +94 711388634</div>
                                   </li>
                                   <li>
                                        <div className="flex justify-center  gap-x-3"><EnvelopeBasic /> gzwatorg@gmail.com</div>
                                   </li>
                                   <li>
                                        <div className="flex justify-center lg:gap-x-1 gap-x-3"><HomeBasic /> No : 45/B Colombo 03,galle road</div>
                                   </li>
                              </ul>
                         </div>
                         <div className="text-center space-y-2">
                              <h1 className="text-text-button-color text-2xl lg:text-lg">SHARE WITH US</h1>
                              <span className="text-t-watch-color">Special Offer for Social Network</span>
                              <ul className="flex space-x-3 justify-center">
                                   <li>
                                        <div><img src={twitter} alt="twitter" className="w-10 lg:w-14" /></div>
                                   </li>
                                   <li>
                                        <div><img src={facebook} alt="facebook" className="w-10 lg:w-14" /></div>
                                   </li>
                                   <li>
                                        <div><img src={google} alt="google" className="w-10 lg:w-14" /></div>
                                   </li>
                                   <li>
                                        <div>
                                             <img src={instergram} alt="instagram" className="w-10 lg:w-14" />
                                        </div>
                                   </li>

                              </ul>
                         </div>
                         <div className="text-center">
                              <h1 className="text-text-button-color text-2xl lg:text-lg">MY ACCOUNT</h1>
                              <ul className="text-t-watch-color">
                                   <li>Home</li>
                                   <li>AboutUs</li>
                                   <li>Service</li>
                                   <li>Contact Us</li>
                              </ul>
                         </div>
                         <div className="text-center">
                              <h1 className="text-text-button-color text-2xl lg:text-lg">INSTERGRAM FEED</h1>
                              <span className="text-t-watch-color">Our Instagram gallory </span>
                              <ul className="flex">
                                   <div className="flex">
                                        <li><img src={img1} className="w-20 h-20" /></li>
                                        <li><img src={img2} className="w-20 h-20" /></li>
                                   </div>
                                   <div className="flex">
                                        <li><img src={img3} className="w-20 h-20" /></li>
                                        <li><img src={img4} className="w-20 h-20" /></li>
                                   </div>

                              </ul>
                         </div>
                    </div>
                    <div className="pb-3">
                         <p className="text-white-color text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                              content here', making it look like readable English.</p>
                    </div>
               </div>
               <div className="flex flex-col gap-y-3 bg-side-bar-navigation p-3 lg:flex-row lg:justify-between lg:items-center">
                    <div className="order-2 lg:order-1 text-center">
                         <label className="text-t-watch-color">ZWAT {new Date().getFullYear()}. ALL RIGHT RESERVED</label>
                    </div>
                    <div className="order-1 lg:order-2">
                         <ul className="flex justify-center space-x-4" >
                              <li><img src={master} className="w-11" /></li>
                              <li><img src={paypal} className="w-11" /></li>
                              <li><img src={visa} className="w-11" /></li>
                         </ul>
                    </div>
               </div>
          </footer>
     );
}

export default Footer;