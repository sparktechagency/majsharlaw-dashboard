"use client";
import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm, setCurrentPage }) => (
  <div className="flex items-center">
    <div className="relative">
      <input
        type="text"
        placeholder="Search for user"
        className="pl-10 border-[1px] border-[#D9D9D9] pr-50 bg-white text-[#00000070] py-3 text-md focus:outline-none focus:ring-1 focus:ring-[#6DA40A]"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />
    </div>
    <button className="hover:bg-gray-700 transition-colors bg-[#6DA40A] p-3 cursor-pointer">
      <Search className="text-white" />
    </button>
  </div>
);

export default SearchBar;
