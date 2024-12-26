import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const SearchBar = () => {

      const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

      return (
            <div className='border-t border-b bg-gray-50 text-center'>
                  <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                        <input value={search} onChange={() => setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
                        <img src={assets.search_icon} alt="serch icon" className='w-4' />

                  </div>
                  <img onClick={() => setShowSearch(true)} src={assets.cross_icon} className='inline w-3 cursor-pointer ' alt="cros icon" />
            </div>
      );
}

export default SearchBar;
