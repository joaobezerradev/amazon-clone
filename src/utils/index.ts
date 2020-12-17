import { IProduct } from '../hooks/Cart';

export const valueTotal = (total: number, product: IProduct): number => {
  return total + product.price;
};
