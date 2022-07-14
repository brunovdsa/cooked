import { Link } from 'react-router-dom';
import { ICard } from '../../interfaces';

import './styles.scss';

export default function Card(props: ICard) {
  return (
    <div className='card' key={props.id}>
      <Link className='card-link' to={`/recipe/${props.id}`}>
        {props.image.length ? (
          <img width={'100%'} src={props.image} alt='' />
        ) : (
          <div>No Image</div>
        )}
        <div className='card-info'>
          <div className='card-title'>{props.title}</div>
          <Link className='card-link' to={`/recipe/${props.id}`}>
            Ingredients
          </Link>
        </div>
      </Link>
    </div>
  );
}
