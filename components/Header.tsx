"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuItems = ['Home', 'About', 'Collection', 'Gallery', 'Contact'];
    // bg-[#8d3072]
    return (
        <>

            <header className="sticky top-0 z-50 w-full h-[80px] flex justify-between items-center px-3 sm:px-8 bg-linear-to-r from-blue-900 via-blue-950 to-slate-900 shadow-sm">
                <div
                    className="absolute top-0 right-0 h-6 bg-white px-4 pl-8 hidden lg:flex items-center gap-4 shadow-sm z-10"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20px 100%)' }}
                >
                    <a href="mailto:info@childcraftbooks.com" className="flex items-center gap-1 group cursor-pointer">
                        <div className="w-4 h-4 rounded-full bg-[#172554] flex items-center justify-center transition-transform group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-2.5 text-white">
                                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-semibold text-gray-700 group-hover:text-blue-950 transition-colors">info@childcraftbooks.com</span>
                    </a>
                    <a href="tel:+919539272059" className="flex items-center gap-1 group cursor-pointer">
                        <div className="w-4 h-4 rounded-full bg-[#172554] flex items-center justify-center transition-transform group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2.5 text-white">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-semibold text-gray-700 group-hover:text-blue-950 transition-colors">+91 95392 72059</span>
                    </a>
                </div>
                <div className="flex items-center gap-4 pl-[3px] sm:pl-[50px]">
                    <Image
                        src="/images/logo2.png"
                        alt="Child Craft Logo"
                        width={70}
                        height={70}
                        className="object-contain w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-lg sm:text-2xl font-bold tracking-wide text-white italic">CHILD CRAFT</h1>
                        <p className="text-[8px] sm:text-[10px] font-medium tracking-wider text-slate-300 italic">HALLMARK PUBLISHERS (P) LTD</p>
                    </div>
                </div>

                <nav className="hidden lg:flex">
                    <ul className="flex items-center gap-8 pr-[200px] lg:pr-[280px]">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-white font-bold uppercase text-sm tracking-wide hover:opacity-80 transition-opacity"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white mr-4 z-20 relative w-8 h-8 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-8 absolute transition-all duration-700 ease-in-out transform ${isMobileMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                            }`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-8 absolute transition-all duration-700 ease-in-out transform ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
                            }`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`absolute top-[80px] left-0 w-full bg-white shadow-lg lg:hidden z-20 border-t border-gray-100 overflow-hidden transition-all duration-1100 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <ul className="flex flex-col py-4 px-6 gap-4">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-primary-menus font-bold uppercase text-sm tracking-wide block py-2 border-b border-gray-100 hover:text-blue-900 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;