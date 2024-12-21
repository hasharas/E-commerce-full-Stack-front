import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

      const { currency } = useContext(ShopContext);

      return (
            <Link to={`/product/${id}`} className='text-gray-700 border cursor-pointer'>
                  <div className='overflow-hidden'>
                        <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="cart image" />
                  </div>
                  <div className='px-2 py-2 '>
                        <p className='pt-1 pb-1 text-sm'>{name}</p>
                        <p className='text-sm font-medium'>{currency}{price}</p>
                  </div>
            </Link>
      );
}

export default ProductItem;
