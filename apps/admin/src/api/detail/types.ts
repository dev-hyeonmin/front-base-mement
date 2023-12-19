export interface IDetailEvent {
  id: number;
  name: string;
}

export interface IDetailProduct {
  id: number;
  name: string;
}

export interface IDetailProps {
  title: string;
  subTitle: string;
  content: string;
  products: IDetailProduct[];
  events: IDetailEvent[];
  relatedProducts: IDetailProduct[];
}