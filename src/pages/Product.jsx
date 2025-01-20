import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {

      const { productId } = useParams();
      const { products, currency } = useContext(ShopContext);
      const [productData, setProductData] = useState(false);
      const [image, setImage] = useState('');
      const [size, setSize] = useState('');



      const fetchProductData = async () => {

            products.map((item) => {
                  if (item._id === productId) {
                        setProductData(item);
                        setImage(item.image[0])
                        return null;
                  }
            })
      }

      useEffect(() => {
            fetchProductData();
      }, []);

      return productData ? (
            <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
                  {/* product data */}
                  <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                        {/* product image */}
                        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                                    {
                                          productData.image.map((item, index) => (
                                                <img src={item} onClick={() => setImage(item)} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                                          ))
                                    }
                              </div>
                              <div className='w-full sm:w-[80%]'>
                                    <img src={image} className='w-full h-auto' alt="" />

                              </div>

                        </div>
                        {/* --------------productc details--------*/}
                        <div className='flex-1'>
                              <h1 className='font-medium text-2xl mt-2'>
                                    {productData.name}
                              </h1>
                              <div className='flex items-center gap-1 mt-2'>
                                    <img src={assets.star_icon} className='w-3 5' alt="" />
                                    <img src={assets.star_icon} className='w-3 5' alt="" />
                                    <img src={assets.star_icon} className='w-3 5' alt="" />
                                    <img src={assets.star_icon} className='w-3 5' alt="" />
                                    <img src={assets.star_dull_icon} className='w-3 5' alt="" />
                                    <p className='pl-2'>
                                          (122)
                                    </p>

                              </div>
                              <p className='mt-5 text-3xl font-medium'>
                                    {currency}{productData.price}
                              </p>
                              <p className='mt-5 text-gray-500 md:w-4/5'>
                                    {productData.description}
                              </p>
                              <div className='flex flex-col gap-4 my-8'>
                                    <p className='' > Select size</p>
                                    <div>
                                          {productData.sizes.map((item, index) => (
                                                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index} >{item}</button>
                                          ))}
                                    </div>
                              </div>
                              <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
                                    ADD TO CART
                              </button>
                              <hr className='mt-8 sm:w:4/5' />
                              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                                    <p>100% orginal product</p>
                                    <p>Cash on delivery is available on this product. </p>
                                    <p>Esye return and exchange policy withing 7 days.</p>
                              </div>
                        </div>
                  </div>
                  {/* description and review section */}
                  <div className='mt-20'>
                        <div className='flex'>
                              <b className='border px-5 py-3 text-sm'>Description</b>
                              <p className='border px-5 py-3 text-sm'>Reviews (231)</p>
                        </div>
                        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                              <p>Total 5 (delta 4), reused 0 (delta 0), pack-reused 0
                                    remote: Resolving deltas: 100% (4/4), completed with 4 local objects.</p>
                              <p>
                                    Total 5 (delta 4), reused 0 (delta 0), pack-reused 0
                                    remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
                              </p>

                        </div>
                  </div>
                  {/* display related product */}


            </div>
      ) : <div className='opacity-0'></div>
}

export default Product;
