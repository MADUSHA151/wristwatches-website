import React from 'react';
import { faMoon} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ThemeSun() {
     return (
          <div className='cursor-pointer'>
               <FontAwesomeIcon icon={faMoon} bounce size="lg" style={{color: "#e7eaee",}} />
          </div>
     );
}

export default ThemeSun;