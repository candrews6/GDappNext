'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-0">
                    <p className="text-left text-4xl py-2 sm:py-0" style={{ fontWeight: "bold" }}>Nonnas</p>
                    <p className="text-left text-2xl py-2 sm:py-0" style={{ fontWeight: "bold" }} >Packaging design for pasta kit</p>
                    <h6 className='w-full sm:w-1/2 py-2 sm:py-0 sm:pt-6 text-gray-500'> Brand identity, Packaging design</h6 >
                </div>
                <div className='my-4 roboto.className' style={{ whiteSpace: 'pre-wrap', fontFamily: 'Roboto' }}>
                    <div className='text w-full sm:w-1/2'>
                        Most packaging is designed to be thrown away, I wanted to create packaging for a glass bong that you would want to keep forever.
                        <br />
                        <br />
                        The packaging consists of a paper over board box with foiled logos, in a bright blue and clean white colour combination.
                        <br />
                        <br />
                        The branding intentionally avoids the generic cannabis culture clichés giving it a more sophisticated and high end feel.
                        <br />
                        <br />
                        Inside the box you will find the glassware incased in an acrylic display case. Not only does this protect the glassware, it becomes a product you would have on display.

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/nonnas/001_group_Nonnas.jpg" alt="Group"></img>
                    <img loading="eager" src="images/nonnas/002_pesto_fb.jpg" alt="pesto"></img>
                    <img loading="lazy" src="images/nonnas/003_bol_fb.jpg" alt="bol"></img>
                    <img loading="lazy" src="images/nonnas/004_penne_fb.jpg" alt="penne"></img>
                    <video className="lazy" autoPlay muted loop playsInline>
                        <source src='images/nonnas/005_nonnaloop.mp4' type='video/mp4'></source>
                    </video>

                    <img loading="lazy" src="images/nonnas/006_nona_BB.jpg" alt="nonna BB"></img>
                    <video className="lazy" autoPlay muted loop playsInline>
                        <source src='images/nonnas/007_pastalooop.mp4' type='video/mp4'></source>
                    </video>

                    <img loading="lazy" src="images/nonnas/008_nonna_Group2.jpg" alt="nonna group 2"></img>
                    <img loading="lazy" src="images/nonnas/008_pbowl.jpg" alt="p bowl"></img>
                    <img loading="lazy" src="images/nonnas/009_nonna_LGE.jpg" alt="nonna lge"></img>
                    <img loading="lazy" src="images/nonnas/010_Penne_1.jpg" alt="penne 1"></img>
                    <img loading="lazy" src="images/nonnas/011_nnbb2.jpg" alt="nn bb"></img>
                    <img loading="lazy" src="images/nonnas/012_bol_up.jpg" alt="bol up"></img>
                    <img loading="lazy" src="images/nonnas/013_pesto_up.jpg" alt="pesto up"></img>
                    <img loading="lazy" src="images/nonnas/014_nonmulti.jpg" alt="non multi"></img>
                </div>


            </div>
            <hr style={{ height: "1px", border: "1px solid" }} className="gap-5 border-slate-400 text-slate-400"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">

                <Link href="/thermofisher">
                    <div className=''>
                        <img data-aos="fade-up" className="image" src="images/thermofisher/Thermofisher_scientific_Home_Image.jpg" alt='Header image'></img>
                        <p className="text-2xl font-thin">
                            Packaging design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Thermofisher
                        </strong>
                    </div>
                </Link>
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
            </div>
        </div >

    );
}
