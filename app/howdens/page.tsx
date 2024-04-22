'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-0">
                    <p className="text-left text-4xl py-2 sm:py-0" style={{ fontWeight: "bold" }}>Howdens event bottle box</p>
                    <div className="text-left text-2xl py-2 sm:py-0 sm:px-8"><span className="text-xl" style={{ fontWeight: "600" }}>Brief:</span><span className="text-xl" style={{ fontWeight: "Normal" }}> To create a commemorative bottle box for an event launch for Howdens</span></div>
                    <h6 className='w-full sm:w-1/2 py-2 sm:py-0 sm:pt-6 text-gray-500'>Packaging Design</h6 >
                </div>
                <div className='mt-4' style={{ whiteSpace: 'pre-wrap', fontFamily: 'Roboto' }}>
                    <div className='text w-full sm:w-1/2'>
                        For the launch of Howdens “paint to order’’ scheme they wanted to hand out commemorative bottles of champagne to the attendees. They wanted a box to house the bottles personalised and branded to the event.
                        <br />
                        <br />
                        Working with my art director we put together some options to present to the client. The chosen design was based on the “paint to order’’ brochure that would be getting released after the event.
                        <br />
                        <br />
                        Taking inspiration from some of the example colour combination within the brochure I designed 5 different boxes, each shared the same layout but in different colour combinations based of the colour pallets.
                        <br />
                        <br />
                        A short questionnaire was sent to each attendee, based of the multiple choice answers selected, each person was paired with a colour pallet, giving them the design for their box.
                        <br />
                        <br />
                        Another key feature to the packaging was the swatches pin on the front of the box. The boxes were produced on a Swiss Q printer, unique to this press is its relief printing capabilities, by layering ink it creates a raised effect, similar to what you would get from embossing. Using this method I created a square swatch shape with a wood grain texture to be printed in this method. This gave the swatches a unique feel and was a talking point amongst the recipients.

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/howdens/001_group_1.jpg" alt="group 1"></img>
                    <img loading="eager" src="images/howdens/002_pair1.jpg" alt="pair 1"></img>
                    <img loading="lazy" src="images/howdens/003_pair2.jpg" alt="pair 2"></img>

                    <img loading="lazy" src="images/howdens/004_pair3.jpg" alt="pair 3"></img>
                    <img loading="lazy" src="images/howdens/005_pair4.jpg" alt="pair 4"></img>
                    <img loading="lazy" src="images/howdens/006_pair5.jpg" alt="pair 5"></img>
                    <img loading="lazy" src="images/howdens/007_closeup.jpg" alt="close up"></img>
                    <img loading="lazy" src="images/howdens/008_group_2.jpg" alt="group 2"></img>
                </div>


            </div>
            <hr style={{ height: "1px", border: "1px solid" }} className="gap-5 border-slate-400 text-slate-400"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">


                <Link href="/thermofisher">
                    <div>
                        <img data-aos="fade-up" className="image" src="images/thermofisher/Thermofisher_scientific_Home_Image.jpg" alt='Header image'></img>
                        <p className="text-2xl font-thin">
                            Cardboard model replicas
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Thermofisher
                        </strong>
                    </div>
                </Link>

                <Link href="/magickmakers">
                    <div className=''>
                        <img data-aos="fade-up" className="image" src="images/magickmakers/001_Box_bottle.jpg" alt='magick makers'></img>
                        <p className="text-2xl font-thin">
                            Bottle and box design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Magick Makers
                        </strong>
                    </div>
                </Link>
            </div>
        </div >

    );
}
