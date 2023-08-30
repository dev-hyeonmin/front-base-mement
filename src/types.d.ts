export type TEvents = {
  products: TProducts[];
};

type TProducts = {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  thumbnail: string;
};
