import { ITable } from '../../interfaces';

import './styles.scss';

export default function Table(props: ITable) {
  const instructions: any = props.instructions;

  const ingredients: any = props.extendedIngredients;

  //  const dishTypes: any = props.dishTypes;

  return (
    <>
      <table className='table-container'>
        <th className='table-header'>
          <h1>{props.title}</h1>
          <img src={props.image} alt={props.title} />
          <span>{props.dishTypes}</span>
        </th>
        <tbody>
          <div className='ingredients'>
            <h2>Ingredients</h2>
            <ul className='ingredients-list'>
              {ingredients.map((ingredient: any) => (
                <li className='ingredient'>{`${ingredient.name} | ${ingredient.amount} ${ingredient.unit}`}</li>
              ))}
            </ul>
          </div>
          <div className='instructions'>
            <h2>Method</h2>
            <ul className='instructions-list'>
              {instructions.map((instruction: any) => (
                <li className='instruction'>{instruction.step}</li>
              ))}
            </ul>
          </div>
        </tbody>
      </table>
    </>
  );
}
