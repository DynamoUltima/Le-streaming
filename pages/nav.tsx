import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react'


interface NavProps {

}

const Nav = () => {

    let Links = [{ name: "Home", link: "/" }, { name: "Events", link: "/" }, { name: "Who are we", link: "/" }, { name: "Give", link: "/" }];

    let [open, setOpen] = useState(false);
    return (

        <div className="shadow-sm w-full fixed top-0 left-0 z-10">


            <div className="md:flex items-center justify-between  bg-black py-4 md:px-10  ">
                {/* <div className='flex items-center font-bold text-2xl cursor-pointer text-gray-800'>
                    <span >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    </span>
                    Designer
                </div> */}

                <Image src={'/LE-LOGO-White.png'} alt="logo" width="150" height={'60'}  className='md:px-2'/>

                <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 md:hidden'>
                    {open ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>}


                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:justify-center md:z-auto z-[-1] left-0 
                w-full md:w-auto md:pl-0 pl-9 transition-all duration-500  ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
{/* md:24 mr-48 */}
                   <div className='md:flex md:space-x-20 mr-10'>
                   {Links.map((link) => (
                            <li key={link.link} className="md:ml-8 text-base text-white  md:my-0 my-7">
                                <a href={link.link}>{link.name}</a>
                            </li>

                        ))}
                   </div>
                        


                        <div className=' '>
                            <span className=' px-2 py-2 md:ml-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </span>
                        </div>


                




                </ul>









            </div>
        </div>

    );
}

export default Nav
