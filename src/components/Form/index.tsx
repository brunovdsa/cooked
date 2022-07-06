import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API, API_KEY } from '../../services/api';
import { SearchIcon } from '../Icons';

export default function Form() {
  const [recipesData, setRecipesData] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const search = async (e: any) => {
    e.preventDefault();

    const data: any = await API.get(
      `recipes/complexSearch?query=${searchKey}&apiKey=${API_KEY}`
    );
    setRecipesData(data.data.results);
  };
  return (
    <div className='search-container'>
      <form onSubmit={search} className='search-form'>
        <input
          className='search-input'
          type='text'
          placeholder={`Search for your favorite food`}
          onChange={(e) => setSearchKey(e.target.value)}
          tabIndex={20}
        />
        <button className='btn-submit' type={'submit'}>
          <SearchIcon />
        </button>
      </form>
      <section className='section-recipe'>
        {recipesData.map((recipe: any) => (
          <div className='card' key={recipe.id}>
            {recipe.image.length ? (
              <img width={'100%'} src={recipe.image} alt='' />
            ) : (
              <div>No Image</div>
            )}
            <div className='card-info'>
              <div className='card-title'>{recipe.title}</div>
              <Link className='card-link' to={`/recipe/${recipe.id}`}>
                Ingredients
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
