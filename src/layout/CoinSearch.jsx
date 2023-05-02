import React, { useEffect, useState } from 'react'
import CoinItems from './CoinItems';
import "../App.css"
import Pagination from 'react-bootstrap/Pagination';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


const CoinSearch = ({coins}) => {
  let numOfPage = 10;
  let pageRange = 2;
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(()=>{
    let pCount = coins.length / numOfPage;
    setPageCount(pCount);
    let pArr = [];
    for(let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr)
  },[])

  useEffect(()=>{
    let start = (currentPage * numOfPage)-numOfPage;
    let end = (currentPage * numOfPage);

    setData(coins.slice(start, end));
  },[currentPage]);


  return (
    <div className='container rounded-5 shadow-lg mt-5'>
      <div className='d-flex col-md-flex-row justify-content-between py-4 px-3 text-center '>
        <h3 className='fw-bold fs-3'>Search Crypto</h3>
        <form>
          <input 
          onChange={(e)=>setSearch(e.target.value)} 
          type="text" 
          className='border border-0 shadow-lg px-3 py-2 w-100 rounded-5'
          placeholder='Search Coin'/>
        </form>
      </div>
      
      <table className='w-100'>
        <thead >
          <tr className='border-b'>
            <th></th>
            <th className='ps-3'>#</th>
            <th className='text-start ps-3'>Coin</th>
            <th>Price</th>
            <th>Symbol</th>
            <th className='d-none d-md-table-cell'>24h</th>
            <th className='d-none d-md-table-cell'>24h volume</th>
            <th className='d-none d-md-table-cell'>mkt</th>
            <th>Last 7 day</th>
          </tr>
        </thead>

        <tbody>
          {
            data.filter((value)=>{
              if(search === ""){
                return value
              }else if (
                value.name.toLowerCase().includes(search.toLowerCase())
                ){
                return value
              }
            }).map((coin)=>(
              <CoinItems key={coin.id} coin={coin}/>
            ))
          }
        </tbody>
      </table>
      <div dir='ltr' className='col-12 d-flex align-items-center justify-content-center py-5'>
          <div className={`shadow-lg pagination border-0 px-3 py-3 rounded-5 fw-bold mx-1 pointer ${currentPage == 1 ? "disabled" : ""}`} 
          onClick={()=>setCurrentPage(currentPage - 1)}><BsFillCaretLeftFill/></div>
          {
            pages.map((page, index)=>{
              return page < currentPage + pageRange && page > currentPage - pageRange ? (
                  <div className={`shadow-lg pagination border-0 px-3 py-3 rounded-5 fw-bold mx-1 pointer ${currentPage == page ? "text-light mainBackground" : ""}`} 
                  key={index} onClick={()=>setCurrentPage(page)}>{page}</div>
              ) : null
            })
          }
          <div className={`shadow-lg pagination border-0 px-3 py-3 rounded-5 fw-bold mx-1 pointer ${currentPage === pageCount ? "disabled" : ""}`} 
          onClick={()=>setCurrentPage(currentPage + 1)}><BsFillCaretRightFill/></div>
      </div>
    </div>
  )
}

export default CoinSearch