import React from 'react';
import { MenuItems } from '@/constants';
import Link from 'next/link';
import ActiveLink from '../common/ActiveLink';
import { TMenuItem } from '../types';

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 bg-white">
      <Link href="/" className="font-bold text-3xl inline-block mb-5">
        <span className="text-primary">U</span>
        cademy
      </Link>
      <ul className="flex flex-col gap-2">
        {MenuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
};
function MenuItem({ url = '/', title = '', icon }: TMenuItem) {
  return (
    <ActiveLink url={url}>
      {icon} {title}
    </ActiveLink>
  );
}
export default Sidebar;
