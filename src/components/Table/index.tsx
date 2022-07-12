import { ITable } from '../../interfaces';
import { H1, H2, P } from '../Typography';

import './styles.scss';

export default function Table(props: ITable) {
  // const dishTypes: any = props.dishTypes;
  const ingredients: any = props.extendedIngredients;
  const instructions: any = props.instructions;

  return (
    <div className='table-box'>
      <table className='table-container'>
        <th className='table-header'>
          <H1 content={props.title} />
          <img src={props.image} alt={props.title} />
          {/* <P content={dishTypes.map((dish: any) => dish)} /> */}
        </th>
        <tbody className='table-body'>
          <div className='ingredients'>
            <H2 content={'Ingredients'} />
            <ul className='ingredients-list'>
              {ingredients.map((ingredient: any) => (
                <li
                  key={ingredient.id}
                  className='ingredient'
                >{`${ingredient.name} | ${ingredient.amount} ${ingredient.unit}`}</li>
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