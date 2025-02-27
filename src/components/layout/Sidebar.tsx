import React from 'react';
import { MenuItems } from '@/constants';
import Link from 'next/link';

import { TMenuItem } from '../../types';
import { ActiveLink } from '../common';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../common/ModeToggle';

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 bg-white flex flex-col dark:bg-gray-700 dark:text-white dark:border-opacity-10">
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
      <div className="mt-auto flex items-center justify-end gap-5">
        <ModeToggle></ModeToggle>
        <UserButton />
      </div>
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
