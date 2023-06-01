import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchInput() {
     const [expanded, setExpanded] = useState(false);

     const handleSearchClick = () => {
          setExpanded(!expanded);
     };

     return (
          <div className="relative">
               <input
                    type="text"
                    className={`py-2 pl-10 text-black pr-4 rounded-lg outline-none transition-all duration-300 ${expanded ? 'w-64 pl-16 opacity-100' : 'w-0 pl-0 opacity-0'
                         }`}
                    placeholder="Search"
               />
               <div
                    className="absolute top-0 left-0 flex items-center justify-center h-full w-10 text-gray-400 cursor-pointer"
                    onClick={handleSearchClick}
               >
                    <FontAwesomeIcon icon={faMagnifyingGlass} shake size="lg" style={{ color: "#e7e8e9", }} className={`text-gray-400 transition-transform ${expanded ? 'transform rotate-90' : ''
                         }`} />
               </div>
          </div>
     );
     
}

export default SearchInput;
