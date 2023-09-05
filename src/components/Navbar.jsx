import { AppBar,styled,Box, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
// import { Search } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});
const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}));
const Icons=styled(Box)(({theme})=>({
    alignItems:"center",
    display:"none",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
}));
const UserBox=styled(Box)(({theme})=>({
  alignItems:"center",
  display:"flex",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));
const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <div>
      <AppBar position="fixed">
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs: "none",sm: "block"} }}>
                Navbar
            </Typography>
            <MenuIcon sx={{display:{sm: "none",xs: "block"} }}/>
            <Search><InputBase placeholder='search...' /></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
               <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
               <Notifications />
            </Badge>
            <Avatar sx={{width:"30",height:"30"}}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={e=>setOpen(true)}
            />
            {/* <Avatar src="https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?cs=srgb&dl=pexels-noelle-otto-906002.jpg&fm=jpg&_gl=1*13ujxtt*_ga*MTQ3NzYyMTM4OS4xNjgyMjI5NjQ4*_ga_8JE65Q40S6*MTY4MjIyOTY1My4xLjEuMTY4MjIzMDUyOC4wLjAuMA.." /> */}
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
            <Avatar 
            sx={{width:"30",height:"30"}}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography variant="span">John</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar>
    </div>
  )
}

export default Navbar
