import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center ">
      <div className="inline-flex border-gray-400 items-center justify-center px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text" // Fixed typo (removed extra space)
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon} alt="Search Icon" />
      </div>

      <img
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="Close Search"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
