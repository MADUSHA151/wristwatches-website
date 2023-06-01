import { Avatar , } from "@mui/material";
import { useRef} from "react";
import FolderIcon from '@mui/icons-material/Folder';

function PublicAvatar({ profilePhoto, height, width, alt, onPhotoChange }) {
     const fileInputRef = useRef(null);

     const handleAvatarClick = () => {
          fileInputRef.current.click();
     };

     const handlePhotoChange = (event) => {
          onPhotoChange(event.target.files[0]);
     };
     return (
          <div className="cursor-pointer">
               <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handlePhotoChange}
               />
               <Avatar alt={alt} src={profilePhoto} sx={{ width: width, height: height , backgroundColor:"#11A34B" }} onClick={handleAvatarClick} ><FolderIcon  /></Avatar>

          </div>
     );

}

export default PublicAvatar;