import React, { Component } from 'react';

const HomeSection = () => {
    return ( 
        <section className='w-full'>
            <div className='p-5 pt-20 text-center md:text-start sm:px-8 sm:pt-6 md:px-20 md:pt-16' >
                <div className='sm:flex md:flex-row'>
                    <div className='sm:w-auto md:flex-1 w-full' >
                        <h1 className='text-[3.5rem] md:text-[4rem] font-extrabold tracking-tight leading-[4.5rem]'>Hy! I Am <br /> Arpan D.</h1>
                        <h2 className='mt-10 text-2xl font-semibold'>And I Will Help You Develop and Deploy Your Web And Mobile App feasibly</h2>
                        <div className='mt-10'>
                            <button className=' px-6 py-2.5 text-white text-sm border-solid border-[#fe491d] border-2 bg-[#fe491d] text-m mr-4 tracking-tight '>Hire Me</button>
                            {/* <button className=' px-2 py-2.5  text-sm font-bold text-m  tracking-tight '>Project's</button> */}
                        </div>
                    </div>
                {/* Image goes here */}
                </div>
                <div className='mt-10 flex ml-auto '>
                    <img className='w-3/12 sm:w-40 md:w-44 mx-auto' src="assets/upwork.svg" />
                    <img className='w-3/12 sm:w-40 md:w-44 mx-auto' src="assets/fiverr.svg" />
                    <img className='w-3/12 sm:w-40 md:w-44 mx-auto' src="assets/freelancer.svg" />
                </div>
            </div> 
        </section>
     );
}
 

export default HomeSection;