import React from "react";
import PublicButton from "../components/Button";
import Input from "../components/Input";
import { Icon, Link } from "@mui/material";
import PublicAvatar from "../components/Avetar";
import GoogleIcon from "../components/GoogleSvgIcon";


function SignIn() {
     return (
          <form className="flex flex-col items-center gap-y-5 ">
               <h1 className="text-4xl font-semibold text-white">Sign In</h1>
               <PublicAvatar alt="SignIn" width="100px" height="100px" />
               <Input label="Email" id="email" size="large" type="email" />
               <Input label="Password" id="password" size="large" type="password" />
               <PublicButton text="Sign In" size="large" color="primary" variant="contained" />
               <label className="text-white">OR</label>
               <PublicButton color="primary" variant="outlined" startIcon={<GoogleIcon/>} text="Sign with google" />
               <Link>Create New Account</Link>
          </form>
     );
}

export default SignIn;