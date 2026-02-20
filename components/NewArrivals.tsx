"use client";

import React from "react";
import Image from "next/image";

const NewArrivals = () => {
    const books = [
        {
            id: 1,
            title: "Std 1 Hindi",
            image: "/images/bookscover/std1hindi.jpeg",
        },
        {
            id: 2,
            title: "Std 1 Term 1",
            image: "/images/bookscover/std1term1.jpeg",
        },
        {
            id: 3,
            title: "Std 2 Semester 2",
            image: "/images/bookscover/std2sem2.jpeg",
        },
        {
            id: 4,
            title: "Std 2 Term 2",
            image: "/images/bookscover/std2term2.jpeg",
        },
        {
            id: 5,
            title: "Std 3 Hindi",
            image: "/images/bookscover/std3hindi.jpeg",
        },
        {
            id: 6,
            title: "Std 3 Semester 2",
            image: "/images/bookscover/std3sem2.jpeg",
        },
        {
            id: 7,
            title: "Std 3 Term 1",
            image: "/images/bookscover/std3term1.jpeg",
        },
        {
            id: 8,
            title: "Std 4 Term 2",
            image: "/images/bookscover/std4term2.jpeg",
        },
    ];

    return (
        <section className="w-full py-20 lg:mt-10 bg-linear-to-b from-white to-gray-50 overflow-hidden">
            <style jsx>{`
                .book-container {
                    perspective: 1000px;
                }
                
                @keyframes float {
                    0%, 100% { transform: rotateY(-30deg); }
                    50% { transform: rotateY(-10deg); }
                }

                .book {
                    transform-style: preserve-3d;
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
                        New <span className="text-[#8d3072]">Arrivals</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        Discover our latest collection designed to inspire young minds.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 lg:gap-x-16 lg:gap-y-32 justify-items-center">
                    {books.map((book) => (
                        <div key={book.id} className="book-container w-36 h-48 md:w-44 md:h-64 relative group cursor-pointer z-10 transition-all duration-300">

                            {/* The 3D Book */}
                            <div className="book w-full h-full relative shadow-2xl">

                                {/* Front Cover */}
                                <div className="absolute inset-0 z-20 bg-white  overflow-hidden backface-hidden shadow-md">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    />
                                    {/* Lustre/Sheen effect */}
                                    <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
                                    <div className="absolute inset-y-0 left-0 w-2 bg-linear-to-r from-black/20 to-transparent"></div>
                                </div>

                                {/* Pages (Right Side Thickness) */}
                                <div className="absolute top-1 bottom-1 right-0 w-[28px] bg-white z-10 origin-right transform -rotate-y-90"></div>

                                {/* Back Cover (visible when rotating, if we allowed full rotation, but for now acting as depth) */}
                                <div className="absolute inset-0 bg-gray-900 transform translate-z-[-30px] rounded-l-md shadow-lg border border-gray-800"></div>

                                {/* Bottom Shadow to ground it */}
                                <div className="absolute -bottom-8 left-4 right-4 h-4 bg-black/20 blur-xl rounded-full transform rotateX(90deg)"></div>

                            </div>

                            {/* Title below book */}
                            <div className="mt-8 text-center opacity-100 transition-all duration-300 w-[140%] -ml-[20%]">
                                <h3 className="text-gray-800 font-semibold text-lg leading-tight">{book.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;

