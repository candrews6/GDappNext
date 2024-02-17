import Link from 'next/link';

export default function Page() {
  {/* button(onclick="myFunction()" id="myBtn")="Read more" */ }
  return (<div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 px-14 py-10" contextMenu="return false">
      <Link href="/floofs">
        {/* <figure className="inline-block overflow-hidden relative group">
          <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 text-2xl opacity-0 group-hover:opacity-100">
          <strong className="relative transition-all duration-300 top-4 group-hover:top-0">
          Here is some text!
          </strong>
          </div>
        </figure> */}
        <img data-aos="fade-up" src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
      </Link>
      <img data-aos="fade-up" src="images/alt3.png" alt='test2'></img>
      <img data-aos="fade-up" src="images/alt3.png" alt="test3"></img>
      <img data-aos="fade-up" src="images/alt3.png" alt="test4"></img>
      <img data-aos="fade-up" src="images/alt3.png" alt="test5"></img>
      <img data-aos="fade-up" src="images/alt3.png" alt="test6"></img>
      <img data-aos="fade-up" src="images/alt3.png" alt="test7"></img>
      <img data-aos="fade-up" src="images/alt3.png" alt="test8"></img>
    </div >
  </div>);
}
