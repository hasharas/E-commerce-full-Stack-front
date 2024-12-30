import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

      const { productId } = useParams();
      const { products } = useContext(ShopContext);
      const [productData, setProductData] = useState(false);

      return (
            <div>

            </div>
      );
}

export default Product;
