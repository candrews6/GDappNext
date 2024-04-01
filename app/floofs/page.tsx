'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';
// import { Inter, Roboto_Mono, Roboto } from 'next/font/google'


// const roboto = Roboto({
//     weight: '400',
//     subsets: ['latin'],
// })

// const ExpandableText = ({ descriptionLength }) => {
//     const fullText = 'The challenge was to create a versatile packaging solution for dog shampoo, with each variant featuring a distinct scent. To keep production costs down I designed a bottle shape that would suit multiple dog illustrations of recognisable dog breeds, paired with colours to capture the essence and personality of each fragrance. \n\nThrough a blend of colour, typography, and illustration, I aimed to create a vibrant and playful appearance that extended the brand’s identity, making it appealing to consumers and easily recognisable on the shelves.';

//     // Set the initial state of the text to be collapsed
//     const [isExpanded, setIsExpanded] = useState(false);

//     // This function is called when the read more/less button is clicked
//     const toggleText = () => {
//         setIsExpanded(!isExpanded);
//     };

//     return (
//         <div className='text w-full sm:w-1/2'>
//             {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}..`}
//             <pre>
//                 <span onClick={toggleText} className='toggle-button'>
//                     {isExpanded ? 'See less' : 'See more...'}
//                 </span>
//             </pre>
//         </div>
//     );
// };

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <p className="text-left text-4xl py-2 sm:py-0" style={{ fontWeight: "bold" }}>FLOOFS - Bottle design</p>
                    <p className="text-left text-2xl py-2 sm:py-0" style={{ fontWeight: "bold" }} > A range of dog shampoo bottle designs for FLOOFS</p>
                    <h6 className='w-full sm:w-1/2 py-2 sm:py-0 text-gray-500'> Packaging(Bottle Design), Art Direction Illustration, Print Design, Typography</h6 >
                </div>
                <div className='my-4 roboto.className' style={{ whiteSpace: 'pre-wrap', fontFamily: 'Roboto' }}>
                    <div className='text w-full sm:w-1/2'>
                        The challenge was to create a versatile packaging solution for dog shampoo, with each variant featuring a distinct scent. To keep production costs down I designed a bottle shape that would suit multiple dog illustrations of recognisable dog breeds, paired with colours to capture the essence and personality of each fragrance.
                        <br />
                        <br />
                        Through a blend of colour, typography, and illustration, I aimed to create a vibrant and playful appearance that extended the brand’s identity, making it appealing to consumers and easily recognisable on the shelves.
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/001_all3_Header.jpg" alt="All 3 Header"></img>
                    {/* <h6 className="" style={{ width: "50%" }}></h6> */}
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
            </div>
        </div >

    );
}
