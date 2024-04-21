'use client'
import { useState } from 'react';
// import $ from 'jquery';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-0">
                    <p className="text-left text-4xl py-2 sm:py-0" style={{ fontWeight: "bold" }}>Magick Makers packaging design</p>
                    <div className="text-left text-2xl py-2 sm:py-0 sm:px-8"><span className="text-xl" style={{ fontWeight: "600" }}>Brief:</span><span className="text-xl" style={{ fontWeight: "Normal" }}> To design a bottle and box design for Magick Makers new Perfume</span></div>
                    <h6 className='w-full sm:w-1/2 py-2 sm:py-0 sm:pt-6 text-gray-500'>Bottle and box design</h6 >
                </div>
                <div className='mt-4' style={{ whiteSpace: 'pre-wrap', fontFamily: 'Roboto' }}>
                    <div className='text w-full sm:w-1/2'>
                        Organic natural skincare and perfume business, Magick Makers required a bottle and packaging design for their new fragrance “Enchanted Forest”.
                        <br />
                        <br />
                        The emphasis on organic ingredients and the incorporation of both witchcraft and ethereal aesthetics add depth and uniqueness to the brand's identity.
                        <br />
                        <br />
                        Working with the brand guidelines incorporating the witchcraft and ethereal aesthetic I designed a few bottle designs. These ranged from old “elixir” style bottles to the cauldron the client chose.
                        <br />
                        <br />
                        I designed a cauldron shape for the bottle, as it not only aligns perfectly with the brand's themes but also evokes the imagery of potion-making and the careful selection of ingredients to create some “magick”.
                        <br />
                        <br />
                        It was important to ensure that the packaging design compliments the bottle design while staying true to the brand's guidelines. This includes considerations such as colour schemes, typography, and textures that further enhance the mystical atmosphere of the product.
                        <br />
                        <br />
                        The box features embossed foil logos with with a textured print that combines the magic with the rough and rawness of the ingredients.
                        <br />
                        <br />
                        The unique bottle shape and packaging was designed to captivate and resonate with Magick Makers' target audience.

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-5" contextMenu="false">
                    <img loading="eager" src="images/magickmakers/001_Box_bottle.jpg" alt="box bottle"></img>
                    <img loading="eager" src="images/magickmakers/002_MMSketch.jpg" alt="mm sketch"></img>
                    <img loading="lazy" src="images/magickmakers/003_bottle_1.jpg" alt="bottle 1"></img>
                    <img loading="lazy" src="images/magickmakers/004_bottle_2.jpg" alt="bottle 2"></img>
                    <img loading="lazy" src="images/magickmakers/005_2x_bottles.jpg" alt="2x bottles"></img>
                    <img loading="lazy" src="images/magickmakers/006_Box1.jpg" alt="box 1"></img>
                    <img loading="lazy" src="images/magickmakers/007_Box2.jpg" alt="box 2"></img>
                    <img loading="lazy" src="images/magickmakers/008_Box_bottle_3x.jpg" alt="box bottle"></img>
                    <img loading="lazy" src="images/magickmakers/009_billboardmm.jpg" alt="billboard"></img>
                </div>


            </div>
            <hr style={{ height: "1px", border: "1px solid" }} className="gap-5 border-slate-400 text-slate-400"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 z-0 pointer-events-none" contextMenu="return false">


                <Link href="/howdens">
                    <div>
                        <img data-aos="fade-up" className="image" src="images/howdens/001_group_1.jpg" alt='howdens'></img>
                        <p className="text-2xl font-thin">
                            Packaging design
                        </p>
                        <strong className="text-2xl relative transition-all duration-300 top-1 group-hover:top-0">
                            Howdens
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
