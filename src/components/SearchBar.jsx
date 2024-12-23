import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {

      const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
      return (
            <div className='border-t border-b bg-gray-50 text-center'>
                  <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                        <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
                  </div>
            </div>
      );
}

export default SearchBar;
