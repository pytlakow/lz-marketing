import React from 'react';

const Search: React.FC = () => {
    return (
        <form className="max-w-lg mx-auto">
    <div className="flex">
       
        
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-orange-500 focus:border-orange-500" placeholder="Search page" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-500 rounded-e border border-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
    );
};

export default Search;