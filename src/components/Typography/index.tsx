import { IParagraph, IPrimaryTitle, ISecondaryTitle } from '../../interfaces';

export function H1(props: IPrimaryTitle) {
  return <h1 className={props.className}>{props.content}</h1>;
}

export function H2(props: ISecondaryTitle) {
  return <h2 className={props.className}>{props.content}</h2>;
}

export function P(props: IParagraph) {
  return <p className={props.className}>{props.content}</p>;
}
