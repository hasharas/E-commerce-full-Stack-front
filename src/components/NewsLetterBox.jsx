import React from 'react';

const NewsLetterBox = () => {

      const onSubmitHndler = (e) => {
            e.preventDefault();
      }

      return (
            <div className='flex flex-col items-center'>
                  <p className='text-gray-800 text-2xl font-medium'>Subscribe now & get 20% off</p>
                  <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <form onSubmit={onSubmitHndler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                        <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter Your Email' required />
                        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
                  </form>
            </div>
      );
}

export default NewsLetterBox;
