import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseItem = () => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-2xl">
      <Link href="#" className="block h-[180px] relative">
        <Image
          alt=""
          src="https://plus.unsplash.com/premium_photo-1740080515911-c2478cd296ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-lg"
          sizes='@media (min-width: 640px) 300px, 100vw'
          priority
        />
        <span className='inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs'>New</span>
      </Link>
      <div className="py-4">
      <h3 className='font-bold text-lg mb-5'>Xây dựng NextJs Pro</h3>
      <div className="flex items-center justify-between">
        <span className='text-xs bg-opacity-10 rounded-full px-3 py-1 bg-primary text-primary'>30h25</span>
        <span className='font-semibold text-primary'>790.000</span>
      </div>
      </div>
    </div>
  );
};

export default CourseItem;
