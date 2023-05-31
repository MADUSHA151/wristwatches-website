import React from 'react';
import PublicAvatar from '../components/Avetar';
import Input from '../components/Input';
import PublicButton from '../components/Button';
import { Link } from '@mui/material';

function SignUp() {
     return (
          <form className="flex flex-col items-center gap-y-5 ">
               <h1 className="text-4xl font-semibold text-white">Sign Up</h1>
               <PublicAvatar alt="SignIn" width="100px" height="100px" />
               <Input label="First Name" id="fName" size="large" type="text" />
               <Input label="Last Name" id="lName" size="large" type="text" />
               <Input label="Email" id="email" size="large" type="email" />
               <Input label="Mobile" id="mobile" size="large" type="text" inputMode="numeric" pattern="[0-9]*"  />
               <Input label="Password" id="password" size="large" type="password"  />
               <Input label="Re - Password" id="rePassword" size="large" type="password" />
               <PublicButton text="Sign Up" size="large" color="primary" variant="contained" />
               <label className="text-white">OR</label>
               <Link>Go to Sign In</Link>
          </form>
     );
}

export default SignUp;