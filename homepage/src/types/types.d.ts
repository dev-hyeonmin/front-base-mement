export type TResponse<T> = {
  statusCode: number;
  success: boolean;
  result: T;
}

export type TLocales = {
  type: string;
  name: string;
}

export type TCategories = {
  categories: TCategory[];
};

type TCategory = {
  id: number;
  name: string;
};

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
