import React,{ useState } from 'react';
import { Box, Stack, Typography,styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';

const StyledModal=styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
});
const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px",
});

const Add = () => {
 const [open,setOpen]=useState(false);
  return (
    <Box>
    <Tooltip onClick={e=>setOpen(true)}
        title="Create" sx={{
        position:"fixed",bottom:20,
        left:{xs:"calc(50%-25px)",md:30},}}>
     <Fab color="primary" aria-label="add">
       <AddIcon />
      </Fab>
    </Tooltip>
    <StyledModal
       open={open}
       onClose={e=>setOpen(false)}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
    >
  <Box width={400} height={280} borderRadius={5} p={3} bgcolor={"background.default"} color={"text.primary"}>
    <Typography variant="h6" color="gray" textAlign="center">
        Create Post
    </Typography>
    <UserBox>
    <Avatar src="https://material-ui.com/static/images/avatar/2.jpg" sx={{width:30,height:30}} />
    <Typography fontWeight={500} variant="span">
        John Doe
    </Typography>
    </UserBox>
    <TextField sx={{width:"100%"}}
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={3}
          defaultValue="What's on your mind?"
          variant="standard"
     />
     <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color="primary"/>
        <ImageIcon color="secondary" />
        <VideoCameraBackIcon color="succeess" />
        <PersonAddIcon color="error" />
     </Stack>
     <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100%"}}>
    <DateRangeIcon />
  </Button>
</ButtonGroup>
  </Box>
</StyledModal>
    </Box>
  );
};

export default Add;
