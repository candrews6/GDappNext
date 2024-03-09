import Link from 'next/link';

export default function Page() {
  {/* button(onclick="myFunction()" id="myBtn")="Read more" */ }
  return (<div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 px-5 sm:px-14 py-10 z-0 pointer-events-none" contextMenu="return false">
      <Link href="/floofs">
        <figure className="inline-block overflow-hidden relative group">
          <img data-aos="fade-up" className="image" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
              FLOOFS
            </strong>
            <p className="text-2xl font-thin">
              Packaging Design
            </p>
          </div>
        </figure>
      </Link>
      {/* <figure className="inline-block overflow-hidden relative group"> */}
        <img data-aos="fade-up" src="images/alt3.png" alt='test2'></img>
        <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <strong className="text-2xl relative transition-all duration-300 top-4 group-hover:top-0">
          </strong>
          <p className="text-2xl font-thin">
          </p>
        </div>
      {/* </figure> */}
      <figure className="inline-block overflow-hidden relative group">
        <img data-aos="fade-up" src="images/alt3.png" alt="test3"></img>
      </figure>
      <figure className="inline-block overflow-hidden relative group">
        <img data-aos="fade-up" src="images/alt3.png" alt="test4"></img>
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
