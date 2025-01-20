import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const RelatedProduct = ({ category, subCategory }) => {


      const { product } = useContext(ShopContext);
      const [related, setRelated] = useState([]);

      useEffect(() => {
            if (product.lenth > 0) {
                  let productCopy = product.slice();

                  productCopy = productCopy.filter((item) => category === item.category);
                  productCopy = productCopy.filter((item) => subCategory === item.subCategory);

                  console.log(productCopy.slice(0, 5));
            }
      }, [product])

      return (
            <div>

            </div>
      );
}

export default RelatedProduct;
