import React from "react";

function Contact() {
     return(
          <div className="flex flex-col text-center space-y-16 bg-side-bar-navigation items-center justify-center" style={{ width: "100%", height: "25vh" }}>
               <div>
                     <span className="text-t-watch-color">SUBSCRIBE TO THE MAILING LIST</span><br />
                     <h1 className="text-t-watch-color text-5xl">Newsletter</h1>
               </div>
               <div className="flex space-x-10">
                     <input type="text"  className="text-t-watch-color w-96 bg-transparent border-b-text-button-color  outline-none" />
                     <button className="border-b-large-blue bg-large-blue text-t-watch-color">SUBMIT</button>
                     
               </div>
          </div>
     );
     
}

export default Contact;