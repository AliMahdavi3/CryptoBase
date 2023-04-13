import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../App.css"

const Trending = () => {
    const [ trending, setTrending] = useState([])
    const url = "https://api.coingecko.com/api/v3/search/trending"


    useEffect(()=>{
      axios.get(url).then(res=>{
        setTrending(res.data.coins);
      })
    },[]);

  return (
    <div className='container shadow-lg rounded-5 my-3 py-5'>
      <h2 className='fs-1 fw-bold py-2'>Trending Coins</h2>
      <div className='row'>
        {trending.map((coin, index)=>(
          <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='p-4 m-2 rounded-5 shadow-lg trending_coins'>
              <div>
                  <img src={coin.item.small} />
                <div>
                  <p className='fw-bold fs-5'>{coin.item.name}</p>
                  <p className='fw-bold'>{coin.item.symbol}</p>
                </div>

                <div>
                  <img className='btc_price' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"/>
                  <p className='fw-bold'>{coin.item.price_btc.toFixed(7)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending