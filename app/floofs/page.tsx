export default function Page() {
    return (
        <div>
            <div className="py-10 ml-10 px-4" style={{ display: "grid" }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto" }} className="">
                    <p className="text-left text-4xl pr-40" style={{ fontWeight: "bold" }}>FLOOFS - Bottle design</p>
                    <p className="text-left text-2xl" style={{ width: "60%", fontWeight: "bold" }} > A range of dog shampoo bottle designs for FLOOFS</p>
                    < h6 style={{ width: "50%" }}> Packaging(Bottle Design), Art Direction Illustration, Print Design, Typography</h6 >
                </div >
                <div className="grid grid-cols-1 gap-0 px-14 gap-y-5 pt-20" contextMenu="return false">
                    <img loading="eager" src="images/001_all3_Header.jpg" alt="All 3 Header"></img>
                    <h6 className="mb-20" style={{ width: "50%" }}
                    <p x-data="{truncate: true }">Floofs, a prominent dog grooming company, embarked on a quest to redefine its shampoo range’s packaging design. With each variant boasting a distinct scent, the challenge was to craft a design that not only differentiated each bottle but also infused them with unique personalities.</p>
                    <span x-show="!truncate">The design approach ingeniously utilized customized prints, pairing specific dogs and colors to artfully represent the essence of each fragrance. This case study explores how Floofs collaborated with our design team to transform their shampoo packaging into an engaging and distinctive showcase of canine-inspired scents.</span>
                    <a href="#" @click = "truncate = false" x-show="truncate" x-on: click.prevent = "tab = 'view'" style = "font-weight:bold; font-size:14pt;">See more...</a>
                <a x-show="!truncate" href="#" @click = "truncate = true" x-on: click.prevent = "tab = 'view'" style = "font-weight:bold; font-size:14pt;">See less</a>
            <img loading="eager" src="images/002_Sketch.jpg" alt="Sketch"></img>
            <img loading="lazy" src="images/003_ill_all3.jpg" alt="Illustrator all 3"></img>
            <video className="lazy" autoplay, muted, loop, playsinline src='images/004_Comp 1_1.mp4' type='video/mp4'>
            <img loading="lazy" src="images/005_Purple_Crop.jpg" alt="Purple Crop"></img>
            <video className="lazy" autoplay, muted, loop, playsinline src = "images/3_changecolour.mp4" alt = "Change Colour">
            <img loading="lazy" src="images/007_dog_Bath_1.jpg" alt="dog bath 1"></img>
            <img loading="lazy" src="images/008_Teal_Front_Back.jpg" alt="Teal Front Back"></img>
            <img loading="lazy" src="images/009_dog_bath_2.jpg" alt="dog bath 2"></img>
            <img loading="lazy" src="images/010Orange_FrontBack.jpg" alt="Orange Front Back"></img>
            <img loading="lazy" src="images/011_Purp_Front_Back.jpg" alt="Purple Front Back"></img>
            <video className="lazy" autoplay, muted, loop, playsinline src = "images/012.mp4" alt = "12">
            <img loading="lazy" src="images/floofshoodie.jpg" alt="floofs hoodie"></img>
            <img loading="lazy" src="images/013_bottles.jpg" alt="bottles"></img>
        </div>
        </div >
    );
}
