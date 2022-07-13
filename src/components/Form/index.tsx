import { useState } from 'react';
import { API, API_KEY } from '../../services/api';
import { Button } from '../Button';
import Card from '../Card';

import './styles.scss';

export default function Form() {
  const [recipesData, setRecipesData] = useState<string[]>([]);
  const [searchKey, setSearchKey] = useState<string>('');
  const [recipeId, setRecipeId] = useState<number>();

  // const [error, setError] = useState<boolean>(true);

  const search = async (e: any) => {
    e.preventDefault();

    const data: any = await API.get(
      `recipes/complexSearch?query=${searchKey}&apiKey=${API_KEY}`
    ); // ).then(() => setError(false));
    setRecipesData(data.data.results);
    recipesData.map((res: any) => {
      return setRecipeId(res.id);
    });
  };

  return (
    <div className='search-container'>
      <div className='form-content'>
        <form onSubmit={search} className='search-form' key={recipeId}>
          <input
            className='search-input'
            type='text'
            placeholder={`Search for your favorite food`}
            onChange={(e: any) => setSearchKey(e.target.value)}
            tabIndex={1}
          />
          <Button />
        </form>
      </div>
      <div className='results-content'>
        <section className='section-recipe'>
          {recipesData.map((recipe: any) => (
            <Card id={recipe.id} image={recipe.image} title={recipe.title} />
          ))}
        </section>
      </div>
    </div>
  );
}
