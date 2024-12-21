import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolicy = () => {
      return (
            <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
                  <div className=' hover:scale-110 transition ease-in-out cursor-pointer'>
                        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="exchnage icon" />
                        <p className='font-semibold '>Easy Exchange Policy</p>
                        <p className='text-gray-400'>We offer hassly free exchange policy</p>
                  </div>
                  <div className=' hover:scale-110 transition ease-in-out cursor-pointer'>
                        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="quality icon" />
                        <p className='font-semibold '>5 Day Return Policy</p>
                        <p className='text-gray-400'>We Provide 5 day return policy</p>
                  </div>
                  <div className=' hover:scale-110 transition ease-in-out cursor-pointer'>
                        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="support img" />
                        <p className='font-semibold '>Best Customer Support</p>
                        <p className='text-gray-400'>We provide  you 24/7 customer support</p>
                  </div>

            </div>
      );
}

export default OurPolicy;
