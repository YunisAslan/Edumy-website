import React, { useRef, useState } from 'react'

// LOGO
import headerLogo from '../assets/images/header-logo.png'

//ICONS
import { RxPerson, RxCross1 } from "react-icons/rx";
import { FaOpencart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiBars2 } from "react-icons/hi2";

import LoginRegister from './LoginRegister';

const Navbar = () => {

    const overlayRef = useRef()
    const searchInputRef = useRef();
    const [open, setOpen] = useState(false)
    const [openTwo, setOpenTwo] = useState(false)
    const [openThird, setOpenThird] = useState(false)
    const [openFourth, setOpenFourth] = useState(false)
    const [signBox, setSignBox] = useState(false)

    const handleOverlay = e => {
        if (e.target.classList.contains('cross-overlay')) {
            overlayRef.current.classList.remove('overlay-active')
        }
        if (e.target.classList.contains('bars-overlay')) {
            overlayRef.current.classList.add('overlay-active')
        }
    }

    const handleSearch = e => {
        if (e.target.classList.contains('search-btn')) {
            searchInputRef.current.classList.add('visibl')
        }
        if (e.target.classList.contains('search-cross-icon')) {
            searchInputRef.current.classList.remove('visibl')
        }
    }

    const handleSign = (e) => {
        if (e.target.classList.contains('overlay-sign-btn')) {
            overlayRef.current.classList.remove('overlay-active')
        }
    }

    return (
        <>
            {/* Overlay navbar */}
            <div ref={overlayRef} className="overlay fixed top-0 bg-gray-800 left-0 w-screen h-0  z-[99] overflow-hidden">
               
                <button className='cross-overlay text-gray-100 text-[2rem] absolute right-10 top-10' onClick={handleOverlay}>
                    <RxCross1 className='pointer-events-none' />
                </button>

                <nav className='nav-links font-navbarFont font-[200] flex flex-col pl-10 pt-28 text-2xl text-white justify-center'>

                    <a href="" className='flex items-center tracking-wide py-3 max-w-[40%] uppercase'>Ana S??hif??</a>

                    <button href="" className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => setOpen(!open)}
                    >
                        Kurslar <RiArrowDropDownLine />
                    </button>

                    {
                        open && (
                            <div className="dropdown relative flex flex-col" >
                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Kurslar
                                </a>

                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    T??lim??il??r
                                </a>
                            </div>
                        )
                    }

                    <button href="" className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => setOpenTwo(!openTwo)}
                    >
                        T??dbirl??r <RiArrowDropDownLine />
                    </button>

                    {
                        openTwo && (
                            <div className="dropdown-second relative flex flex-col">
                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    T??dbirl??r siyah??s??
                                </a>

                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    T??dbirl??r
                                </a>
                            </div>)
                    }

                    <button href="" className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => setOpenThird(!openThird)}
                    >
                        S??hif??l??r <RiArrowDropDownLine />
                    </button>

                    {
                        openThird && (
                            <div className="dropdown-third relative">
                                <a href=""
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Ma??aza
                                </a>
                                <a href=""
                                    className='block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Giri?? et
                                </a>
                            </div>
                        )
                    }

                    <button href="" className='dropdown-trigger flex items-center py-3 tracking-wide max-w-[40%]'
                        onClick={() => setOpenFourth(!openFourth)}
                    >
                        Blog <RiArrowDropDownLine />
                    </button>

                    {
                        openFourth && (
                            <div className="dropdown-fourth relative flex flex-col">
                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Bloglar Siyah??s??
                                </a>

                                <a href=""
                                    className='inline-block pl-3 text-white hover:translate-x-3 transition-transform duration-700'>
                                    Blog yarat
                                </a>

                            </div>
                        )
                    }

                    <a href="" className='flex items-center tracking-wide py-3 max-w-[30%] uppercase'>??laq??</a>
                </nav>

                <button
                    className='absolute justify-center w-full mt-3 flex items-center text-white' onClick={() => setSignBox(!signBox)}>
                    <span className='overlay-sign-btn flex items-center' onClick={handleSign}>
                        <RxPerson className='pointer-events-none text-2xl mr-2' />
                        Daxil ol/Qeydiyyatdan ke??
                    </span>
                </button>
            </div>

            <div className="navbar absolute top-0 z-50 text-white flex justify-between w-screen items-center mm:pl-9  mm:pr-14 lg:px-14 mt-8">

                {/* overlay bars */}
                <button className='bars-overlay text-[2.5rem] absolute right-7 top-1 mm:flex lg:hidden' onClick={handleOverlay}>
                    <HiBars2 className='pointer-events-none' />
                </button>

                <div className="navbar-logo flex items-center mr-9">
                    <img src={headerLogo} alt="" />
                    <span className='pl-4 text-[1.5rem]'>EDUMY</span>
                </div>

                <nav className='nav-links uppercase font-navbarFont font-[200] flex-1 text-[1.375rem] space-x-6 flex xl:flex mm:hidden'>

                    <a href="" className='flex items-center tracking-wide'>Ana S??hif??</a>

                    <div className="dropdown relative" onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
                        <button className='dropdown-trigger flex items-center py-3 tracking-wide'>
                            Kurslar <RiArrowDropDownLine />
                        </button>

                        <div className={`dropping-menu ${open ? "drop-menu" : ""}`}>

                            <ul className='drop-links flex flex-col justify-center h-[100%] font-[300]'>
                                <li>
                                    <a href=""
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Kurslar
                                    </a>
                                </li>
                                <li>
                                    <a href=""
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        T??lim??il??r
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="dropdown-second relative" onMouseEnter={() => setOpenTwo(!openTwo)} onMouseLeave={() => setOpenTwo(!openTwo)}>
                        <button className='dropdown-trigger flex items-center tracking-wide py-3'>T??dbirl??r<RiArrowDropDownLine /></button>


                        <div className={`dropping-menu ${openTwo ? "drop-menu" : ""}`}>

                            <ul className='drop-links flex flex-col justify-center h-[100%] font-[300]'>
                                <li>
                                    <a href=""
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        T??dbirl??r Siyah??s??
                                    </a>
                                </li>
                                <li>
                                    <a href=""
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        T??dbir
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="dropdown-third relative" onMouseEnter={() => setOpenThird(!openThird)} onMouseLeave={() => setOpenThird(!openThird)}>
                        <button className='dropdown-trigger flex items-center py-3 tracking-wide'>S??hif??l??r <RiArrowDropDownLine /></button>


                        <div className={`dropping-menu ${openThird ? "drop-menu" : ""}`}>

                            <ul className='drop-links flex flex-col justify-center h-[100%] font-[300]'>
                                <li>
                                    <a href=""
                                        className='block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Ma??aza
                                    </a>
                                </li>
                                <li>
                                    <a href=""
                                        className='block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Giri?? et
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="dropdown-fourth relative" onMouseEnter={() => setOpenFourth(!openFourth)} onMouseLeave={() => setOpenFourth(!openFourth)}>
                        <button className='dropdown-trigger flex items-center py-3 tracking-wide'>Blog <RiArrowDropDownLine /></button>

                        <div className={`dropping-menu ${openFourth ? "drop-menu" : ""}`}>

                            <ul className='drop-links flex flex-col justify-center h-[100%] font-[300]'>
                                <li>
                                    <a href=""
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Ma??aza
                                    </a>
                                </li>
                                <li>
                                    <a href=""
                                        className='inline-block pl-3 text-black hover:translate-x-3 transition-transform duration-700'>
                                        Giri?? et
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <a href="" className='flex items-center tracking-wide'>??laq??</a>
                </nav>

                <div className="navbar-right flex ml-2">

                    <button className='sign-btn text-[1.8rem] flex items-center  mm:hidden lg:flex' onClick={() => setSignBox(!signBox)}>
                        <RxPerson className='pointer-events-none' />
                        <small className='text-[.9rem] pl-2'>Daxil ol / Qeydiyyatdan ke??</small>
                    </button>


                    {signBox && <LoginRegister setSignBox={setSignBox} signBox={signBox}/>}

                    <div className="cart mm:hidden lg:block">
                        <button className='text-[1.8rem] pl-6'>
                            <FaOpencart />
                        </button>
                    </div>

                    <div className="search">

                        <div className='search-area' ref={searchInputRef}>
                            <button
                                className='search-cross-icon absolute mm:right-4 sm:right-16 text-3xl text-premiumColor'
                                onClick={handleSearch}>
                                <RxCross1 className='pointer-events-none' />
                            </button>
                            <input type="text" className='search-input' placeholder='Can you love me again ?' />
                        </div>

                        <button className='search-btn text-[1.8rem] pl-6 lg:pr-0 mm:pr-6' onClick={handleSearch}>
                            <BsSearch className='pointer-events-none' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar