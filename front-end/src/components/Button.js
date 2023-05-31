import { Button} from "@mui/material";


function PublicButton({ text, size , color ,variant,startIcon,sx}) {
     return (
          <>
               <Button sx={sx} color={color} size={size} variant={variant} startIcon={startIcon} >{text}</Button>
          </>

     );
}

export default PublicButton;