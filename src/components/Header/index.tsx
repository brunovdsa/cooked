import { memo } from 'react';
import { Link } from 'react-router-dom';
import { TitleIcon } from '../Icons';

import MenuDropDown from '../Dropdown';
import { Tabs } from '../Tabs';
import { H1 } from '../Typography';
import './styles.scss';

export function HeaderComponent() {
  return (
    <>
      <header>
        <Link to={'/'} className='home-link'>
          <div className='title'>
            <TitleIcon />
            <H1 className={'teste'} content={'Cooked'} />
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
