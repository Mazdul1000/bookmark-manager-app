import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import {
  Button,
  Divider,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BlankImage from "../../assets/blank_link.png";
import styled from "@emotion/styled";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import { db } from "../../../lib/firebase";
// import { addBookmark, deleteBookmark } from "../../../service/firebase";
import LaunchIcon from "@mui/icons-material/Launch";

const LinkTextField = styled("input")(({ theme }) => ({
  outline: "none",
  width: "100%",
  color: theme.palette.text.main,
  backgroundColor: theme.palette.background.main,
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  border: "none",
  color: theme.palette.error.main,
  "&:hover": {
    backgroundColor: theme.palette.error.main,
    color: "#fff",
    border: "none",
  },
}));

  const InputBox = styled("form")(({ theme }) => ({
  width: "90%",
  border: "2px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "28px",
  padding: "0 8px 0 22px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "56px",
  fontSize: "14px",
}));

const DrawerNavigate = ({
  variant,
  dataset,
  link,
  setSearchParams,
  ...props
}) => {
  const { title, description, image, id, link: url } = link || {};

  const handleCopyText = () => {
    navigator.clipboard.writeText(url);
  };
 
  const handleClose = () => {
    setSearchParams({});
  };

//   const handleDelete = () => {
//     deleteBookmark(id);
//     const updatedList = dataset.filter(item => item.id !== id);
//     setDataset(updatedList);
//     handleClose();
//   };

  return  (
    <Grid container justifyContent="flex-end" alignItems="center">
      <Grid item>
        <Drawer
          anchor="right"
          variant={variant}
          {...props}
          open={!!link}
          onClose={() => setSearchParams({})}
        >
          <Box
            component="div"
            sx={{
              width: "400px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box component="div">
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Typography variant="h4" fontSize="16px">
                  {title}
                </Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Divider variant="middle"></Divider>

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <InputBox>
                  <LinkTextField value={url} disabled />
                  <a href={url} target="_blank">
                    <IconButton>
                      <LaunchIcon />
                    </IconButton>
                  </a>
                </InputBox>
              </Box>

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                  padding: "0 20px",
                }}
              >
                <img src={image} alt="Link image" style={{width:"100%"}} />
                <Typography paragraph sx={{ marginTop: "25px" }}>
                  {description}
                </Typography>
              </Box>
            </Box>
            <Box component="div" >
              <Divider variant="middle" />
              <Box
                component="div"
                position='sticky'
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "15px",
                  margin: "15px 27px 15px 0",
                  bottom:'0',
                  right:'0'
                  
                }}
              >
                <DeleteButton variant="outlined" /* onClick={handleDelete} */>
                  Delete
                </DeleteButton>
                <Button variant="contained" onClick={handleCopyText}>
                  Copy link
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default DrawerNavigate;
