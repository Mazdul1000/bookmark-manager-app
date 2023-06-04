import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const AddIconButton = styled(IconButton)(({ theme }) => ({
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    height:'48px',
    width:'48px',
    marginLeft:'16px',
    boxShadow:' 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    "&:hover": {
     backgroundColor: theme.palette.primary.main,
     color:'white'
    },
    "&:active":{
        transform: 'scale(0.98)'
    }
   }))