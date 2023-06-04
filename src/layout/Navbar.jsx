import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box as List,
  Button as ListItem,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";
import BlankAvatar from "../assets/blank_link.png";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Item = styled(ListItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: "bold",
  textAlign: "left",
  width: "100%",
  textDecoration: "none !important",
  display: "flex",
  justifyContent: "flex-start",
  padding: "15px",
  textTransform: "none",
  "&:hover": {
    color: "#2175E2",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky" sx={{ zIndex: "1150" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookmarks
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <PermIdentityIcon />
          </IconButton>
        </Toolbar>

        {/* Drawer */}
      </AppBar>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <Drawer
            anchor="left"
            variant="temporary"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ zIndex: "1100" }}
            position="relative"
          >
            <Box
              component="div"
              sx={{
                width: "300px",
                paddingTop: "110px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box component="div">
                <Box
                  component="div"
                  sx={{ backgroundColor: "#FDFBFF", padding: "0 0 12px 16px" }}
                >
                  <Avatar
                    alt="user avatar"
                    src={BlankAvatar}
                    sx={{ height: "79px", width: "79px" }}
                  />
                  <Typography
                    variant="h3"
                    fontSize="20px"
                    color="text.secondary"
                    sx={{ marginTop: "12px" }}
                  >
                    Mazedul Hasan
                  </Typography>
                  <Typography paragraph fontSize="14px" color="text.secondary">
                    mazedul.hasan@southindus.com
                  </Typography>
                </Box>
                <Divider />
                <Box component="div">
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "300px",
                      alignItems: "flex-start",
                    }}
                  >
                    <Item>              
                        <Typography sx={{display:"flex",}}>
                        <BookmarkBorderIcon sx={{ marginRight: "30px" }} />
                          Bookmarks
                        </Typography>
                    </Item>
                    <Item>
                    <Typography sx={{display:"flex",}}>
                    <StorageIcon sx={{ marginRight: "30px" }}/> 
                          Collections
                        </Typography>
                    </Item>
                    <Item>
                    <Typography  sx={{display:"flex",}}>
                    <AssignmentIcon sx={{ marginRight: "30px" }}/>
                          Notepad
                        </Typography>
                    </Item>
                  </List>
                </Box>
              </Box>
              <Box
                component="div"
                position="absolute"
                sx={{ bottom: "15px", left: "0", width: "100%" }}
              >
                <Item button>
                <Typography  sx={{display:"flex"}}>
                        <SettingsOutlinedIcon sx={{ marginRight: "30px" }} />
                          Settings
                        </Typography>
                </Item>
              </Box>
            </Box>
          </Drawer>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
