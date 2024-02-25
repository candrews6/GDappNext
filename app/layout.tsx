'use client'
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import $ from "jquery";
// import AOS from 'aos';
import "aos/dist/aos.css";
import Script from 'next/script';
// import { pushRotate as Menu } from 'react-burger-menu';

// const [isMenuOpen, setIsMenuOpen] = React.useState(false);
// const handleCloseMenu = () => {
//     setIsMenuOpen(false);
// };
// const handleStateChange = (state) => {
//     setIsMenuOpen(state.isOpen);
// };

// const NavBar = () => (
//     <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}>
//         ... Link 1
//         <button onClick={() => handleCloseMenu} />
//         ....
//     </Menu>
// );



const Links = () => (
    <>
        {/* <nav>
                    <header className="justify-evenly sm:grid grid-cols-9 sm:w-10/12 text-center top-12"> */}
        <Link href="/" className="item sm:col-start-1 sm:pl-5 sm:pr-11">WORK</Link>
        <Link href="/about" className="item col-start-5 sm:px-5">ABOUT</Link>
        <Link href="/contact" className="item col-start-9 sm:pr-1">CONTACT</Link>
        {/* </header>
                </nav> */}
    </>
);

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="></script> */}
                <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="/stylesheets/output.css" />
            </head>
            <body className="w-screen sm:w-10/12  mx-auto center-content">
                {/* <Navbar></Navbar> */}

                <nav>
                    <header className="hidden sm:visible justify-evenly sm:grid grid-cols-9 sm:w-10/12 text-center top-12">
                        <Links></Links>
                    </header>
                </nav>
                <div id="menuArea" className="sm:hidden z-[5000]">
                    <input type="checkbox" id="menuToggle"></input>

                    <label htmlFor="menuToggle" className="menuOpen">
                        <div className="open"></div>
                    </label>

                    <div className="menu menuEffects">
                        <label htmlFor="menuToggle"></label>
                        <div className="menuContent">
                            <ul>
                                <li><Link href="/">WORK</Link></li>
                                <li><Link href="/about">ABOUT</Link></li>
                                <li><Link href="/contact">CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <Navbar></Navbar> */}


                {/* <div className="button_container mx-3 visible sm:hidden" id="toggle"><span className="top"></span><span className="middle"></span><span className="bottom"></span></div>
                <div className="overlay" id="overlay">
                    <nav className="overlay-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div> */}
                <div>
                    <Link href="/">
                        <svg className="pt-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 5442.52 566.93">
                            <style type="text/css">

                            </style>
                            <g>
                                <path id="pa1" data-aos="slide-down" data-aos-delay="700" d="M704.37,418.21c-45.1,48.86-120.28,75.17-217.47,75.17c-160.01,0-261.5-70.34-261.5-200.82
c0-130.48,101.48-200.82,260.96-200.82c95.04,0,163.77,28.46,206.19,65.51l-101.48,76.78c-32.22-24.16-58.53-32.75-98.26-32.75
c-78.4,0-114.91,35.44-114.91,91.28c0,56.92,38.12,93.43,114.91,93.43c27.38,0,48.32-3.76,73.02-13.96V342.5h-94.5v-88.6h233.04
V418.21z">
                                </path>
                                <path id="pa2" data-aos="slide-down" data-aos-delay="600" d="M1049.24,480.5l-84.3-103.09h-67.12V480.5H748.55V104.63h270.09c104.17,0,188.47,42.96,188.47,136.39
c0,61.21-35.98,100.95-90.21,120.81l102.02,118.67H1049.24z M897.82,282.9h107.93c29,0,49.4-9.67,49.4-37.59
s-20.4-37.59-49.4-37.59H897.82V282.9z">
                                </path>
                                <path id="pa3" data-aos="slide-down" data-aos-delay="500" d="M1570.98,421.43h-170.75l-26.31,59.07H1218.2l186.86-375.87h163.23l186.86,375.87h-157.86L1570.98,421.43z
M1530.17,330.15l-44.57-99.87l-44.57,99.87H1530.17z">
                                </path>
                                <path id="pa4" data-aos="slide-down" data-aos-delay="400"
                                    d="M2237.74,104.63V480.5h-132.09L1910.2,275.92V480.5h-144.98V104.63h158.94l168.6,180.96V104.63H2237.74z">
                                </path>
                                <path id="pa5" data-aos="slide-down" data-aos-delay="300"
                                    d="M2688.71,214.71h-141.76V480.5h-150.35V214.71h-141.76V104.63h433.86V214.71z">
                                </path>
                                <path id="pa6" data-aos="slide-down" data-aos-delay="200" d="M3175.87,292.57c0,119.74-94.5,187.93-242.7,187.93H2705.5V104.63h227.67
