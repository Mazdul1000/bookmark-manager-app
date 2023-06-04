import { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";
import useGetBookmarks from "../hooks/useGetBookmarks";
import BookmarkGrid from "../components/Home/BookmarkGrid";
import DrawerNavigate from "../components/Home/DrawerNavigate";

const BoxWrapper = styled("div")(({ theme }) => ({
  maxWidth: "1094px",
  height: "calc(100vh - 124px)",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: theme.palette.background.main,
  color: theme.palette.text.main,
  marginTop: "60px",
}));

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const [bookmarks, setBookmarks] = useState([])
  const {dataset, loading, error } = useGetBookmarks();
  const [selectedItem, setSelectedItem] = useState(null);

  const [open, setOpen] = useState(false);
  
  // pagenate 
    const [pageCount, setPageCount] = useState(0);
    const [pages, setPages] = useState(0);
    const [count, setCount] = useState(0);

  useEffect(() =>{
    console.log(dataset);
    console.log(loading);
    console.log(error);
  },[dataset, loading, error])

  useEffect(() => {
    console.log(searchParams.get("searchKeyword"));
  }, [searchParams]);

  useEffect(() => {
    console.log(searchKeyword);
  }, [searchKeyword]);

  useEffect(() => {    
    if(searchParams.get('selectedId')?.length) {
      const selectedData = dataset.find(item => item.id == searchParams.get('selectedId'));
      if (selectedData) setSelectedItem(selectedData);
  } else {
      setSelectedItem(null);
      var scrhParams = searchParams.get('searchKeyword')?.length 
          ? { searchKeyword: searchParams.get('searchKeyword') } 
          : {};
      setSearchParams(scrhParams);
  }   
  if(searchParams.get('searchKeyword')){
        const searchedLinks = dataset.filter(link => link.title.toLowerCase().includes(searchParams.get('searchKeyword').toLocaleLowerCase()))
         setCount(searchedLinks.length);
         setPages(Math.ceil(searchedLinks.length/12));
         const sorted = searchedLinks.slice().sort((x, y) => new Date(y.created_timestamp) - new Date(x.created_timestamp));
        const paginateLinks = sorted.splice(pageCount*12).slice(0,12);        
        return setBookmarks(paginateLinks);
          
  }else{
        setCount(dataset.length);
        setPages(Math.ceil(dataset.length/12));
        const sorted = dataset.slice().sort((x, y) => new Date(y.created_timestamp) - new Date(x.created_timestamp));
        const paginateLinks = sorted.splice(pageCount*12).slice(0,12);
        return setBookmarks(paginateLinks);            
  }
 
    },[pageCount, count, searchParams, dataset])

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchKeyword) {
      setSearchParams({ searchKeyword: searchKeyword });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
     
      <Box component="div" sx={{ backgroundColor: "background.main" }}>
        
        {selectedItem && <DrawerNavigate setSearchParams={setSearchParams} link={selectedItem} dataset={dataset}/>}

        
        <BoxWrapper>
          <Header
            setSearchKeyword={setSearchKeyword}
            searchParams={searchParams}
            handleSearch={handleSearch}
          />
          <BookmarkGrid bookmarks={bookmarks} pageCount={pageCount} setPageCount={setPageCount} count={count} pages={pages}  setSearchParams={setSearchParams} setBookmarks={setBookmarks} loading={loading} open={open} setOpen={setOpen}/>
        </BoxWrapper>
      </Box>
      
    </>
  );
};

export default Home;
