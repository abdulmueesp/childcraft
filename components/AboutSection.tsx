"use client";

import React from "react";

const AboutSection = () => {
    return (
        <section className="w-full py-16 px-6 sm:px-12 bg-slate-50 relative overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Intro */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#8d3072] uppercase mb-3">Who We Are</h2>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Childcraft Hallmark Publishers
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        To nurture young minds with knowledge, creativity and values through innovative educational resources. We aspire to empower teachers, inspire learners and contribute to build a brighter tomorrow.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                        <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To nurture young minds with knowledge, creativity and values through innovative educational resources. we aspire to empower teachers, inspire learners and contribute to build a brighter tomorrow.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                        <div className="w-16 h-16 mx-auto bg-pink-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To touch every classroom with creativity, care and inspiration. We strive to empower teachers with effective tools and guide students on a joyful journey of discovery — making learning not just a task, but a lifelong adventure.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                        <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We are dedicated to supporting schools, educators, and learners through a range of solutions. These include textbook publishing with support materials for teachers, as well as workshops and training programs.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
