import React from "react";

function Contact() {
     return(
          <div className="flex flex-col text-center space-y-10 bg-side-bar-navigation items-center justify-center mt-16" style={{ width: "100%", height: "50vh" }}>
               <div>
                     <span className="text-t-watch-color">SUBSCRIBE TO THE MAILING LIST</span><br />
                     <h1 className="text-t-watch-color text-5xl">Newsletter</h1>
               </div>
               <div className="flex-col  flex items-center gap-y-5 lg:gap-x-10">
                     <input type="email"  className="text-t-watch-color sm:w-96 bg-transparent  border-text-button-color  outline-none rounded-lg" />
                     <button className="border-b-large-blue bg-large-blue text-t-watch-color w-40 rounded-xl h-9 hover:bg-font-green-color-bg hover:text-large-blue">SUBMIT</button>
                     
               </div>
          </div>
     );
     
}

export default Contact;