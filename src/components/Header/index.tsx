import { memo } from 'react';
import { Link } from 'react-router-dom';
import { TitleIcon } from '../Icons';

import MenuDropDown from '../Menu';
import { Tabs } from '../Tabs';
import './styles.scss';

export function HeaderComponent() {
  return (
    <>
      <header>
        <Link to={'/'} className='home-link'>
          <div className='title'>
            <TitleIcon />
            <h1 className='main-title'>Cooked</h1>
          </div>
        </Link>
        <div className='tab-group'>
          <Tabs />
          <MenuDropDown />
        </div>
      </header>
    </>
  );
}

export const Header = memo(HeaderComponent);
