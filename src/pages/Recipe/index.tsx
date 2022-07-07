import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { API, API_KEY } from '../../services/api';

export default function Recipe() {
  const [data, setData] = useState<string[]>([]);
  //const [ingredients, setIngredients] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    API.get(`recipes/${id}/information?apiKey=${API_KEY}`).then((res) => {
      setData(res.data.extendedIngredients);
    });
  });

  console.log(data);
  return (
    <div>
      <Header />
      <div>
        {data.map((ing: any) => (
          <div className='card' key={ing.id}>
            <div className='card-info'>
              <div className='card-title'>{ing.aisle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
