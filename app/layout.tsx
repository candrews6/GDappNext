import React from 'react';
// import React,{useEffect} from "react";
// import $ from 'jquery';
import AOS from 'aos';
import "aos/dist/aos.css";
import Alpine from 'alpinejs'
// import { useEffect } from "react";


// export default function MyFunctionalComponent() {
//     useEffect(() => {
    // useEffect(() => {
    //     setTimeout(() => {AOS.init()},0)
    //     },[])
    
// These styles apply to every route in the application
// import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="></script>
                <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" /> */}
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&amp;family=Source+Code+Pro:wght@500&amp;display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" /> */}
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&amp;display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/stylesheets/output.css" />
                {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
                {/* <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script> */}
                {/* <script src="https://cdn.tailwindcss.com"></script> */}
            </head>
            <body>
                {children}
                
            </body>
        </html>
    )
}
