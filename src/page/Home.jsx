import React from 'react'
import CoinSearch from '../layout/CoinSearch'
import Trending from '../layout/Trending'

const Home = ({coins}) => {
  return (
    <div>
        <CoinSearch coins={coins}/>
        <Trending/>
    </div>
  )
}

export default Home