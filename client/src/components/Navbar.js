import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from "react-router-dom"
import "../scss/components/_navbar.scss"



function Navbar() {
    const { user } = useSelector(state => state.authReducer);
    const [show, setShow] = useState(true);
    const dispacth = useDispatch();
    const logout = () => {
        localStorage.removeItem("MeduimToken");
        dispacth({ type: "LOGOUT" });
        <Navigate to="/" />
    }

    const change = () => {
        if (show)
            setShow(false)
        else
            setShow(true)
        console.log(show)
    }
    return (
        <nav>
            <div className={show ? 'nav-container bg-light' : "hide_shadow nav-container bg-light"}>
                <div className='nav_row'>
                    <div className='nav_left'>
                        <Link to="/">
                            <span>Medium...</span>
                        </Link>
                    </div>
                    <div className='nav_right'>
                        {user ? <>
                            <Link to="/create" className="a">
                                <span className='navbar-span'>Create Post</span>
                            </Link>
                            <Link to="/dashboard/1" className="a">
                                <span className='navbar-span'>{user.name}</span>
                            </Link>
                            <Link onClick={logout} className="a">
                                <span className='navbar-span'>Logout</span>
                            </Link>

                        </>

                            :
                            <><Link to="/login" className="a">
                                <span className='navbar-span'>Login</span>
                            </Link>
                                <Link to="/register" className="a">
                                    <span className='navbar-span'>Register</span>
                                </Link></>
                        }
                        <div className={show ? 'hamburger' : " hamburger hamburger_cross"} onClick={() => { change() }}>
                            <div id="ham_first"></div>
                            <div id="ham_sec"></div>
                            <div id="ham_thrid"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={show ? "hide" : "dropdown"}>
                {user ? <>
                    <Link to="/create" class="" onClick={()=>{setShow(!show)}}>
                        <span>Create Post</span>
                    </Link>
                    <Link to="/dashboard/1" class="" onClick={()=>{setShow(!show)}}>
                        <span>{user.name}</span>
                    </Link>
                    <Link onClick={logout} class="" onClick={()=>{setShow(!show)}}>
                        <span>Logout</span>
                    </Link>

                </>

                    :
                    <><Link to="/login" class="" onClick={()=>{setShow(!show)}}>
                        <span>Login</span>
                    </Link>
                        <Link to="/register" class="" onClick={()=>{setShow(!show)}}>
                            <span>Register</span>
                        </Link></>
                }
            </div>
        </nav>
    )
}

export default Navbar;