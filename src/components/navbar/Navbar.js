import React from 'react'
import logo from '../../assets/logo.svg'
import navDropDown from '../../assets/navDropDown.svg'
import searchIcon from '../../assets/searchNavbar.svg'

function Navbar() {
    return (
        <div className=" navbarPage container-fluid ">
            <div className="navbar d-flex align-items-center justify-content-between">
                <div className="logo ">
                    <img src={logo} className="img-fluid" alt="" />
                </div>
                <div className="searchBox">
                    <form class="d-flex" role="search">
                        <img className="input-group-text bg-transparent border-0" src={searchIcon} alt=""/>
                        <input className="form-control me-1 bg-transparent border-0"  type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
                    </form>
                </div>
                <div className="account d-flex align-items-center  ">

                    <p>Create account. <span style={{ color: "#2F6CE5" }}> It’s free!</span></p>
                    <img className="px-2" src={navDropDown} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
