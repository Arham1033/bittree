"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathName = usePathname()
  const showNavbar = ["/", "/generate", "/templates", "/products", "/marketplace", "/pricing", "/learn"].includes(pathName)

  return (
   
  <> {showNavbar && <nav className='bg-yellow-200  lg:w-[90vw] w-full lg:top-10 top-0 lg:right-[5vw] lg:rounded-full fixed z-10'>

   <div className='flex justify-between'>
    <div className="logo lg-p-0 p-3 flex gap-6 lg:gap-13 items-center lg:pt-3 pt-2 ">
      <Link href={"/"}>
       <img loading="eager" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WJp9SdLazDQui3AKfpWbyO3KX2IfBe7Pzg&s" alt="" className="nav-desktop-logo lg:ml-5 h-12 rounded-2xl cursor-pointer"></img>
      </Link>
        <ul className='md:flex lg:gap-3 gap-2 hidden'>
            <Link href={"/templates"}><li className='hover:cursor-pointer hover:bg-gray-100 rounded-lg lg:p-2 transition-all ease-in-out duration-200 p-1'>Templates</li></Link>
            <Link href={"/products"}><li className='hover:cursor-pointer hover:bg-gray-200 rounded-lg p-1 lg:p-2 transition-all ease-in-out duration-200'>Products</li></Link>
            <Link href={"/marketplace"}><li className='hover:cursor-pointer hover:bg-gray-200 rounded-lg lg:p-2 transition-all ease-in-out duration-200 p-1'>Marketplace</li></Link>
            <Link href={"/pricing"}><li className='hover:cursor-pointer hover:bg-gray-200 rounded-lg lg:p-2 transition-all ease-in-out duration-200 p-1'>Pricing</li></Link>
            <Link href={"/learn"}><li className='hover:cursor-pointer hover:bg-gray-200 rounded-lg  transition-all ease-in-out duration-200 lg:p-2 p-1'>Learn</li></Link>
        </ul>
    </div>
    <div className='flex lg:ml-0 ml-3 gap-3 p-4 font-semibold justify-end items-center'>
        <div className="login bg-gray-200 p-3 hover:cursor-pointer hover:bg-gray-300 rounded-lg transition-all ease-in-out duration-200">Login</div>
        <div className="signup rounded-full p-3 bg-gray-900 text-white hover:cursor-pointer hover:bg-gray-800 transition-all ease-in-out duration-200">Signup</div>
    </div>
   </div>
    <ul className='flex gap-3 md:gap-3 md:hidden justify-around lg:text-md text-sm items-center px-2 pb-3'>
            <Link href={"/templates"}><li className='hover:cursor-pointer hover:bg-gray-100 rounded-lg lg:p-2 transition-all ease-in-out duration-200 p-1'>Templates</li></Link>
            <Link href={"/products"}><li className='hover:cursor-pointer hover:bg-gray-200 rounded-lg p-1 lg:p-2 transition-all ease-in-out duration-200'>Products</li></Link>
            <Link href={"/marketplace"}><li className='hover:cursor-pointer hover:bg-gray-200 rounded-lg lg:p-2 transition-all ease-in-out duration-200 p-1'>Marketplace</li></Link>
            <Link href={"/pricing"}><li className='hover:cursor-pointer hover:bg-gray-200 rounded-lg lg:p-2 transition-all ease-in-out duration-200 p-1'>Pricing</li></Link>
            <Link href={"/learn"}><li className='hover:cursor-pointer hover:bg-gray-200 rounded-lg  transition-all ease-in-out duration-200 lg:p-2 p-1'>Learn</li></Link>
        </ul>

   </nav>
   }
   </>
  )
}

export default Navbar
