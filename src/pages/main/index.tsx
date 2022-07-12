import { Header } from '../../components/Header';
import bg from '../../assets/svg/cooking.svg';

import './styles.scss';
import { Link } from 'react-router-dom';
import { H1, H2 } from '../../components/Typography';

export default function Main() {
  return (
    <>
      <Header />
      <div className='main-container'>
        <section className='main-content'>
          <H1 content={'Enjoy food from all over the world.'} />
          <H2
            content={
              'Healthy recipes shake up your comfort food favorites by adding more veggies and swapping out cooking method'
            }
          />
          <Link className='desktop-btn' to={'/search'}>
            Get recipes
          </Link>
        </section>
        <section className='side-content'>
          <img alt='img' src={bg}></img>
          <Link className='mobile-btn' to={'/search'}>
            Get recipes
          </Link>
        </section>
      </div>
    </>
  );
}
