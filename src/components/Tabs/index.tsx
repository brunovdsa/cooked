import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';

import './styles.scss';

export function Tabs() {
  return (
    <Tab.Group>
      <Tab.List className='tab-list'>
        <Link to={'/'} className='link'>
          <Tab className='tab'>Home</Tab>
        </Link>
        <Link to={'/search'} className='link'>
          <Tab className='tab'>Search</Tab>
        </Link>
      </Tab.List>
    </Tab.Group>
  );
}
