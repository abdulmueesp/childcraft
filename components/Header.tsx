"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [isPhoneCopied, setIsPhoneCopied] = useState(false);
    const pathname = usePathname();

    const handleCopyPhone = () => {
        navigator.clipboard.writeText("+919539272059");
        setIsPhoneCopied(true);
        setTimeout(() => setIsPhoneCopied(false), 2000);
    };
    const menuItems = ['Home', 'About', 'Gallery', 'Contact'];
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
                    <button onClick={() => setIsPhoneModalOpen(true)} className="flex items-center gap-1 group cursor-pointer">
                        <div className="w-4 h-4 rounded-full bg-[#172554] flex items-center justify-center transition-transform group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2.5 text-white">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-semibold text-gray-700 group-hover:text-blue-950 transition-colors">+91 95392 72059</span>
                    </button>
                </div>
                <Link href="/" className="flex items-center gap-4 pl-[3px] sm:pl-[50px] cursor-pointer group">
                    <Image
                        src="/images/logo2.png"
                        alt="Child Craft Logo"
                        width={70}
                        height={70}
                        className="object-contain w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col group-hover:opacity-80 transition-opacity">
                        <h1 className="text-lg sm:text-2xl font-bold tracking-wide text-white italic">CHILD CRAFT</h1>
                        <p className="text-[8px] sm:text-[10px] font-medium tracking-wider text-slate-300 italic">HALLMARK PUBLISHERS (P) LTD</p>
                    </div>
                </Link>

                <nav className="hidden lg:flex">
                    <ul className="flex items-center gap-8 pr-[200px] lg:pr-[280px]">
                        {menuItems.map((item) => {
                            const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = pathname === itemPath;

                            return (
                                <li key={item}>
                                    <Link
                                        href={itemPath}
                                        className={`font-bold uppercase text-sm tracking-wide transition-all ${isActive
                                            ? 'text-white border-b-2 border-white pb-1'
                                            : 'text-white hover:text-white hover:opacity-100 '
                                            }`}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        })}
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
                        {menuItems.map((item) => {
                            const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = pathname === itemPath;

                            return (
                                <li key={item}>
                                    <Link
                                        href={itemPath}
                                        className={`font-bold uppercase text-sm tracking-wide block py-2 border-b transition-colors ${isActive
                                            ? 'text-blue-900 border-blue-900'
                                            : 'text-primary-menus border-gray-100 hover:text-blue-900'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Phone Modal */}
                {isPhoneModalOpen && (
                    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300">
                        <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative text-center transform transition-all scale-100">
                            <button
                                onClick={() => setIsPhoneModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#172554]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-500 mb-6 font-medium">We're here to help! Give us a call at the number below.</p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-50 py-4 px-6 rounded-2xl border border-slate-100 shadow-inner">
                                <span className="text-lg sm:text-xl font-bold text-[#172554] tracking-wider shrink-0">
                                    +91 95392 72059
                                </span>
                                <button
                                    onClick={handleCopyPhone}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 w-full sm:w-auto justify-center ${isPhoneCopied
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-[#172554] text-white hover:bg-blue-900 shadow-md hover:shadow-lg hover:-translate-y-0.5'
                                        }`}
                                >
                                    {isPhoneCopied ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                            </svg>
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;