import { Helmet } from 'react-helmet';

import { Header } from '../../components/Header';

import notfound from '../../assets/svg/notfound.svg';

import './styles.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Cooked - 404 Not found</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Header />
      <div className='not-found'>
        <img alt='404 - Page not found' src={notfound}></img>
        <Link to='/'>Go back, you are lost.</Link>
      </div>
    </div>
  );
}
