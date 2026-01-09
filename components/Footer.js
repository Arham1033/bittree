import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='pt-10 pb-1 last-section'>
    <div className="bg-gray-300 pb-10 rounded-xl mx-auto w-[85%]">

<div className="flex lg:flex-row justify-around flex-col mx-3">

<div className="flex flex-col gap-3">
<p className="text-xl font-semibold mt-8 mb-2">Company</p>
<div className="flex flex-col text-gray-700 gap-2">
<span className="hover:cursor-pointer">The linktree Blog</span>
<span className="hover:cursor-pointer">Enginner Blog</span>
<span className="hover:cursor-pointer">About</span>
<span className="hover:cursor-pointer">About Us</span>
<span className="hover:cursor-pointer">Our Story</span>
<span className="hover:cursor-pointer">Press</span>
<span className="hover:cursor-pointer">Links</span>
<span className="hover:cursor-pointer">Thoughts</span>
<span className="hover:cursor-pointer">Projects</span>
<span className="hover:cursor-pointer">Partners</span>
</div>
</div>

<div className="flex flex-col gap-3">
<p className="text-xl font-semibold mt-8 mb-2">Community</p>
<div className="flex flex-col text-gray-700 gap-2">
<span className="hover:cursor-pointer">Creators</span>
<span className="hover:cursor-pointer">Forums</span>
<span className="hover:cursor-pointer">Community</span>
<span className="hover:cursor-pointer">Events</span>
<span className="hover:cursor-pointer">Feedback</span>
<span className="hover:cursor-pointer">Discord</span>
</div>
</div>

<div className="flex flex-col gap-3">
<p className="text-xl font-semibold mt-8 mb-2">Support</p>
<div className="flex flex-col text-gray-700 gap-2">
<span className="hover:cursor-pointer">Help</span>
<span className="hover:cursor-pointer">Help Center</span>
<span className="hover:cursor-pointer">FAQs</span>
<span className="hover:cursor-pointer">Status</span>
<span className="hover:cursor-pointer">Documentation</span>
<span className="hover:cursor-pointer">Customer Support</span>
</div>
</div>

<div className="flex flex-col gap-3">
<p className="text-xl font-semibold mt-8 mb-2">Trust & Legal</p>
<div className="flex flex-col text-gray-700 gap-2">
<span className="hover:cursor-pointer">Privacy</span>
<span className="hover:cursor-pointer">Terms</span>
<span className="hover:cursor-pointer">Legal</span>
<span className="hover:cursor-pointer">Cookies</span>
<span className="hover:cursor-pointer">Security</span>
<span className="hover:cursor-pointer">Cookie Preference</span>
<span className="hover:cursor-pointer">Learning</span>
<span className="hover:cursor-pointer">Guides</span>
</div>
</div>
</div>

<div className="flex lg:flex-row flex-col justify-between w-[98%] gap-4 mt-8 mx-auto lg:w-[90%] ">

  <div className="flex gap-2 justify-center items-center">
    <Link href={"/generate"}>
  <button className="bg-gray-400 p-4 px-6 rounded-lg font-semibold hover:bg-gray-500 cursor-pointer transition-all ease-in-out duration-200">Login</button>
    </Link>
  <Link href={"/generate"}>
  <button className="rounded-full bg-lime-400 p-4 px-6 font-semibold hover:cursor-pointer hover:bg-lime-500 text-black transition-all ease-in-out duration-200">Get Started for Free</button>
  </Link>
  </div>


<div className="flex gap-2 flex-col lg:flex-row">

  <div className='flex gap-2 justify-center'>
  <button className="bg-black flex text-white font-semibold rounded-full p-4 px-4 gap-2 cursor-pointer items-center">
  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imgrendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
viewBox="0 0 466 511.98">
 <g id="Layer_x0020_1">
  <path fill="#EA4335" fillRule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
  <path fill="#FBBC04" fillRule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>
  <path fill="#34A853" fillRule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>
  <path fill="#4285F4" fillRule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
 </g>
</svg>
  Play Store
  </button>

<button className="bg-black flex text-white font-semibold rounded-full p-4 px-4 gap-2 cursor-pointer items-center">
  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-apple h-6" viewBox="0 0 16 16">
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
</svg>
 Apple Store
</button>
  </div>

<div className='flex gap-2 justify-center'>
<div className="bg-black rounded-full flex items-center cursor-pointer">
<img className=" invert-100 h-10 p-2 lg:p-1 lg:px-3" src="/linktree.webp" alt="linktree" />
</div>

<div className="bg-black rounded-full flex items-center cursor-pointer">
<img className=" h-10 p-2 lg:p-1 lg:px-3" src="/threads.webp" alt="threads" />
</div>

<div className="bg-black rounded-full flex items-center cursor-pointer">
<img className=" h-10 p-2 lg:p-1 lg:px-3" src="/tiktok.webp" alt="tiktok" />
</div>

<div className="bg-black rounded-full flex items-center cursor-pointer">
<img className="invert-100 h-10 p-2 lg:p-1 lg:px-3" src="/insta.png" alt="instagram" />
</div>
</div>


</div>



</div>
</div>

<div className="my-10 flex gap-3 justify-center">
<img className="h-20 rounded-md" src="/pak.webp" alt="pakistan" />
<img className="h-20 rounded-md" src="/japan.webp" alt="japan" />
</div>
<div className="my-5">
  <p className="font-semibold text-lg text-gray-800 text-center lg:px-20 px-4">
  We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville St, Collingwood VIC 3066
  </p>
  </div>
    </div>
    </>
  )
}

export default Footer
