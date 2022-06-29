import { NavLink } from 'react-router-dom';

import { Menu } from '@headlessui/react';

export default function MenuDropDown() {
  return (
    <>
      <Menu>
        <Menu.Button className='btn-menu'>Options</Menu.Button>
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
                <NavLink to='/recipe/:id'>recipes</NavLink>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href='/account-settings'
              >
                <NavLink to='/contact'>Contact</NavLink>
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
}
