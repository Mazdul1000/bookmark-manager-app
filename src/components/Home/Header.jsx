import styled from '@emotion/styled';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AddIconButton } from '../../styles/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddBookmark from './AddBookmark';

const BoxWrapper = styled('div')(({theme}) => ({
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}))

const SearchTextField = styled('input')(({ theme }) =>({
    outline:'none',
    width:'100%',
    color: theme.palette.text.main,
    backgroundColor: theme.palette.background.main,
    border: 'none',
   }));

 const SearchBox = styled('form')(({theme}) => ({
    width:'65%',
    border:'2px solid',
    borderColor:theme.palette.primary.main,
    borderRadius:'28px',
    padding:'0 8px 0 22px',
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    height:'56px',
    fontSize:'14px'
}))


const Header = ({searchParams, setSearchKeyword, handleSearch}) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(searchParams.get('searchKeyword'));

    useEffect(() => {
        if(!searchParams.get('searhKeyword')){
            setSearchTerm('');
        }
    }, [searchParams])

    const handleChange = (event) => {
      setSearchKeyword(event.target.value);
      setSearchTerm(event.target.value);
    }
    return (
        <BoxWrapper>
        <AddBookmark open={open} setOpen={setOpen}/>
        <Typography variant='h2' fontSize="28px">Find a bookmark</Typography>
        <Box component='div' sx={{ width:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
        <SearchBox onSubmit={handleSearch}>
            <SearchTextField placeholder='Search by titles, tags or category' onChange={handleChange}  value={searchTerm}/>
            <IconButton type='submit'>
            <SearchOutlinedIcon fontSize='medium' sx={{color:'text.main'}}/>
            </IconButton>
        </SearchBox>
            <AddIconButton onClick={() => setOpen(!open)}><AddOutlinedIcon/></AddIconButton>
        </Box>
    </BoxWrapper>
    );
};

export default Header;