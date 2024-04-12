'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-0">
                    <p className="text-left text-4xl py-2 sm:py-0" style={{ fontWeight: "bold" }}>B.labs</p>
                    <p className="text-left text-2xl py-2 sm:py-0" style={{ fontWeight: "bold" }} >Glass bong packaging</p>
                    <h6 className='w-full sm:w-1/2 py-2 sm:py-0 sm:pt-6 text-gray-500'> Brand identity, Packaging</h6 >
                </div>
                <div className='my-4 roboto.className' style={{ whiteSpace: 'pre-wrap', fontFamily: 'Roboto' }}>
                    <div className='text w-full sm:w-1/2'>
                        The startup "B-LABS" aimed to develop packaging for their handmade glassware that defied the typical disposable nature of most packaging. Embracing their brand guidelines, I sought to create packaging for their glass bong that customers would cherish forever.
                        <br />
                        <br />
                        Working within the allocated budget, I designed packaging that not only provided secure housing for the product but also served as a storage solution when not in use. For the outer packaging, I opted for a paper over board style box with foiled logos, the back of the box features an outline illustration of the product along with key features and product information, reflecting the brand's vibrant blue and pristine white colour scheme.
                        <br />
                        <br />
                        Conscious of avoiding stereotypical cannabis culture clichés, the branding and packaging exuded a refined and upscale aura. After presenting several concepts, the decision was made to adopt an acrylic display case. This design, also featuring the brand's signature blue and white hues, not only protects the glassware but also transformed it into a display-worthy item.
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/blabs/001_Group.jpg" alt="Group"></img>
                    <img loading="eager" src="images/blabs/002_B_Labs_Sketch.jpg" alt="Front Angled"></img>
                    <img loading="lazy" src="images/blabs/003_Close1.jpg" alt="Close 1"></img>

                    <img loading="lazy" src="images/blabs/004_Inside.jpg" alt="Inside"></img>

                    <img loading="lazy" src="images/blabs/005_Alone1.jpg" alt="Alone"></img>
                    <img loading="lazy" src="images/blabs/006_Pose1.jpg" alt="Pose"></img>
                    <img loading="lazy" src="images/blabs/007_Front.jpg" alt="Front"></img>
                    <img loading="lazy" src="images/blabs/008_Stacked.jpg" alt="Stacked"></img>
                    <img loading="lazy" src="images/blabs/009_blacktray.jpg" alt="Blacktray"></img>

                    <img loading="lazy" src="images/blabs/010_.jpg" alt="Sign"></img>
                </div>


            </div>
            <hr style={{ height: "1px", border: "1px solid" }} className="gap-5 border-slate-400 text-slate-400"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">

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
