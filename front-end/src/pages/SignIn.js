import React from "react";
import PublicButton from "../components/Button";
import Input from "../components/Input";
import {Link } from "@mui/material";
import GoogleIcon from "../components/GoogleSvgIcon";


function SignIn() {
     return (
          <form className="flex flex-col items-center gap-y-5 ">
               <h1 className="text-4xl font-semibold text-white">Sign In</h1>
               <h1 className="text-7xl text-blue-blur-color cursor-pointer">G</h1>
               <Input label="Email" id="email" size="large" type="email" />
               <Input label="Password" id="password" size="large" type="password" />
               <PublicButton text="Sign In" size="large" color="primary" variant="contained" />
               <label className="text-white">OR</label>
               <PublicButton color="primary" variant="outlined" startIcon={<GoogleIcon/>} text="Sign with google" />
               <Link className="no-underline cursor-pointer">Create New Account</Link>
          </form>
     );
}

export default SignIn;