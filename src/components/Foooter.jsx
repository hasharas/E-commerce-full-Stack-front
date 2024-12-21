import React from 'react';
import { assets } from '../assets/frontend_assets/assets.js'

const Foooter = () => {
      return (
            <div >
                  <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                        <div className=''>
                              <img src={assets.zippo_logo} alt="logo" className='w-32 mb-5' />
                              <p className='flex flex-col gap-1 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div>
                              <p className='text-xl font-medium mb-5 '>COMPANY</p>
                              <ul className='flex flex-col gap-1 text-gray-600'>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Delivery</li>
                                    <li>Privice Policy</li>

                              </ul>
                        </div>
                        <div>
                              <p className='text-xl font-medium mb-5 sm:'>GET IN TOUCH</p>
                              <ul className='flex flex-col gap-1 text-gray-600'>
                                    <li>+9471-234-567</li>
                                    <li>contact@zippo.com</li>
                              </ul>
                        </div>


                  </div>
                  <div>
                        <hr />
                        <p className='py-5 text-sm text-center'>
                              Copyright 2024@ ZippoClone.com - All Right Resiverd
                        </p>
                  </div>
            </div>
      );
}

export default Foooter;
