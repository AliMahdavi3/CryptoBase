import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Sparklines,  SparklinesLine  } from 'react-sparklines';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"
import DOMPurify from "dompurify"

import "../App.css"

const CoinPage = () => {
    const [coin, setCoin] = useState({});
    const params = useParams()
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`
  
    useEffect(()=>{
        axios.get(url).then(res=>{
            setCoin(res.data);
        })
    },[url]);
  
  return (
    <div className='container mt-5'>
        <div className='d-flex py-5'>
            <img className='w-25 me-3' src={coin.image?.large} alt="" />
            <div>
                <p className='fw-bold fs-2'>{coin?.name}</p>
                <p>{coin.symbol?.toUpperCase()} / USD</p>
            </div>
        </div>


            <div className='row'>
                <div className='col-12 col-sm-6'>
                    <div className='d-flex justify-content-between'>
                        {coin.market_data?.current_price ? (
                            <p className='fw-bold fs-3'>${coin.market_data.current_price.usd.toLocaleString()}</p>
                        ) : null}
                        <p>7 Day</p>
                    </div>

                    <div>
                        <Sparklines data={coin.market_data?.sparkline_7d.price}>
                            <SparklinesLine color='teal'/>
                        </Sparklines>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='text-secondary fw-bold'>Market Cap</p>
                            {coin.market_data?.market_cap ? (
                                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                            ) : null}
                        </div>
                        <div>
                            <p className='text-secondary fw-bold'>Volume (24h)</p>
                            {coin.market_data?.market_cap ? (
                                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='text-secondary fw-bold'>24 High</p>
                            {coin.market_data?.high_24h ? (
                                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                            ) : null}
                        </div>
                        <div>
                            <p className='text-secondary fw-bold'>24 Low</p>
                            {coin.market_data?.low_24h ? (
                                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className='col-12 col-sm-6'>
                    <p className='fw-bold text-3'>Market Stats</p>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='text-secondary fw-bold'>Market Rank</p>
                            {coin.market_cap_rank}
                        </div>
                        <div>
                            <p className='text-secondary fw-bold'>Hashing Algorithm</p>
                            {coin.hashing_algorithm ? (<p>{coin.hashing_algorithm}</p>) : null}
                        </div>
                        <div>
                            <p className='text-secondary fw-bold'>Trust Score</p>
                            {coin.tickers ? (<p>{coin.liquidity_score.toFixed(2)}</p>) : null}
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='text-secondary fw-bold'>Price Change (24h)</p>
                            {coin.market_data ? (
                                <p>{coin.market_data.price_change_percentage_24h.toFixed(2)}</p>
                            ) : null}
                        </div>
                        <div>
                            <p className='text-secondary fw-bold'>Price Change (7d)</p>
                            {coin.market_data ? (
                                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}</p>
                            ) : null}
                        </div>
                        <div>
                            <p className='text-secondary fw-bold'>Price Change (14d)</p>
                            {coin.market_data ? (
                                <p>{coin.market_data.price_change_percentage_14d.toFixed(2)}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='text-secondary fw-bold'>Price Change (30d)</p>
                            {coin.market_data ? (
                                <p>{coin.market_data.price_change_percentage_30d.toFixed(2)}</p>
                            ) : null}
                        </div>
                        <div>
                            <p className='text-secondary fw-bold'>Price Change (60d)</p>
                            {coin.market_data ? (
                                <p>{coin.market_data.price_change_percentage_60d.toFixed(2)}</p>
                            ) : null}
                        </div>
                        <div>
                            <p className='text-secondary fw-bold'>Price Change (1y)</p>
                            {coin.market_data ? (
                                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className='d-flex justify-content-around pt-5'>
                        <i className='text-dark bi bi-github'></i>
                        <i className='text-primary bi bi-facebook'></i>
                        <i className='text-danger bi bi-reddit'></i>
                        <i className='text-info bi bi-twitter'></i>
                    </div>
                </div>
            </div>


        <div className='py-4 '>
            <p className='fs-3 fw-bold'>About {coin.name}</p>
            <p className='shadow-lg py-4 px-5 rounded-5' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ""),}}></p>
        </div>
    </div>
  )
};

export default CoinPage