C3081.37,104.63,3175.87,172.83,3175.87,292.57z M3022.31,292.57c0-48.33-37.59-76.25-102.02-76.25h-64.43v152.49h64.43
C2984.72,368.81,3022.31,340.89,3022.31,292.57z">
                                </path>
                                <path id="pa7" data-aos="slide-down" data-aos-delay="300" d="M3495.02,421.43h-170.75l-26.31,59.07h-155.72l186.86-375.87h163.24l186.86,375.87h-157.86L3495.02,421.43z
M3454.21,330.15l-44.57-99.87l-44.57,99.87H3454.21z">
                                </path>
                                <path id="pa8" data-aos="slide-down" data-aos-delay="400"
                                    d="M3759.82,104.63l93.43,236.8l93.43-236.8h157.86L3930.57,480.5h-156.79l-173.97-375.87H3759.82z">
                                </path>
                                <path id="pa9" data-aos="slide-down" data-aos-delay="500"
                                    d="M4114.62,480.5V104.63h150.35V480.5H4114.62z">
                                </path>
                                <path id="pa10" data-aos="slide-down" data-aos-delay="600"
                                    d="M4741.33,376.33V480.5h-424.19V104.63h418.29V208.8h-271.16v34.9h218v93.43h-218v39.2H4741.33z">
                                </path>
                                <path id="pa11" data-aos="slide-down" data-aos-delay="700" d="M5217.11,355.93c0,83.77-73.56,137.46-214.78,137.46c-99.34,0-187.4-25.24-249.68-69.8l71.95-82.69
c41.88,28.46,107.39,51.01,179.88,51.01c44.03,0,64.97-6.44,64.97-19.87c0-12.89-14.5-18.79-77.32-24.16
c-118.67-10.2-222.3-37.59-222.3-125.65c0-84.3,91.82-130.48,216.39-130.48c77.86,0,158.4,17.72,215.32,53.16l-68.19,83.23
c-43.49-26.31-92.35-36.51-146.59-36.51c-32.75,0-69.27,3.22-69.27,17.72c0,12.35,25.77,16.11,80.01,20.4
C5125.83,240.48,5217.11,264.11,5217.11,355.93z">
                                </path>
                            </g>
                        </svg>
                    </Link>
                </div>
                {children}
                <hr className="solid gap-5"></hr>
                <div className="grid grid-cols-2 gap-10 px-5 py-10 z-0 pointer-events-none" contextMenu="return false">
                    <Link href="/toxicknobs">
                        <div>
                            <figure className="inline-block overflow-hidden relative group">
                                <img data-aos="fade-up" className="image" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
                                <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-2xl font-thin">
                                        Packaging design
                                    </p>
                                    <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
                                        Toxic knobs
                                    </strong>
                                </div>
                            </figure>
                            <p className="text-2xl font-thin">
                                Packaging design
                            </p>
                            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
                                Toxic Knobs
                            </strong>
                        </div>
                    </Link>

                    <Link href="/darienzo" scroll={true}>
                        <div>
                            <figure className="inline-block overflow-hidden relative group">
                                <img data-aos="fade-up" className="image" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
                                {/* <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"></div> */}
                                <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-2xl font-thin">
                                        Packaging design / Gift Box Design
                                    </p>
                                    <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
                                        Darienzo
                                    </strong>
                                </div>
                            </figure>
                            <p className="text-2xl font-thin">
                                Packaging design / Gift Box Design
                            </p>
                            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
                                Darienzo
                            </strong>
                        </div>
                    </Link>
                </div>

                <footer className="w-screen sm:w-10/12 text-center grid grid-cols-3">
                    <img className="grid-start w-10/12" src="images/copyright_Bottom-01.svg" alt="" />
                    <img className="grid-end w-2/12" src="images/email_Icon-01.svg" alt="" />
                    <Link className="grid-end w-2/12" href="https://www.linkedin.com" >
                        <img src="images/Linkedin_Icon-01.svg" alt="" />
                    </Link>

                </footer>

                <script>
                    AOS.init();
                </script>
                <script>
                    {/* const toggle = element.addEventListener('#toggle').click(function () {
                        $(this).toggleClass('active');
                    element.classList('#overlay').toggleClass('open');
                    }); */}
                </script>
                {/* <Script src="script/burger.js" /> */}
                {/* <Script src="scripts/script.js" /> */}

            </body>
        </html >
    );
}
