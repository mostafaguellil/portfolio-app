import React from 'react';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="py-2">
                <div className="bg-white mx-auto max-w-screen-sm flex items-center gap-12 px-3 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-md">
                    {/* Logo/Title */}
                    <a href="#" className="text-base font-medium cursor-pointer">
                        Mostafa GUELLIL
                    </a>

                    {/* Navigation List */}
                    <ul className="font-medium flex space-x-2 items-center">
                        <li>
                            <a href="#about" className="cursor-pointer text-sm">About Me</a>
                        </li>
                        <li>
                            <a href="#qualifications" className="cursor-pointer text-sm">Qualifications</a>
                        </li>
                        <li>
                            <a href="#experience" className="cursor-pointer text-sm">Experience</a>
                        </li>
                        <a
                            href="https://github.com/mostafaguellil"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-slate-700 bg-[#0f172a]">
                                Contact Me
                            </button>
                        </a>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
