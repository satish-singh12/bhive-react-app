import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full h-[90px] border-b border-[#F2B304] bg-white z-50">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="logo">
          {/* logo */}
          <span className="text-xl font-bold">BHIVE</span>
        </div>
        <div className="mobile-icon w-10 h-10 bg-[#F2B304] rounded flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;