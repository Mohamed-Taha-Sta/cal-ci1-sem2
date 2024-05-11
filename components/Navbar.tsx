"use client"
import Link from "next/link";
import React, {useState} from 'react';


const Navbar = () => {
    const [activeLink, setActiveLink] = useState('calculate');


    return (
        <div className={"flex justify-between pt-3 pb-3"}>
            <h1 className={"font-bold font-mono text-xl pt-0.5"}>Hello Engineers!</h1>
            <div className={"sm:flex hidden px-2"}>
                <Link href='/' className='flex flex-center pe-3'>
                    <p className={`hover:text-black hover:bg-white rounded-lg p-2 transition-all ${activeLink === 'calculate' ? 'text-black bg-white' : ''}`}
                       onClick={() => setActiveLink('calculate')}>
                        Calculate Average
                    </p>
                </Link>
                <Link href='/leaderboard' className='flex flex-center'>
                    <p className={`hover:text-black hover:bg-white rounded-lg p-2 transition-all ${activeLink === 'leaderboard' ? 'text-black bg-white' : ''}`}
                        onClick={() => setActiveLink('leaderboard')}
                    >Leaderboard</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;