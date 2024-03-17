'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';

const ExpandableText = ({ children, descriptionLength }) => {
    const fullText = children;

    // Set the initial state of the text to be collapsed
    const [isExpanded, setIsExpanded] = useState(false);

    // This function is called when the read more/less button is clicked
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='text'>
            {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}..`}
            <pre>
                <span onClick={toggleText} className='toggle-button'>
                    {isExpanded ? 'See less' : 'See more...'}
                </span>
            </pre>
        </div>
    );
};

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto" }} className="">
                    <p className="text-left text-4xl" style={{ fontWeight: "bold" }}>B-labs</p>
                    <p className="text-left text-2xl" style={{ fontWeight: "bold" }} >Branding and packaging design for B-labs Glassware</p>
                    < h6 style={{ width: "50%" }}> Branding, packaging design</h6 >
                </div>
                <div className='my-4'>
                    <ExpandableText descriptionLength={282}>...
                        <p style={{ whiteSpace: 'pre-wrap' }}>{'\u000A'}...
                            {/* <span style={{ whiteSpace: 'pre-wrap' }}>
                                {'\u000A \u000A'}
                            </span> */}
                        </p>
                    </ExpandableText>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-20" contextMenu="false">
                    <img loading="eager" src="images/blabs/001_Group.jpg" alt="Group"></img>
                    <img loading="eager" src="images/blabs/002_Front Angled.jpg" alt="Front Angled"></img>
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
            <hr style={{ color: "black", height: "2px", border: "1px solid black" }} className="solid gap-5"></hr>

            <div className="grid grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">

                <Link href="/darienzo">
                    <div className=''>
                        <img data-aos="fade-up" className="image" src="images/darienzo/Home page image.jpg" alt='Header image'></img>
                        <p className="text-2xl font-thin">
                            Packaging design / Gift Box Design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Darienzo
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
