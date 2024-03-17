export interface Cart extends Product {
  quantity: number;
}
export type InitialState = {
  products: Product[];
  cart: Cart[];
  cardInformation: CardInformation;
  isDrawerCartOpen: boolean;
  isModalPaymentOpen: boolean;
  isPaymentCompleted: boolean;
};
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageSrc: string;
};

export type CardInformation = {
  card: string;
  expirationDate: string;
  securityCode: string;
  holderName: string;
};
