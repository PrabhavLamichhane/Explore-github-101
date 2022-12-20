import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/search/Search';
import Repo from './components/repos/Repo';
import Pagination from './components/repos/Pagination';
import ReactPaginate from 'react-paginate';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("nodejs boilerplate code");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 5;

  const handleClick = val => {
    setInputValue(val);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let query = { query: inputValue, page: currentPage, per_page: PER_PAGE };
        const { data: response } = await axios.get('http://localhost:8080/api/repos', {
          params: query
        });
        setData(response.items);
        setPageCount(Math.ceil(response.total_count / PER_PAGE));
      }
      catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();

  }, [inputValue, currentPage])


  const handlePageClick = async e => {
    let currentPage = e.selected + 1;
    setCurrentPage(currentPage);


  }

  return (
    <div>
      <Search handleClick={handleClick}></Search>
      {loading ? <p>Loading...</p> : <>
        <Repo data={data} />
      </>}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
