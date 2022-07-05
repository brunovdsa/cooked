import { memo } from 'react';
import { TitleIcon } from '../Icons';

import MenuDropDown from '../Menu';
import { Tabs } from '../Tabs';
import './styles.scss';

export function HeaderComponent() {
  return (
    <>
      <header>
        <div className='title'>
          <TitleIcon />
          <h1 className='main-title'>Cooked</h1>
        </div>
        <div className='tab-group'>
          <Tabs />
          <MenuDropDown />
        </div>
      </header>
    </>
  );
}

export const Header = memo(HeaderComponent);
