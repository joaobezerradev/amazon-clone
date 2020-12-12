import React, { createContext, useCallback, useContext, useState } from 'react';

interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}
interface CartContextData {
  products: ProductProps[];
  addProduct(product: ProductProps): void;
  removeProduct(product_id: string): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ProductProps[]>({} as ProductProps[]);

  const addProduct = useCallback(
    (product: ProductProps) => {
      setData([...data, product]);
    },
    [data],
  );

  const removeProduct = useCallback(
    (product_id: string) => {
      setData(data.filter(product => product.id !== product_id));
    },
    [data],
  );

  return (
    <CartContext.Provider value={{ products: data, addProduct, removeProduct }}>
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
