import { TextField, styled } from "@mui/material";
import React from "react";


const CustomTextField = styled(TextField)(({ theme }) => ({
     "& .MuiInputBase-root": {
          backgroundColor: "#ADAEB0",
          fontSize: 17,
          borderRadius: 8,
     },
     "& .MuiInputBase-root:hover": {
          backgroundColor: "#ADAEB0", // Keep it as the same color as the normal background color
     },

}));



function Input({ label, id, size, type = "text", variant, placeholder, inputMode, pattern, sx }) {
     return (

          <div>
               <CustomTextField placeholder={placeholder} label={label} id={id} size={size} type={type} variant={variant} inputMode={inputMode} pattern={pattern} sx={sx} />
          </div>

     );
}
export default Input;