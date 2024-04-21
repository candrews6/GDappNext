'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-0">
                    <p className="text-left text-4xl py-2 sm:py-0" style={{ fontWeight: "bold" }}>Toxic Knobs - packaging design</p>
                    <div className="text-left text-2xl py-2 sm:py-0 sm:px-8"><span className="text-xl" style={{ fontWeight: "600" }}>Brief:</span><span className="text-xl" style={{ fontWeight: "Normal" }}> To design packaging for independent gear knob manufacturer</span></div>
                    <h6 className='w-full sm:w-1/2 py-2 sm:py-0 sm:pt-6 text-gray-500'>Packaging Design</h6 >
                </div>
                <div className='mt-4' style={{ whiteSpace: 'pre-wrap', fontFamily: 'Roboto' }}>
                    <div className='text w-full sm:w-1/2'>
                        Independent gear knob manufacturer Toxic Knobs, were looking for an eco friendly packaging to house their hand crafted recycled gear knobs. Each gear knob is hand made using ground down and reformed plastic bottles, to carry on the ethos of the product the packaging was made using 100% recyclable card.
                        <br />
                        <br />
                        Incorporating the new branding into the design I opted for tube packaging. This worked well in keeping it recyclable and mirrored the brands visual identity. Designing the tube to have the feel of a science capsule. Expanding from the style of the typeface into the packaging design helped re-enforce the scientific theme along with a hint of their “Toxic neon green” into areas of the design to bring it all together.
                        <br />
                        <br />
                        Speaking with the client and identifying their needs I incorporated into the design a product description section to be filled in by hand. This idea was to reduce waste from having pre-determined packaging that could only be used for a specific model of gear knob. This enables toxic knobs to have limitless options and production run sizes, which to the nature of demand and material availability is crucial.

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/Toxic knobs/001_3x_front 2.jpg" alt="3 up"></img>
                    <img loading="eager" src="images/Toxic knobs/002_Pose_black.jpg" alt="Pose Black"></img>
                    <img loading="lazy" src="images/Toxic knobs/003_4up_Black.jpg" alt="4 up black"></img>

                    <img loading="lazy" src="images/Toxic knobs/006_Close_up_twist_2.jpg" alt="Close up twist"></img>
                    <video className="lazy" autoPlay muted loop playsInline>
                        <source src="images/Toxic knobs/005_openclose.mp4" type='video/mp4'></source>
                    </video>
                    <img loading="lazy" src="images/Toxic knobs/4up_Red.jpg" alt="4 up red"></img>
                    <img loading="lazy" src="images/Toxic knobs/007_Close_up_open.jpg" alt="Close up open"></img>
                    <img loading="lazy" src="images/Toxic knobs/008_close_tk.jpg" alt="Close tall knob"></img>
                    <img loading="lazy" src="images/Toxic knobs/009_red.jpg" alt="Red"></img>
                    <img loading="lazy" src="images/Toxic knobs/010_4up_Blue.jpg" alt="4 up blue"></img>
                </div>


            </div>
            <hr style={{ height: "1px", border: "1px solid" }} className="gap-5 border-slate-400 text-slate-400"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">


                <Link href="/darienzo">
                    <div className=''>
                        <img data-aos="fade-up" className="image" src="images/darienzo/Home page image.jpg" alt='darienzo stack image'></img>
                        <p className="text-2xl font-thin">
                            Packaging design / Gift Box Design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Darienzo
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
