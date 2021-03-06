export interface ICard {
  id: number;
  image: string;
  title: string;
  className?: string;
}

export interface ITable {
  id?: number;
  title: string;
  image: string;
  className?: string;
  diets?: string[];
  instructions?: [];
  extendedIngredients?: [];
  readyInMinutes?: number;
  servings?: number;
}

export interface IPrimaryTitle {
  className?: string;
  content: string;
}

export interface ISecondaryTitle {
  className?: string;
  content: string;
}

export interface IParagraph {
  className?: string;
  content: string[];
}
