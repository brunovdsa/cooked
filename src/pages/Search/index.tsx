import { Helmet } from 'react-helmet';
import Form from '../../components/Form';
import { Header } from '../../components/Header';

import './styles.scss';

export default function Search() {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Cooked - Search</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Header />
      <Form />
    </div>
  );
}
