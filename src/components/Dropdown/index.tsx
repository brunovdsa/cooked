import { NavLink } from 'react-router-dom';

import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '../Icons';
import './styles.scss';

export default function MenuDropDown() {
  return (
    <>
      <Menu>
        <Menu.Button className='btn-menu'>
          <MenuIcon />
        </Menu.Button>
        <Transition
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-95'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='items-menu'>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && 'red'}`} href='/account-settings'>
                  <NavLink to='/'>Home</NavLink>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href='/account-settings'
                >
                  <NavLink to='/recipe/:id'>Recipes</NavLink>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href='/account-settings'
                >
                  <NavLink to='/search'>Search</NavLink>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
