import { SearchIcon } from '../Icons';

import './styles.scss';

export function Button() {
  return (
    <div>
      <button className='btn-submit' type={'submit'}>
        <SearchIcon />
      </button>
    </div>
  );
}
