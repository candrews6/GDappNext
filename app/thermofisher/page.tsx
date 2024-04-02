'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-0">
                    <p className="text-left text-4xl py-2 sm:py-0" style={{ fontWeight: "bold" }}>Thermofisher</p>
                    <p className="text-left text-2xl py-2 sm:py-0" style={{ fontWeight: "bold" }} >Packaging Design</p>
                    <h6 className='w-full sm:w-1/2 py-2 sm:py-0 sm:pt-6 text-gray-500'> Brand identity, Packaging</h6 >
                </div>
                <div className='my-4 roboto.className' style={{ whiteSpace: 'pre-wrap', fontFamily: 'Roboto' }}>
                    <div className='text w-full sm:w-1/2'>
                        {/* Most packaging is designed to be thrown away, I wanted to create packaging for a glass bong that you would want to keep forever.
                        <br />
                        <br />
                        The packaging consists of a paper over board box with foiled logos, in a bright blue and clean white colour combination.
                        <br />
                        <br />
                        The branding intentionally avoids the generic cannabis culture clichés giving it a more sophisticated and high end feel.
                        <br />
                        <br />
                        Inside the box you will find the glassware incased in an acrylic display case. Not only does this protect the glassware, it becomes a product you would have on display. */}

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/thermofisher/001_Therm 2.jpg" alt="Therm 2"></img>
                    <img loading="eager" src="images/thermofisher/002_thermoblank.jpg" alt="thermo blank"></img>
                    <img loading="lazy" src="images/thermofisher/003_thermo.jpg" alt="thermo screen"></img>
                    <img loading="lazy" src="images/thermofisher/004_Therm.jpg" alt="thermo front"></img>
                    <img loading="lazy" src="images/thermofisher/005_Therm.jpg" alt="thermo open"></img>
                    <img loading="lazy" src="images/thermofisher/006_Therm.jpg" alt="thermo inside"></img>
                    <img loading="lazy" src="images/thermofisher/007_thermophone.jpg" alt="thermo phone"></img>
                    <img loading="lazy" src="images/thermofisher/008_2LR.jpg" alt="2 left and right"></img>
                    <img loading="lazy" src="images/thermofisher/009_cd_Mod.jpg" alt="cd mod"></img>
                    <img loading="lazy" src="images/thermofisher/010_fridge_FB.jpg" alt="fridge front back"></img>
                    <img loading="lazy" src="images/thermofisher/011_fridge_LR.jpg" alt="fridge left right"></img>
                </div>


            </div>
            <hr style={{ height: "1px", border: "1px solid" }} className="gap-5 border-slate-400 text-slate-400"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">

                <Link href="/toxicknobs">
                    <div className=''>
                        <img data-aos="fade-up" className="image" src="images/Toxic knobs/home_Page_TK.jpg" alt='Header image'></img>
                        <p className="text-2xl font-thin">
                            Packaging design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Toxic Knobs
                        </strong>
                    </div>
                </Link>
                <Link href="/nonnas">
                    <div>
                        <img data-aos="fade-up" className="image" src="images/nonnas/001_group_Nonnas.jpg" alt='group nonnas'></img>
                        <p className="text-2xl font-thin">
                            Packaging design for pasta kit
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Nonnas
                        </strong>
                    </div>
                </Link>
            </div>
        </div >

    );
}
