import React from 'react'
import Toggle from "./Toggle"

const Footer = () => {
  return (
    <div className='container-fluid mt-5 shadow-lg py-4'>
        <div className='row'>
            <div className='col-12 col-sm-6 d-flex justify-content-evenly'>
                <div>
                    <h2 className='fw-bold'>Support</h2>
                    <ul className='list-unstyled'>
                        <li className='py-2'>Help Center</li>
                        <li className='py-2'>Contact Us</li>
                        <li className='py-2'>API Status</li>
                        <li className='py-2'>Documentation</li>
                    </ul>
                </div>
                <div>
                    <h2 className='fw-bold'>Info</h2>
                    <ul className='list-unstyled'>
                        <li className='py-2'>About Us</li>
                        <li className='py-2'>Careers</li>
                        <li className='py-2'>Invest</li>
                        <li className='py-2'>Legal</li>
                    </ul>
                </div>
            </div>

            <div className='col-12 col-sm-6 text-center'>
                <div className='d-flex justify-content-center w-100'>
                    <div>
                        <div className='py-3'>
                            <Toggle/>
                        </div>
                        <p>Sign up for crypto news</p>
                        <div>
                            <form >
                                <input className='form-control rounded-5 border-none shadow-lg w-100' type="email" placeholder='Enter your email' />
                                <button className='btn btn-primary rounded-5 w-100 my-2 shadow-lg'>Sign up</button>
                            </form>
                        </div>
                        <div className='d-flex justify-content-between mt-3'>
                            <i className='bi bi-github'></i>
                            <i className='bi bi-facebook'></i>
                            <i className='bi bi-twitter'></i>
                            <i className='bi bi-reddit'></i>
                            <i className='bi bi-instagram'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p className='py-4 text-center'>Powered By CoinGecko</p>
    </div>
  )
}

export default Footer