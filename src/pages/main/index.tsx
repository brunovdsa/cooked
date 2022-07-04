import { Header } from '../../components/Header';
import bg from '../../assets/svg/cooking.svg';

import './styles.scss';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <Header />
      <div className='container'>
        <section className='main-content'>
          <h1>Enjoy food from all over the world</h1>
          <p>
            Healthy recipes shake up your comfort food favorites by adding more
            veggies and swapping out cooking method
          </p>
          <img alt='img' src={bg}></img>
          <Link className='primary-btn' to={'/search'}>
            Get recipes
          </Link>
        </section>
      </div>
    </>
  );
}
