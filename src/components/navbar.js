import React, { Component, useState  } from 'react';

const Navbar = () => {
    const [hamburger, sethamburger] = useState(false);
   
    return ( <header className='w-full font-sans tracking-tight font-semibold h-fit overflow-hidden'>
       <nav className='sm:ml-10 md:ml-20 px-4 justify-between bg-white-500 md:flex border-solid border-b-2 divide-slate-200 '>
        <div className='[font-size:35px] flex justify-between font-bold py-2 '>
            <a >Justarpaan<a className='ml-0.5 text-red-500'>.</a></a>
            <p className={hamburger ? 'md:hidden my-auto text-center fa fa-close  ' : 'md:hidden my-auto text-center fa fa-bars '} onClick={()=>{
                
                hamburger ? sethamburger(false) : sethamburger(true)
            }}></p>
        </div>
        <div className={hamburger ? 'text-xl md:text-m text-center md:flex block' : 'text-m hidden text-center md:flex '} >
            <ul className="my-auto text-center md:flex">   
                <li className=''>
                <a className='mx-auto border-b md:border-0 md:pb-0 pb-2 block my-2 md:ml-8 tracking-tight '>Home</a>
                </li>
                <li>
                <a className='mx-auto border-b md:border-0 md:pb-0 pb-2 block my-2 md:ml-8 tracking-tight '>About</a>
                </li>
                <li>
                <a className='mx-auto border-b md:border-0 md:pb-0 pb-2 block my-2 md:ml-8 tracking-tight '>Projects</a>
                </li>
                <li>
                <a className='mx-auto border-b md:border-0 md:pb-0 pb-2 block my-2 md:ml-8 tracking-tight '>Contact</a>
                </li>
            </ul>
            <button className=' px-3 py-1 mx-auto  my-2 md:my-auto border-solid border-black border-2 text-m md:ml-8 tracking-tight '><a href="mailto: arpandas.dev@gmail.com">Let's chat</a></button>
        </div>
       </nav>
    </header> );
}
 
export default Navbar;