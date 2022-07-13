import { ITable } from '../../interfaces';
import { ClockIcon, UtensilsIcon } from '../Icons';
import { H1, H2 } from '../Typography';

import './styles.scss';

export default function Table(props: ITable) {
  const diets: any = props.diets;
  const ingredients: any = props.extendedIngredients;
  const instructions: any = props.instructions;

  const readyIn: any = props.readyInMinutes;
  const servings: any = props.servings;

  function capitalizeFirstLetter(letter: string) {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }

  return (
    <div className='table-box'>
      <table className='table-container'>
        <th className='table-header'>
          <H1 content={props.title} />
          <div className='recipe-info'>
            <img src={props.image} alt={props.title} />
            <div className='container-info'>
              <div className='detailed-info'>
                <ul className='prep-list'>
                  <li>
                    <ClockIcon />
                    {`Ready in ${readyIn} minutes`}
                  </li>
                  <li>
                    <UtensilsIcon />
                    {`Serves ${servings} portions`}
                  </li>
                </ul>
                <ul className='diet-list'>
                  {diets.map((diet: any) => (
                    <li>{capitalizeFirstLetter(diet)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </th>
        <tbody className='table-body'>
          <div className='ingredients'>
            <H2 content={'Ingredients'} />
            <ul className='ingredients-list'>
              {ingredients.map((ingredient: any) => (
                <li key={ingredient.id} className='ingredient'>
                  {`${ingredient.amount}
                    ${capitalizeFirstLetter(`${ingredient.unit}`)} of 
                    ${capitalizeFirstLetter(`${ingredient.name}`)}
                    `}
                </li>
              ))}
            </ul>
          </div>
          <div className='instructions'>
            <H2 content={'Method'} />
            <ol className='instructions-list'>
              {instructions.map((instruction: any) => (
                <li className='instruction'>{instruction.step}</li>
              ))}
            </ol>
          </div>
        </tbody>
      </table>
    </div>
  );
}
