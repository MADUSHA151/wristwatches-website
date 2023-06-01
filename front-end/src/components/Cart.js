import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function CartIcon() {
     return (
          <div className='cursor-pointer'>
               <FontAwesomeIcon icon={faCartArrowDown} bounce size="lg" style={{ "--fa-primary-color": "#f7f7f8", "--fa-secondary-color": "#f7f7f8", }} />
          </div>
     );
}
export default CartIcon;