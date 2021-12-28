import React from 'react'
import './sass/navbar.css';
import heroMobile from './images/hero-mobile.jpg';
import logo from './images/logo.svg';

 class Navbar extends React.Component {
    render() {
        return (
            <>
            <div className="head">
            <img src={logo} ></img>

            </div>
            <div className="banner">
                <div className="text-banner">
                    <img src={logo} ></img>
                    <h1 className='pink'>we're </h1>
                    <h1 className='black'>coming</h1>
                    <h1 className='black'>soon</h1>
                    <p>Hello follow shoppers! We're currently building our new fashion store.Add your email
                    below to stay up-to-date with announcements and out launch deals.</p>
                    <div className="btn">
                        <input type='email' placeholder='Email Address'></input>
                        <a href='#' className='fas fa-chevron-right'></a>
                    </div>
                </div>

                <div className="hero">
                    <img src={heroMobile} alt=''></img>
                </div>
            </div>

            </>
        );
    }
}

export default Navbar;