import React, { createContext, useCallback, useContext, useState } from 'react';

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}

interface CartContextData {
  products: IProduct[];
  addProduct(product: IProduct): void;
  removeProduct(product_index: number): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IProduct[]>([] as IProduct[]);

  const addProduct = useCallback(
    (product: IProduct) => {
      setData([...data, product]);
    },
    [data],
  );

  const removeProduct = useCallback(
    (product_index: number) => {
      const findIndex = data.map((_, index) => index === product_index);
      if (!findIndex) return;
      const allProducts = data.filter((_, index) => index !== product_index);

      setData(allProducts);
    },
    [data],
  );

  return (
    <CartContext.Provider
      value={{
        products: data,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  // if (!context) {
  //   throw new Error('useCart must be used within an AuthProvider');
  // }
  return context;
}

export { useCart, CartProvider };
