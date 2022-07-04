import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faFire,
  faHouse,
  faMagnifyingGlass,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

export function MenuIcon() {
  return <FontAwesomeIcon icon={faBars} className='menu-icon' />;
}

export function TitleIcon() {
  return <FontAwesomeIcon icon={faFire} className='title-icon' />;
}

export function HomeIcon() {
  return <FontAwesomeIcon icon={faHouse} className='home-icon' />;
}

export function RecipeIcon() {
  return <FontAwesomeIcon icon={faUtensils} className='recipe-icon' />;
}

export function SearchIcon() {
  return <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />;
}
