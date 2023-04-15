import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

const SavedCoin = () => {
  const [coins, setCoins] = useState([])
  return (
    <div>
    {coins.length === 0 ? (
      <p>You don't have any coin 
      <NavLink>Click here to search coins</NavLink></p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin)=>{
            <tr key={coin.id}>
              <td>{coin?.rank}</td>
              <td>
                <NavLink to={`/coin/${coin.id}`}>
                  <div>
                    <img src={coin?.image} alt="/" />
                    <div>
                      <p>{coin?.name}</p>
                      <p>{coin?.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                </NavLink>
              </td>
              <td>
                <i className='bi bi-x-lg pointer'></i>
              </td>
            </tr>
          })}
        </tbody>
      
      </table>
    )}
    </div>
  )
}

export default SavedCoin