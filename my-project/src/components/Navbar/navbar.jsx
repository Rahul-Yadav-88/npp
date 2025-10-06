import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileDropdown = () => setIsMobileDropdownOpen(!isMobileDropdownOpen);

  // ✅ Close mobile menu function
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  // ✅ Close desktop dropdown function
  const closeDesktopDropdown = () => {
    setIsDropdownOpen(false);
  };

  // ✅ Desktop-only outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth >= 1024 && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = [
    { name: "Pharma Dry syrup Bottles", path: "/products/1" },
    { name: "Measuring Spoons", path: "/products/2" },
    { name: "Lotion Bottles", path: "/products/3" },
    { name: "Hand wash Bottles", path: "/products/4" },
    { name: "Eye-Ear Dropper Bottle", path: "/products/5" },
    { name: "Flip-off Seals", path: "/products/6" },
    { name: "RoPP Caps for Pharma PET Bottles", path: "/products/7" },
    { name: "ToiletCleaner", path: "/products/8" },
    { name: "Cream Jars", path: "/products/9" },
    { name: "Shampoo Bottles", path: "/products/10" },
    { name: "Oil Bottles", path: "/products/11" },
    { name: "Floor cleaner bottles", path: "/products/12" },
    { name: "Pharmaceutical Rubber Dropper Assembly", path: "/products/13" },
    { name: "Stopper CAM Lock fittings for Cold rooms PUF Panels", path: "/products/14" },
    { name: "Churan Bottle Set", path: "/products/15" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 font-medium transition-colors duration-200 hover:text-[#2592AD]">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 font-medium transition-colors duration-200 hover:text-[#2592AD]">
              About Us
            </Link>

            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 font-medium transition-colors duration-200 hover:text-[#2592AD]"
              >
                Comprehensive Product Range
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-80 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                  {categories.map((cat, index) =>
                    cat.disabled ? (
                      <div key={index} className="px-4 py-2 text-gray-400 cursor-not-allowed text-sm font-semibold">
                        {cat.name}
                      </div>
                    ) : (
                      <Link 
                        key={index} 
                        to={cat.path} 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-semibold transition-colors duration-200"
                        onClick={closeDesktopDropdown}
                      >
                        {cat.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMobileMenu}>
              <img src='/logo.png' alt="Company Logo" className="w-40 object-contain" />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/quality" className="text-gray-700 font-medium transition-colors duration-200 hover:text-[#2592AD]">
              Quality Assurance
            </Link>
            <Link to="/values" className="text-gray-700 font-medium transition-colors duration-200 hover:text-[#2592AD]">
              Care/Key/Our Belief Values
            </Link>
            <Link to="/contact" className="bg-[#2592AD] text-white px-6 py-2 rounded-sm font-medium transition-all duration-200 hover:bg-[#1f7a91] inline-block">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={toggleMobileDropdown}
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                >
                  Comprehensive Product Range
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileDropdownOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {categories.map((cat, index) =>
                      cat.disabled ? (
                        <div key={index} className="px-3 py-2 text-gray-400 cursor-not-allowed text-sm">
                          {cat.name}
                        </div>
                      ) : (
                        <Link
                          key={index}
                          to={cat.path}
                          className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm"
                          onClick={closeMobileMenu}
                        >
                          {cat.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>

              <Link 
                to="/quality" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                onClick={closeMobileMenu}
              >
                Quality Assurance
              </Link>
              <Link 
                to="/values" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                onClick={closeMobileMenu}
              >
                Care/Key/Our Belief Values
              </Link>
              <div className="px-3 py-2">
                <Link 
                  to="/contact" 
                  className="bg-[#2592AD] text-white px-6 py-2 rounded-sm font-medium transition-colors duration-200 inline-block hover:bg-[#1f7a91]"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;