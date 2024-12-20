import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

      const { currency } = useContext(ShopContext);

      return (
            <Link >

            </Link>
      );
}

export default ProductItem;
