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
                    <p className="text-left text-4xl" style={{ fontWeight: "bold" }}>Toxic Knobs - packaging design</p>
                    <p className="text-left text-2xl" style={{ fontWeight: "bold" }} >Packaging design for Toxic Knobs Gear Knob</p>
                    < h6 className=' pt-6' style={{ width: "50%" }}>Packaging Design</h6 >
                </div>
                <div className='my-4'>
                    <ExpandableText descriptionLength={282}>Independent gear knob manufacturer Toxic Knobs, were looking for a eco friendly packaging to house their hand crafted, recycled gear knobs.
                        <p style={{ whiteSpace: 'pre-wrap' }}>{'\u000A'}

                            Each gear knob is hand made using ground down and reformed plastic bottles, To carry on the ethos of the product the packaging was made Using 100% recyclable card.
                            {'\u000A \u000A'}
                            Incorporating the new branding into the design, I opted for tube packaging. this worked well in keeping it recyclable, but almost mirrored the brands visual identity. Designing the tube to have the feel of a science capsule,
                            {/* <span style={{ whiteSpace: 'pre-wrap' }}>
                                {'\u000A \u000A'}
                            </span> */}
                        </p>
                    </ExpandableText>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-20" contextMenu="false">
                    <img loading="eager" src="images/Toxic knobs/001_3x_front 2.jpg" alt="3 up"></img>
                    <img loading="eager" src="images/Toxic knobs/002_Pose_black.jpg" alt="Pose Black"></img>
                    <img loading="lazy" src="images/Toxic knobs/003_4up_Black.jpg" alt="4 up black"></img>

                    <img loading="lazy" src="images/Toxic knobs/4up_Red.jpg" alt="4 up red"></img>
                    <video className="lazy" autoPlay muted loop playsInline>
                        <source src="images/Toxic knobs/005_openclose.mp4" type='video/mp4'></source>
                    </video>
                    <img loading="lazy" src="images/Toxic knobs/006_Close_up_twist_2.jpg" alt="Close up twist"></img>
                    <img loading="lazy" src="images/Toxic knobs/007_Close_up_open.jpg" alt="Close up open"></img>
                    <img loading="lazy" src="images/Toxic knobs/008_close_tk.jpg" alt="Close tall knob"></img>
                    <img loading="lazy" src="images/Toxic knobs/009_red.jpg" alt="Red"></img>
                    <img loading="lazy" src="images/Toxic knobs/010_4up_Blue.jpg" alt="4 up blue"></img>
                </div>


            </div>
            <hr style={{ color: "black", height: "2px", border: "1px solid black" }} className="solid gap-5"></hr>

            <div className="grid grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">

                <Link href="/blabs">
                    <div className=''>
                        <img data-aos="fade-up" className="image" src="images/blabs/B_labs_homeimage.jpg" alt='Header image'></img>
                        <p className="text-2xl font-thin">
                            Packaging design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            B-Labs
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
