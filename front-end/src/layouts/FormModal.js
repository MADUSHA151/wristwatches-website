import { Box, Modal, Button } from "@mui/material";
import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: '#242C32',
     border: '2px solid #0071FF',
     boxShadow: 24,
     p: 4,
     borderRadius:10,

};

function FormModal() {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     return (
          <div>
               <Button onClick={handleOpen}>Open modal</Button>
               <Modal
                    open={open}
                    onClose={handleClose}
               >
                    <Box sx={style}>
                         <SignUp />
                    </Box>
               </Modal>
          </div>
     );


}

export default FormModal;