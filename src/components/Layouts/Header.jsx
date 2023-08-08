import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";


const Header = ({ activeHeading }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const handleImageError = () => {
    // Handle the error when the avatar image fails to load
    console.error("Error loading avatar image.");
    // You can update the state or perform any necessary error handling here
  };

  return (
    <>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10 " : null
        }
     transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          <div className="pl-5">
            <Link to="/">
              <div className="text-[#FDD6B0] font-[600] ">PIEDRA</div>
            </Link>
          </div>
        </div>
        {/* navitems */}
        <div className={`${styles.normalFlex}`}>
          <Navbar active={activeHeading} />
        </div>

    
        </div>

        {/* mobile header */}
        <div
          className={`${
            active === true ? "shadow-sm fixed top-0 left-0 z-10 " : null
          }
         w-full h-[70px] fixed bg-white z-50 top-0 left-0 shadow-sm 800px:hidden`}
        >
          <div className="w-full flex items-center justify-between">
            <div>
              <BiMenuAltLeft
                size={40}
                className="ml-4 cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </div>
            <div className="p-5">
            <Link to="/">
              <div className="text-[#FDD6B0] font-[600] ">PIEDRA</div>
            </Link>
          </div>
          </div>
          {/* header sidebar*/}
          {open && (
            <div className="fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0 ">
              <div className=" w-[60%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll ">
                <div className="w-full justify-between flex pr-3 ">
                  <RxCross1
                    size={30}
                    className="ml-4 mt-5 cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div>
                  <Navbar active={activeHeading}  />
                </div>
                {/*
             <div className={`${styles.button} !ml-4 !rounded-[4px]`}>
               <Link to="/shop-create">
                    <h1 className="text-[#fff] flex items-center">
                      Become Seller <IoIosArrowForward className="ml-1" />
                    </h1>
                  </Link>
                </div>{" "} 
          */}
                <br />
                
              
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default Header;
