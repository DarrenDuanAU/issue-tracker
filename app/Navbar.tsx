'use client';

import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname();
  const NavList = [
    {label: 'Dashboard', href:'/'},
    {label: 'issues', href:'/issues'}
  ]
  return (
    <div className='flex px-4 items-center h-14 border-b mb-6'>
      <Link href='/'><AiFillBug/></Link>
      <ul className='flex'>
        {NavList.map((item) => <li key={item.label} className='pl-6'>
          <Link
            className={classNames({
              'text-zinc-900' : item.href === pathName,
              'text-zinc-600' : item.href !== pathName,
              'hover:text-zinc-900 transition-colors' : true
            })}
            key={item.href}
            href={item.href}>
              {item.label}
          </Link>
          </li>)}
      </ul>
    </div>
  )
}

export default Navbar