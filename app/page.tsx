export default function Page() {
  return (<div><h5 className="px-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </h5>
    {/* span(id="dots")="..." */}
    <span id="more">in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    {/* button(onclick="myFunction()" id="myBtn")="Read more" */}
    <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 gap-0 px-14" contextMenu="return false">
      <a href="/floofs">
        <img src="images/HomepageHeaderImage.jpg" alt='Header image'></img>
      </a>
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
