import React from "react";

const Navbar = () => {
    return (
        <header className="bg-gray-800 text-white py-4"> {/* Header section */}
            <div className="container mx-auto px-4 flex justify-between items-center"> {/* Container with flex layout */}
                <h1 className="text-lg font-semibold">ECO EATS</h1> {/* Site title */}
                {/* Navigation section */}
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li> {/* Home link */}
                    </ul>
                </nav>
                {/* End Navigation */}
            </div>
        </header>
    );
};

export default Navbar;
