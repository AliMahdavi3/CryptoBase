import React, { useState } from 'react'
import CoinItems from './CoinItems';
import "../App.css"

const CoinSearch = ({coins}) => {
  const [search, setSearch] = useState("")
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
            coins.filter((value)=>{
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
    </div>
  )
}

export default CoinSearch