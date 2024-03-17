import { Search } from "lucide-react";
import React from "react";

const Searchbar = () => {
  return (
    <form action="/search" className="relative w-64">
      <input
        type="text"
        name="q"
        className="block font-sans font-light w-full pl-8 pr-4 py-2 border bg-white dark:bg-slate-900 text-black dark:text-slate-50 border-slate-300 dark:border-slate-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Search dictionary..."
      />
      <Search
        size={12}
        className="absolute left-2 top-2 h-5 w-5 text-slate-400 dark:text-slate-700 pointer-events-none"
      />
    </form>
  );
};

export default Searchbar;
