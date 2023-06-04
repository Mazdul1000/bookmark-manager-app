import { Box, Dialog, DialogContent, DialogTitle, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import FilterListIcon from '@mui/icons-material/FilterList'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import noFound from '../../assets/no-found.svg'
import Bookmark from './Bookmark';

const BoxWrapper = styled('div')(({ theme }) => ({
    width: '90%',
    marginTop:'60px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'flex-start',
    background:theme.palette.background.main,
    color: theme.palette.text.main
}))

const Icon = styled(IconButton)(({ theme }) => ({
 color: theme.palette.text.secondary,
}))

const FilterItem = styled(MenuItem)(({ theme }) => ({
   borderBottom:'1px solid rgba(33, 33, 33, 0.08)',
   fontSize:'14px'
}))

const BookmarkGrid = ({bookmarks, pageCount, count, setPageCount, pages, setSearchParams, loading, open, setOpen}) => {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);
    
    const [age, setAge] = useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    // for rendering skeleton elements
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


  useEffect(() => {
    if(pageCount === 0 && count > 12){
      setStartIndex(pageCount+1)
      setEndIndex(pageCount + 12)
    }else if( pageCount + 1 === pages){
      setStartIndex((pageCount * 12) + 1 )
      setEndIndex((pageCount *12) + bookmarks.length);
    }else if( count < 12){
      setStartIndex(pageCount + 1);
      setEndIndex(count)
    }else{
      setStartIndex((pageCount * 12) + 1)
      setEndIndex((pageCount * 12) + bookmarks.length)
    }
    
  },[pageCount, bookmarks])


  const handleNextPage = () => {
      setPageCount(prev => prev + 1);
    }
    

  const handlePrevPage = () => {
      setPageCount(prev => prev - 1)
  }


  // filter modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    setSearchParams({});
    pageCount(0)
  }
    return (
        <BoxWrapper>
        {/* modal */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{display: 'flex', justifyContent:'space-between', alignItems:'center', width:'400px'}}>
            <Typography>Filter the info</Typography>
            <Typography onClick={handleClose} sx={{cursor:'pointer'}}><IconButton><CloseOutlinedIcon /></IconButton></Typography>
          </DialogTitle>
          <Divider></Divider>
          <DialogContent sx={{boxShadow:'0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)'}}>
          <Box sx={{ minWidth: 120 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id="demo-simple-select-standard-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Time"
            sx={{color:'text.main'}}
          >
            <FilterItem value={10}>Today</FilterItem>
            <FilterItem value={20}>Last week</FilterItem>
            <FilterItem value={40}>Last month</FilterItem>
            <FilterItem value={50}>Last year</FilterItem>
            <MenuItem value={60} sx={{fontSize:'14px'}}>Custom</MenuItem>
          </Select>
        </FormControl>
      </Box>
          </DialogContent>
        </Dialog>
  
        <Box component='div' sx={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', marginBottom:'16px'}}>
          <Box component='div'>
            <Icon onClick={handleClickOpen}><FilterListIcon fontSize="medium"/></Icon>
          </Box>
          <Box component='div'>
            { count > 12 && <Typography paragraph fontSize="14px" sx={{marginBottom:'0'}}>{startIndex} - {endIndex} of {count}</Typography>}
            </Box>
          <Box component='div'> 
  
            <Icon onClick={handlePrevPage} disabled={pageCount <= 0}><KeyboardArrowLeftIcon fontSize="medium"/></Icon>
            <Icon onClick={handleNextPage} disabled={pageCount + 2  > pages }><KeyboardArrowRightIcon fontSize="medium"/></Icon>
          </Box>
        </Box>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         
         {bookmarks.length > 0 ? (
          bookmarks.map((item) => (
            <Grid key={item.id} item xs={12} sm={12} md={6} lg={4}>
            <Bookmark  bookmark={item} setSearchParams={setSearchParams}/>
          </Grid>)
          )
         
         ):  loading === true ? (
              <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop='15px'>
              {arr.map((item, index) =>(
              <Grid key={index} item xs={12} sm={12} md={6} lg={4} >
                <Box component='div' sx={{marginTop:'15pxpx', }}>
                <Skeleton variant="rectangular" width={300} height={88}/>
              </Box>
              </Grid>)
              
              )}     
              </Grid>
            
          ) : (
              <Box component='div' sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'60vh' }}>
              <Box component='div' sx={{width:'40%', cursor:'pointer'}} onClick={handleReset}>
                <img src={noFound}/>
              </Box>
              <Typography variant="h3" fontSize='24px' color='text.primary'>Search not found, try again</Typography>
              </Box> 
             
          )
         
  }       
        </Grid>
      </BoxWrapper>
    );
};

export default BookmarkGrid;