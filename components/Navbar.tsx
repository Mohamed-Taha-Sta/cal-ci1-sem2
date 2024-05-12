"use client"
import Link from "next/link";
import React, {useState} from 'react';
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(`${pathname === '/' ? 'calculate' : 'leaderboard'}`);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <div className={"flex justify-between pt-5 pb-5 lg:pt-1 lg:pb-3"}>
            <h1 className={"font-bold font-mono text-xl pt-0.5 ps-6"}>Hello Engineers!</h1>
            {/* Desktop*/}
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
            {/*    Mobile*/}
            <div className={"sm:hidden flex pe-6"}>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className={"rounded text-black ps-2 font-extrabold text-2xl invert"}>☰</div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            <Link href='/' className='flex flex-center pe-3'>
                                <p className={`hover:text-black hover:bg-white rounded-lg p-2 transition-all ${activeLink === 'calculate' ? 'text-black bg-white' : ''}`}
                                   onClick={() => setActiveLink('calculate')}>
                                    Calculate
                                </p>
                            </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuLabel>
                            <Link href='/leaderboard' className='flex flex-center'>
                                <p className={`hover:text-black hover:bg-white rounded-lg p-2 transition-all ${activeLink === 'leaderboard' ? 'text-black bg-white' : ''}`}
                                   onClick={() => setActiveLink('leaderboard')}
                                >Leaderboard</p>
                            </Link>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </div>
    );
};

export default Navbar;