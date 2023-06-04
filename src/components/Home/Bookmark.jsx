import React from 'react';
import styled from "@emotion/styled";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import LaunchIcon from "@mui/icons-material/Launch";
import { Avatar, Box, IconButton, Typography } from '@mui/material';

const LinkBox = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    border: "2px solid",
    padding: "16px 22px",
    borderColor: "rgba(33, 33, 33, 0.08)",
    borderRadius: "4px",
    position: "relative",
    height: "88px",
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  }));
  
  const LinkIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.secondary,
    position: "absolute",
    top: "4px",
    right: "30px",
  }));
  const RedirectIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.secondary,
    position: "absolute",
    top: "4px",
    right: "4px",
  }));

const Bookmark = ({bookmark, setSearchParams}) => {
    const { title, description, id, image, link: url } = bookmark || {};

    const copyLinkWithID = (linkId) => {
      let currentUrl = window.location.href;
    
      if (currentUrl.includes('?')) {
        currentUrl += `&selectedId=${linkId}`;
      } else {
        currentUrl += `?selectedId=${linkId}`;
      }
      navigator.clipboard.writeText(currentUrl);
    }
  
    return (
      <> 
        <LinkBox component="div">
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
             <Avatar
        alt={title}
        src={image}
        sx={{ width: 56, height: 56 }}
      />
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "16px",
              width: "100%",
              position: "relative",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="h6"
                fontSize="16px"
                sx={{
                  lineHeight: "24px",
                  color: "text.primary",
                  cursor: "pointer",
                }}
                onClick={() => setSearchParams({ selectedId: id })}
              >
                {title.length > 15 ? `${title.slice(0, 15)}...` : title}
              </Typography>
            </Box>
            <Box component="div">
              <Typography
                paragraph
                fontSize="14px"
                sx={{ color: "text.secondary" }}
              >
                {" "}
                {description.slice(0, 25)}...
              </Typography>
            </Box>
          </Box>
          <LinkIcon onClick={() => copyLinkWithID(id)}>
            <InsertLinkOutlinedIcon fontSize="small" />
          </LinkIcon>
          <a href={url} target="_blank">
            <RedirectIcon>
              <LaunchIcon fontSize="small" />
            </RedirectIcon>
          </a>
        </LinkBox>
      </>
    );
};

export default Bookmark;