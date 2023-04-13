import React from 'react'
import { Sparklines, SparklinesLine  } from 'react-sparklines';
import { NavLink } from "react-router-dom"
import "../App.css"

const CoinItems = ({coin}) => {
  return (
    <tr className='border-bottom h-75 overflow-hidden coin_search'>
        <td><i className='bi bi-star-fill'></i></td>
        <td>{coin.market_cap_rank}</td>
        <NavLink to={`/coin/${coin.id}`} className="text-danger text-decoration-none">
          <td>
              <div className='d-flex align-items-center py-2'>
                  <img className='img_coin mx-2 rounded' src={coin.image} alt={coin.id} />
                  <p>{coin.name}</p>
              </div>
          </td>
        </NavLink>
        <td>${coin.current_price.toLocaleString()}</td>
        <td>{coin.symbol.toUpperCase()}</td>
        <td className='d-none d-md-table-cell'>
          {coin.price_change_percentage_24h > 0 ? (
            <p className='text-success'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          ) : (
            <p className='text-danger'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
          )}
        </td>
        <td className='d-none d-md-table-cell'>{coin.total_volume.toLocaleString()}</td>
        <td className='d-none d-md-table-cell'>{coin.market_cap.toLocaleString()}</td>
        <td>
            <Sparklines data={coin.sparkline_in_7d.price}>
              <SparklinesLine color='teal'/>
            </Sparklines>
        </td>
    </tr>
  )
}

export default CoinItems