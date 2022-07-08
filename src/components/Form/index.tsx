import { useState } from 'react';
import { API, API_KEY } from '../../services/api';
import { Button } from '../Button';
import Card from '../Card';

import './styles.scss';

export default function Form() {
  const [recipesData, setRecipesData] = useState<string[]>([]);
  const [searchKey, setSearchKey] = useState<string>('');

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
          onChange={(e: any) => setSearchKey(e.target.value)}
          tabIndex={20}
        />
        <Button />
      </form>
      <section className='section-recipe'>
        {recipesData.map((recipe: any) => (
          <Card id={recipe.id} image={recipe.image} title={recipe.title} />
        ))}
      </section>
    </div>
  );
}
