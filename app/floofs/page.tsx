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
                    <p className="text-left text-4xl" style={{ fontWeight: "bold" }}>FLOOFS - Bottle design</p>
                    <p className="text-left text-2xl" style={{ fontWeight: "bold" }} > A range of dog shampoo bottle designs for FLOOFS</p>
                    < h6 style={{ width: "50%" }}> Packaging(Bottle Design), Art Direction Illustration, Print Design, Typography</h6 >
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-20" contextMenu="false">
                    <img loading="eager" src="images/001_all3_Header.jpg" alt="All 3 Header"></img>
                    <h6 className="" style={{ width: "50%" }}></h6>
                    <div>
                        <ExpandableText descriptionLength={282}>Floofs, a prominent dog grooming company, embarked on a quest to redefine its shampoo range’s packaging design. With each variant boasting a distinct scent, the challenge was to craft a design that not only differentiated each bottle but also infused them with unique personalities. The design approach ingeniously utilized customized prints, pairing specific dogs and colors to artfully represent the essence of each fragrance. This case study explores how Floofs collaborated with our design team to transform their shampoo packaging into an engaging and distinctive showcase of canine-inspired scents.</ExpandableText>
                    </div>
                    {/* <a href="#" @click = "truncate = false" x-show="truncate" x-on: click.prevent = "tab = 'view'" style = "font-weight:bold; font-size:14pt;">See more...</a>
                    <a x-show="!truncate" href="#" @click = "truncate = true" x-on: click.prevent = "tab = 'view'" style = "font-weight:bold; font-size:14pt;">See less</a> */}
                    <img loading="eager" src="images/002_Sketch.jpg" alt="Sketch"></img>
                    <img loading="lazy" src="images/003_ill_all3.jpg" alt="Illustrator all 3"></img>
                    <video className="lazy" autoPlay muted loop playsInline>
                        <source src='images/004_Comp 1_1.mp4' type='video/mp4'></source>
                    </video>
                    <img loading="lazy" src="images/005_Purple_Crop.jpg" alt="Purple Crop"></img>
                    <video className="lazy" autoPlay muted loop playsInline>
                        <source src="images/3_changecolour.mp4" type='video/mp4'></source>
                    </video>
                    <img loading="lazy" src="images/007_dog_Bath_1.jpg" alt="dog bath 1"></img>
                    <img loading="lazy" src="images/008_Teal_Front_Back.jpg" alt="Teal Front Back"></img>
                    <img loading="lazy" src="images/009_dog_bath_2.jpg" alt="dog bath 2"></img>
                    <img loading="lazy" src="images/010Orange_FrontBack.jpg" alt="Orange Front Back"></img>
                    <img loading="lazy" src="images/011_Purp_Front_Back.jpg" alt="Purple Front Back"></img>
                    <video className="lazy" autoPlay muted loop playsInline>
                        <source src="images/012.mp4" type='video/mp4'></source>
                    </video>
                    <img loading="lazy" src="images/floofshoodie.jpg" alt="floofs hoodie"></img>
                    <img loading="lazy" src="images/013_bottles.jpg" alt="bottles"></img>
                </div>


            </div>
            <hr className="solid gap-5"></hr>

            <div className="grid grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">
                <Link href="/toxicknobs">
                    <div>
                        <figure className="inline-block overflow-hidden relative group">
                            <img data-aos="fade-up" className="image" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
                        </figure>
                        <p className="text-2xl font-thin">
                            Packaging design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
                            Toxic Knobs
                        </strong>
                    </div>
                </Link>

                <Link href="/darienzo">
                    <div className=''>
                        <figure className="inline-block overflow-hidden relative group">
                            <img data-aos="fade-up" className="image" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
                        </figure>
                        <p className="text-2xl font-thin">
                            Packaging design / Gift Box Design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
                            Darienzo
                        </strong>
                    </div>
                </Link>
            </div>
        </div >

    );
}
