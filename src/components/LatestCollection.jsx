import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {



      const { products } = useContext(ShopContext);
      // console.log(products);
      const [latestProduct, setLatestProduct] = useState([]);

      useEffect(() => {
            setLatestProduct(products.slice(0, 10));
      }, [])


      return (
            <div className='m-10 '>
                  <div className='py-8 text-center text-3xl'>
                        <Title text1={"LATEST"} text2={"COLLECTION"} />
                        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                              Find a beautiful coffee color palette from Color Hunt's curated collection
                        </p>

                  </div>


            </div>
      );
}

export default LatestCollection;
