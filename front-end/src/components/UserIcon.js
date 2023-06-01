import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function UIcon() {
     return (
          <div className='cursor-pointer'>
               <FontAwesomeIcon icon={faUser} bounce style={{ color: "#ffffff", }} />
          </div>
     );
}
export default UIcon;