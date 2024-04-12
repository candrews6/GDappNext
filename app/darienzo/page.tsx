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
                        I aimed to craft distinctive and playful packaging for a line of skincare products amidst a crowded market. Recognising the necessity of standing out, I developed a vibrant brand characterised by bold packaging.
                        <br />
                        <br />
                        Beginning with the creation of a robust brand identity I translated it into recognisable bottle designs. Opting for softly rounded bottles tapering at the top, I felt this aesthetic complemented the brand's essence evoking a sense of both care and a quirky nature. Utilising the brand's primary colours along with white for text, I used the teal to draw attention to key information.
                        <br />
                        <br />
                        For the outer packaging, my goal was to design something memorable and conversation-worthy. After exploring various concepts I settled on the idea of the packaging doubling as a bag. This unique approach peaks curiosity among potential customers.
                        <br />
                        <br />
                        Sustainability was paramount, leading me to select a 10mm thick board crafted from post-consumer kraft, which is fully recyclable and repulpable. This eco-conscious choice not only enhances the packaging's carbon footprint but also provides a sturdy and resilient solution suitable for travel.
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/darienzo/001_3up.jpg" alt="3up darienzo"></img>
                    <img loading="eager" src="images/darienzo/002_D_Bag_Sketch.jpg" alt="d bag sketch"></img>
                    <img loading="eager" src="images/darienzo/003_D_Stands.jpg" alt="d stands"></img>
                    <img loading="lazy" src="images/darienzo/004_front_open.jpg" alt="front open"></img>

                    <img loading="lazy" src="images/darienzo/005_D_ISO.jpg" alt="d iso"></img>

                    <img loading="lazy" src="images/darienzo/006_D_Flat.jpg" alt="d flat"></img>
                    <img loading="lazy" src="images/darienzo/007_bagstreet.jpg" alt="bag street"></img>
                    <img loading="lazy" src="images/darienzo/008_D_Stack.jpg" alt="d stack"></img>
                    <img loading="lazy" src="images/darienzo/008_posters_DZO.jpg" alt="posters"></img>

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

                <Link href="/toxicknobs">
                    <div>
                        <img data-aos="fade-up" className="image" src="images/Toxic knobs/home_Page_TK.jpg" alt='Header image'></img>
                        <p className="text-2xl font-thin">
                            Packaging design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Toxic Knobs
                        </strong>
                    </div>
                </Link>
            </div>
        </div >

    );
}
