import { Header } from '../../components/Header';
import bg from '../../assets/svg/cooking.svg';

export default function Main() {
  return (
    <div>
      <Header />
      <img alt='img' src={bg}></img>
    </div>
  );
}
