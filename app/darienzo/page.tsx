'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-0">
                    <p className="text-left text-4xl py-2 sm:py-0" style={{ fontWeight: "bold" }}>Darienzo - Packaging design</p>
                    <p className="text-left text-2xl py-2 sm:py-0" style={{ fontWeight: "bold" }} >Branding, bottle and skin care kit packaging</p>
                    <h6 className='w-full sm:w-1/2 py-2 sm:py-0 sm:pt-6 text-gray-500'> Branding, packaging design</h6 >
                </div>
                <div className='my-4' style={{ whiteSpace: 'pre-wrap', fontFamily: 'Roboto' }}>
                    <div className='text w-full sm:w-1/2'>
                        I wanted to create memorable and quirky packaging for a range of cosmetic skin care products. Starting with branding and a strong visual identity I then translated it into bold, recognisable bottles and a bag style outer packaging to create a skin care kit.
                        <br />
                        <br />
                        The outer packaging needed to not only stand out but be sustainable. Opting for a 10mm thick board, made from Post consumer kraft that is fully recyclable and repulpable.
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/darienzo/001_3up.jpg" alt="3up darienzo"></img>
                    <img loading="eager" src="images/darienzo/003_D_Stands.jpg" alt="d stands"></img>
                    <img loading="lazy" src="images/darienzo/004_front_open.jpg" alt="front open"></img>

                    <img loading="lazy" src="images/darienzo/005_D_ISO.jpg" alt="d iso"></img>

                    <img loading="lazy" src="images/darienzo/006_D_Flat.jpg" alt="d flat"></img>
                    <img loading="lazy" src="images/darienzo/007_bagstreet.jpg" alt="bag street"></img>
                    <img loading="lazy" src="images/darienzo/008_D_Stack.jpg" alt="d stack"></img>
                    <img loading="lazy" src="images/darienzo/009front_back.jpg" alt="front back"></img>

                </div>


            </div>
            <hr style={{ height: "1px", border: "1px solid" }} className="gap-5 border-slate-400 text-slate-400"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">
                <Link href="/floofs">
                    <div>
                        <img data-aos="fade-up" className="image" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
                        <p className="text-2xl font-thin">
                            Packaging design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Floofs
                        </strong>
                    </div>
                </Link>

                <Link href="/blabs">
                    <div className=''>
                        <img data-aos="fade-up" className="image" src="images/blabs/B_labs_homeimage.jpg" alt='Header image'></img>
                        <p className="text-2xl font-thin">
                            Packaging design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            B.Labs
                        </strong>
                    </div>
                </Link>
            </div>
        </div >

    );
}
