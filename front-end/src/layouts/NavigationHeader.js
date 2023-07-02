import React from "react";
import SearchInput from "../components/SearchBar";
import CartIcon from "../components/Cart";
import UserIcon from "../components/UserIcon";
import ThemeSun from "../components/ClimateChange";
import AppsMenu from "../components/AppsMenu";

function NavigationHeader() {

     return (
          <header className="drop-shadow-2xl w-full min-h-min ">
               <div className="bg-black text-center text-white-color flex flex-row justify-between py-3 sm:py-1">
                    <div className="flex flex-row items-center justify-center pl-8">
                         <label className="text-center hidden sm:block">The best wrist watch In the World</label>
                         <label className="text-center sm:hidden">G - Shock</label>
                    </div>
                    <div className="flex flex-row justify-between  items-center gap-5 pr-8">
                         <label className="hidden sm:block"><SearchInput /></label>
                         <label><CartIcon /></label>
                         <label><UserIcon /></label>
                         <label><ThemeSun /></label>
                    </div>
               </div>

               <nav className="flex justify-between bg-t-blue-color text-t-watch-color cursor-pointer">
                    <h1 className="text-4xl sm:text-5xl p-1 pl-6">G</h1>
                    <ul className="sm:flex justify-between items-center gap-12 pr-9 hidden sm:block ">
                         <li><a href="#">WATCHES</a></li>
                         <li><a href="#">COLLECTION</a></li>
                         <li><a href="#">ABOUT US</a></li>
                         <li><a href="#">CONTACT US</a></li>
                    </ul>
                    <div className="sm:hidden pr-6 py-1">
                         <AppsMenu/>
                    </div>
               </nav>
          </header>
     );

}

export default NavigationHeader;