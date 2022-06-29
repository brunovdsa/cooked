import { useState } from 'react';
import { API, API_KEY } from '../../services/api';

export default function Form() {
  const [recipesData, setRecipesData] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const search = async (e: any) => {
    e.preventDefault();

    const data: any = await API.get(
      `/complexSearch?query=${searchKey}&apiKey=${API_KEY}`
    );
    setRecipesData(data.data.results);
  };
  return (
    <div>
      <form onSubmit={search}>
        <input
          className='search-input'
          type='text'
          placeholder='Search artists, playlist or tracks'
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className='btn-submit' type={'submit'}></button>
      </form>
      <section className='section-artist'>
        {recipesData.map((recipe: any) => (
          <div className='recipe' key={recipe.id}>
            <div className='recipe-name'>{recipe.title}</div>
            {recipe.image.length ? (
              <img width={'50%'} src={recipe.image} alt='' />
            ) : (
              <div>No Image</div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
