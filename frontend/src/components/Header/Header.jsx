import React from "react";

const Header = ({ heading, hideButtons }) => {
  return (
    <>
      <header className="flex bg-[#f9eeea] h-[8vh] border-b-[1px] items-center justify-around">
        <div className="heading text-2xl font-bold text-gray-700">
          {heading}
        </div>
        {!hideButtons && (
          <div className="btns space-x-3">
            <button className="p-2 hover:rounded-none transition-all duration-500 rounded-lg text-white bg-primary">
              Contests
            </button>
            <button className="p-2 hover:rounded-none transition-all duration-500 rounded-lg text-white bg-primary">
              Logout
            </button>
            <button className="p-2 hover:rounded-none transition-all duration-500 rounded-lg text-white bg-primary">
              My Contests
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
