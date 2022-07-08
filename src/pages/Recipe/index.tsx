import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import Table from '../../components/Table';
import { API, API_KEY } from '../../services/api';

export default function Recipe() {
  const [recipeId, setrecipeId] = useState<number>();
  const [recipeTitle, setRecipeTitle] = useState<string>('');
  const [recipeImage, setRecipeImage] = useState<string>('');
  const [recipeType, setRecipeType] = useState<string[]>([]);
  const [recipeInstructions, setRecipeInstructions] = useState<[]>([]);
  const [recipeIngredients, setRecipeIngredients] = useState<[]>([]);

  const { id } = useParams();

  useEffect(() => {
    API.get(`recipes/${id}/information?apiKey=${API_KEY}`).then((res) => {
      setrecipeId(res.data.id);
      setRecipeTitle(res.data.title);
      setRecipeImage(res.data.image);
      setRecipeType(res.data.dishTypes);
      setRecipeInstructions(res.data.analyzedInstructions[0].steps);
      setRecipeIngredients(res.data.extendedIngredients);
    });
  }, [id]);

  return (
    <div>
      <Header />
      <Table
        id={recipeId}
        title={recipeTitle}
        image={recipeImage}
        dishTypes={recipeType}
        instructions={recipeInstructions}
        extendedIngredients={recipeIngredients}
      />
    </div>
  );
}
