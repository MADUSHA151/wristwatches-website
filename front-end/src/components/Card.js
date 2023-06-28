import React, { useState } from "react";
import "./Card.css";
import img1 from "../assets/brand/textsliderWatch_2.png";
import AddToCardButton from "./AddToCardButton";
// import img2 from "../assets/brand/textsliderWatch_1.png";
// import img3 from "../assets/brand/textsliderWatch_3.png";
// import img4 from "../assets/brand/textsliderWatch_4.png";

function Card() {

     const [showImage, setShowImage] = useState(true);

     return (
          <div className="text-t-watch-color flex flex-col cardMainContainer items-center justify-center">
               <div className="flex flex-col items-center gap-5">
                    <div className="order-1 h-72">
                         {showImage ? (
                              <img src={img1} alt="card-img" className="w-full h-72" />
                         ) : (
                              <div className="flex flex-col items-center gap-3">
                                   <h1>M37 Uniform Wares</h1>
                                   <p>Price: $ 100</p>
                                   <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                   <p>In Stock</p>
                                   <AddToCardButton />

                              </div>

                         )}
                    </div>

                    <div className="order-2 h-14">
                         <button onClick={() => setShowImage(!showImage)} className="bg-t-blue-color  border-indigo-500/50  w-44 p-2 rounded-md hover:border-2">Quick View</button>
                    </div>
               </div>
               <div>

               </div>
          </div>
     );
}

export default Card;