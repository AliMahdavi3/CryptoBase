import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from './Toggle'
import "../App.css"



const Navbar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='container rounded-5 py-3  shadow d-flex justify-content-between align-items-center'>
        <NavLink to="/" className="text-decoration-none">
            <h1 className='title'>CryptoBase</h1>
        </NavLink>

        {/* dark/light mode */}
        <div className='d-none d-md-block'>
            <Toggle/>
        </div>
        {/* sign in and sign up */}
        <div className='d-none d-md-block'>
            <NavLink to="/SignIn" className="text-decoration-none">Sign In</NavLink>
            <NavLink to="/SignUp" className="text-decoration-none py-2 px-3 shadow-lg bg-primary text-dark rounded-5 mx-3">Sign Up</NavLink>
        </div>


        {/* mobile menu */}

        <Button variant="d-block d-md-none" onClick={handleShow} className="me-2">
            <i className='bi bi-list menu_btn text-success'></i>
        </Button>
        <Offcanvas placement='end' className="offcanvas bg-secondary" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title className='text-warning'>CryptoBase</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='mobile_menu'>
                    <ul className='list-unstyled'>
                        <li className='py-3 text-dark px-2 border-bottom'>Home</li>
                        <li className='py-3 text-dark px-2'>Account</li>
                        <li className='px-5 py-4 border-bottom'><Toggle/></li>
                    </ul>
                </div>
                <div className='mobile_link d-flex justify-content-center flex-column align-items-center'>
                    <NavLink className="text-decoration-none w-100 text-center text-dark bg-light shadow-lg mb-2 rounded-5 py-3 " to="/SignIn">Sign In</NavLink>
                    <NavLink className="text-decoration-none w-100 text-center py-3 bg-info text-dark rounded-5" to="/SignUp">Sign Up</NavLink>
                </div>
            </Offcanvas.Body>
        </Offcanvas>

    </div>
  )
}

export default Navbar