import Link from 'next/link';

export default function Page() {
  {/* button(onclick="myFunction()" id="myBtn")="Read more" */ }
  return (<div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 px-5 sm:px-14 pt-2 pb-10 z-0 pointer-events-none" contextMenu="return false">
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/floofs">
          <img data-aos="fade-up" className="image" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
              FLOOFS
            </strong>
            <p className="text-2xl font-thin">
              Branding,packaging design
            </p>
          </div>
        </Link>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/darienzo">
          <img data-aos="fade-up" className="image" src="images/darienzo/001_3up.jpg" alt='test2'></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
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
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
              B.LABS
            </strong>
            <p className="text-2xl font-thin">
              Branding,packaging design
            </p>
          </div>
        </Link>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <Link href="/toxicknobs">
          <img data-aos="fade-up" src="images/Toxic knobs/home_Page_TK.jpg" alt="test3"></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
              TOXIC KNOBS
            </strong>
            <p className="text-2xl font-thin">
              Packaging design
            </p>
          </div>
        </Link>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <img data-aos="fade-up" src="images/alt3.png" alt="test5"></img>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <img data-aos="fade-up" src="images/alt3.png" alt="test6"></img>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <img data-aos="fade-up" src="images/alt3.png" alt="test7"></img>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <img data-aos="fade-up" src="images/alt3.png" alt="test8"></img>
      </figure>
    </div >
  </div>);
}
