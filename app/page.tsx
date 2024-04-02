import Link from 'next/link';

export default function Page() {
  {/* button(onclick="myFunction()" id="myBtn")="Read more" */ }
  return (<div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 px-5 sm:px-14 pt-2 pb-10 z-0 pointer-events-none" contextMenu="return false">
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/floofs">
          <img data-aos="fade-up" className="image" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0 text-center">
              FLOOFS
            </strong>
            <p className="text-2xl font-thin text-center">
              Branding,packaging design
            </p>
          </div>
        </Link>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/darienzo">
          <img data-aos="fade-up" className="image" src="images/darienzo/001_3up.jpg" alt='test2'></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0 text-center">
              DARIENZO
            </strong>
            <p className="text-2xl font-thin text-center">
              Packaging design<br />(bottles and skin care kit)
            </p>
          </div>
        </Link>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/blabs">
          <img data-aos="fade-up" src="images/blabs/B_labs_homeimage.jpg" alt="test4"></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0 text-center">
              B.LABS
            </strong>
            <p className="text-2xl font-thin text-center">
              Branding,packaging design
            </p>
          </div>
        </Link>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/nonnas">
          <img data-aos="fade-up" src="images/nonnas/001_group_Nonnas.jpg" alt="nonnas"></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0 text-center">
              NONNAS
            </strong>
            <p className="text-2xl font-thin text-center">
              Packaging design for pasta kit
            </p>
          </div>
        </Link>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/thermofisher">
          <img data-aos="fade-up" src="images/thermofisher/Thermofisher_scientific_Home_Image.jpg" alt="thermofisher"></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0 text-center">
              THERMOFISHER
            </strong>
            <p className="text-2xl font-thin text-center">
              Cardboard model replicas
            </p>
          </div>
        </Link>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/toxicknobs">
          <img data-aos="fade-up" src="images/Toxic knobs/home_Page_TK.jpg" alt="test3"></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0 text-center">
              TOXIC KNOBS
            </strong>
            <p className="text-2xl font-thin text-center">
              Packaging design
            </p>
          </div>
        </Link>
      </figure>

      {/* <figure className="inline-block overflow-hidden relative group">
        <img data-aos="fade-up" src="images/alt3.png" alt="test7"></img>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <img data-aos="fade-up" src="images/alt3.png" alt="test8"></img>
      </figure> */}
    </div >
  </div>);
}
