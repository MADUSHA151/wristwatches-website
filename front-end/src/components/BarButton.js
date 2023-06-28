import React  from "react";

function TranseParantBtn({text}) {
     return (
          <button className="bg-t-blue-color w-32 h-7 text-text-button-color sm:w-40 sm:h-10 rounded hover:border-4 border-indigo-500/50" type="button">
               {text}
          </button>
     );
}


export default TranseParantBtn;