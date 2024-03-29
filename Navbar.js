import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'



export default function Navbar() {
    const cartState = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">FoodBea</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                        {currentUser ? (<div class="dropdown mt-2">
                            <a style={{color:'Black'}} className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               {currentUser.name}
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Orders</a></li>
                                <li><a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>Logout</a></li>
                            </ul>
                        </div>) : (<li className="nav-item">
                            <a className="nav-link" href="/login">Login<span className="sr-only"></span></a>
                        </li>)}
                        

                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartState.cartItems.length}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
