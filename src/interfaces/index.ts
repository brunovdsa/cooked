export interface ICard {
  id: number;
  image: string;
  title: string;
}

export interface ITable {
  id?: number;
  title: string;
  image: string;
  dishTypes?: string[];
  instructions?: [];
  extendedIngredients?: [];
}
