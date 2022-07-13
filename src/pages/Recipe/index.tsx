import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import Table from '../../components/Table';
import { API, API_KEY } from '../../services/api';

export default function Recipe() {
  const [recipeId, setrecipeId] = useState<number>();
  const [recipeTitle, setRecipeTitle] = useState<string>('');
  const [recipeImage, setRecipeImage] = useState<string>('');
  const [diets, setDiets] = useState<string[]>([]);
  const [recipeInstructions, setRecipeInstructions] = useState<[]>([]);
  const [recipeIngredients, setRecipeIngredients] = useState<[]>([]);
  const [servings, setServings] = useState<number>();
  const [readyIn, setreadyIn] = useState<number>();

  const { id } = useParams();

  useEffect(() => {
    API.get(`recipes/${id}/information?apiKey=${API_KEY}`).then((res: any) => {
      setrecipeId(res.data.id);
      setRecipeTitle(res.data.title);
      setServings(res.data.servings);
      setreadyIn(res.data.readyInMinutes);
      setRecipeImage(res.data.image);
      setDiets(res.data.diets);
      setRecipeInstructions(res.data.analyzedInstructions[0].steps);
      setRecipeIngredients(res.data.extendedIngredients);
    });
  }, [id]);

  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`Cooked - ${recipeTitle}`}</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Header />
      <Table
        id={recipeId}
        title={recipeTitle}
        image={recipeImage}
        diets={diets}
        instructions={recipeInstructions}
        extendedIngredients={recipeIngredients}
        readyInMinutes={readyIn}
        servings={servings}
      />
    </div>
  );
}
