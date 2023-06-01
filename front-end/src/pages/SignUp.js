import React, { useState } from 'react';
import PublicAvatar from '../components/Avetar';
import Input from '../components/Input';
import PublicButton from '../components/Button';
import { Link } from '@mui/material';

function SignUp() {

     const [profilePhoto, setProfilePhoto] = useState(null);

     const handlePhotoChange = (file) => {
          const reader = new FileReader();

          reader.onload = (e) => {
               setProfilePhoto(e.target.result);
          };

          if (file) {
               reader.readAsDataURL(file);
          }
     };
     return (
          <form className="flex flex-col items-center gap-y-5 ">
               <h1 className="text-4xl font-semibold text-white">Sign Up</h1>
               <PublicAvatar alt="SignIn" width="100px" height="100px" profilePhoto={profilePhoto} onPhotoChange={handlePhotoChange}/>
               <div className='grid grid-cols-2 gap-3'>
                    <Input label="First Name" id="fName" sx={{ width: "100%" }} size="" type="text" />
                    <Input label="Last Name" id="lName" sx={{ width: "100%" }} size="" type="text" />
                    <Input label="Email" id="email" sx={{ width: "100%" }} size="" type="email" />
                    <Input label="Mobile" id="mobile" sx={{ width: "100%" }} size="" type="text" inputMode="numeric" pattern="[0-9]*" />
                    <Input label="Password" id="password" sx={{ width: "100%" }} size="" type="password" />
                    <Input label="Re - Password" id="rePassword" sx={{ width: "100%" }} size="" type="password" />
               </div>
               <PublicButton text="Sign Up" size="large" color="primary" variant="contained" />
               <label className="text-white">OR</label>
               <Link className='cursor-pointer'>Go to Sign In</Link>
          </form>
     );
}

export default SignUp;