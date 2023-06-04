import { Button, Divider, Drawer, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import BlankImage from "../../assets/blank_link.png"
import styled from "@emotion/styled";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { addBookmark } from '../../service/firebase';
import axios from 'axios';

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
  
  export const InputBox = styled("form")(({ theme }) => ({
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

const AddBookmark = ({
    open,
    setOpen,
    variant,
    ...props  
}) => {
    const [linkText, setLinkText] = useState("");
    const [loading, setLoading] = useState(false);
    const [newLink, setNewLink] = useState(null);

    const handleInputChange = (e) => {
        setLinkText(e.target.value);
      };
    
      const fetchData = async () => {
        try {
          await fetch(
            `https://website-metadata.p.rapidapi.com/MetaData/GetMetadata?Url=${linkText}`,
            {
              method: "GET",
              headers: {
                "X-RapidAPI-Key":
                  "a647344138msh2986ffa6a4cd8c6p165cb9jsne6793ec727c9",
                "X-RapidAPI-Host": "website-metadata.p.rapidapi.com",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setNewLink({
                id: (
                  performance.now().toString(36) + Math.random().toString(36)
                ).replace(/\./g, ""),
                title: data["og:title"],
                image: data["og:image"] ? data["og:image"] : "https://i.ibb.co/hCKpd4R/upload-image.png",
                link: data["og:url"],
                description: data["og:description"],
                created_timestamp: new Date().toISOString(),
              });
              console.log(newLink);
              return setLoading(false);
            });
        } catch (error) {
          console.log(error.message);
          return setLoading(false);
        }
      };
    
     

      async function fetchMetaData() {
        try {
          const response = await axios.get(`https://opengraph.io/api/1.1/site/${encodeURIComponent(linkText)}?app_id=caef0fa1-04ed-4830-8c09-a66d7c16aa0a`);
          const {title, description, image, url} = response.data.hybridGraph
          setNewLink({
            id: (
              performance.now().toString(36) + Math.random().toString(36)
            ).replace(/\./g, ""),
            title: title,
            image: image ? image : "https://i.ibb.co/hCKpd4R/upload-image.png",
            link: url,
            description: description,
            created_timestamp: new Date().toISOString(),
          })
          console.log(newLink)
          return setLoading(false)
        } catch (error) {
          console.error('Error fetching metadata:', error);
          return null;
        }
      }

    const handleFetchLinkData = (e) => {
      e.preventDefault();
      
        if (linkText) {
          setLoading(true);
          fetchMetaData();
        }
      };

    const handleSaveLink = async () => {
       if(newLink.title && newLink.link){
        const updatedLinksList = [...dataset, newLink];
        setDataset(updatedLinksList);
        addBookmark(newLink);
        handleClose();
       }else{
        console.log("Link details not found")
       }
      };

      const handleClose = () => {
        setLinkText("");
        setOpen(false)
        setNewLink(null);
        setLoading(false);
      };
    return (
        <Grid container justifyContent="flex-end" alignItems="center">
      <Grid item>
        <Drawer
          anchor="right"
          variant={variant}
          {...props}
          open={open}
          onClose={handleClose}
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
                {!newLink || loading ? (
                  <Typography variant="h4" fontSize="16px">
                    {loading ? "loading..." : "Create bookmark"}
                  </Typography>
                ) : (
                  <Typography variant="h4" fontSize="16px">
                    {newLink.title}
                  </Typography>
                )}
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
                <InputBox onSubmit={handleFetchLinkData}>
                  <LinkTextField
                    placeholder="Paste your link here..."
                    onChange={handleInputChange}
                    defaultValue={linkText}
                  />
                  <IconButton type='submit'>
                    <TravelExploreIcon/>
                  </IconButton>
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
                     <Box
        component="img"
        sx={{
          height: 280,
          width: "100%",
          /* maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 }, */
        }}
        alt={newLink?.title}
        src={newLink?.image ? newLink.image: BlankImage}
      />
                {/* <img
                  src={newLink?.image ? newLink.image : BlankImage}
                  alt="Link image"
                /> */}
                <Typography paragraph sx={{ marginTop: "25px" }}>
                  {newLink ? newLink.description : ""}
                </Typography>
              </Box>
            </Box>
            <Box component="div">
              <Divider variant="middle" />
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "15px",
                  margin: "15px 27px 15px 0",
                }}
              >
                <DeleteButton variant="outlined" onClick={handleClose}>
                  Cancel
                </DeleteButton>
                <Button variant="contained" onClick={handleSaveLink}>
                  {" "}
                  <span>Save</span>
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Grid>
    </Grid>
    );
};

export default AddBookmark;