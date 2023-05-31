import { Avatar } from "@mui/material";

function PublicAvatar({ src , height , width , alt}) {
     return (
          <div>
               <Avatar alt={alt} src={src} sx={{width:width,height:height}}  />
          </div>
     );

}

export default PublicAvatar;