import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export default function Main() {
  return (
    <div>
      <Header />
      <div>opa</div>
      <Link to='/search'>clica</Link>
    </div>
  );
}
