import React from "react";
import logo from "../../assets/logo.svg";
import navDropDown from "../../assets/navDropDown.svg";
import searchIcon from "../../assets/searchNavbar.svg";
import hero_svg from '../../assets/hero-form.svg'

function Navbar() {
  return (
    <div className=" navbarPage container-fluid ">
      <div className="navbar d-flex align-items-center justify-content-between">
        <div className="logo ">
          <img src={logo} className="img-fluid" alt="" />
        </div>
        <div className="searchBox">
          <form class="d-flex" role="search">
            <img
              className="input-group-text bg-transparent border-0"
              src={searchIcon}
              alt=""
            />
            <input
              className="form-control me-1 bg-transparent border-0"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="account d-flex align-items-center  ">
          <p>
            Create account.{" "}
            <span style={{ color: "#2F6CE5" }}> It’s free!</span>
          </p>
          <img
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="px-2"
            src={navDropDown}
            alt=""
          />
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered ">
          <div class="modal-content">
            <div className='modal-header'>

              <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

            </div>

            <div className=" p-4 contents d-flex justify-content-between ">
              <div className=' w-50 form d-flex flex-column   '>
                <h1 className="form_heading mb-2">Create Account</h1>
                <form class="row ">
                  <div class="col-6">
                    <input type="email" class="form-control form-control-lg" id="inputEmail4" />
                  </div>
                  <div class="col-6">
                    <input type="password" class="form-control form-control-lg" id="inputPassword4" />
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control form-control-lg" id="inputAddress" placeholder="Email" />
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control form-control-lg" id="inputAddress2" placeholder="Password" />
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control form-control-lg" id="inputAddress2" placeholder="Confirm Password" />
                  </div>
                </form>

              </div>
              <div className=" w-50 svg d-flex flex-column justify-content-center">
                <p className="svg_heading mb-2">Already have an account? <span>Sign In</span></p>
                <img src={hero_svg} alt="" />
                <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
