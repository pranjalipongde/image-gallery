import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-[#3A1078] text-white shadow-lg z-10">
      <div>
        <p className="text-4xl ">📷</p>
      </div>
      <div className="text-lg font-bold text-center flex-grow">
        Lorem Picsum
      </div>
    </nav>
  );
};

export default Header;
