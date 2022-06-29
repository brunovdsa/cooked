import { memo } from 'react';

import './styles.scss';

import MenuDropDown from '../Menu';

export function HeaderComponent() {
  return (
    <>
      <header>
        <h1 className='title'>ReciPro</h1>
        <MenuDropDown />
      </header>
    </>
  );
}

export const Header = memo(HeaderComponent);
