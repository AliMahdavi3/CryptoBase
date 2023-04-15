import React from 'react'
import SavedCoin from '../layout/SavedCoin'

const Account = () => {
  return (
    <div className='mt-5'>
      <div className='d-flex container shadow-lg rounded-5 py-3 px-4 justify-content-between align-items-center'>

        <div>
          <h1>Account</h1>
          <div>
            <p className='fs-3 fw-bold'>Welcome, User</p>
          </div>
        </div>

        <div>
          <button className='py-2 px-3 rounded-5 shadow-lg btn btn-warning'>Loge Out</button>
        </div>

      </div>

      <div className='container rounded-5 shadow-lg d-flex justify-content-between align-items-center mt-5'>
        <div className='w-100 py-2 px-3'>
          <h1 className='fw-bold py-4'>Watch List</h1>
          <SavedCoin/>
        </div>
      </div>
    </div>
  )
}

export default Account