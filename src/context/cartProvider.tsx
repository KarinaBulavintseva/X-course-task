import { ReactNode, createContext, useEffect, useState } from 'react';
import { Cart } from '../types';
import { LS_KEYS, LocalStorageService } from '../services/localStorage';
import { getTotalPrice } from '../utils';

type CartProviderProps = {
  children: ReactNode;
};

const initialCartContext: CartContextType = {
  cartItems: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  clearCart: () => {},
  getTotalCartPrice: () => 0,
  getTotalCartItems: () => 0,
};

type CartContextType = {
  cartItems: Cart[];
  addToCart: (newItem: Cart) => void;
  deleteFromCart: (bookId: number) => void;
  clearCart: () => void;
  getTotalCartPrice: () => number;
  getTotalCartItems: () => number;
};

export const CartContext = createContext<CartContextType>(initialCartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const cartFromLocalStorage = LocalStorageService.get(LS_KEYS.CART);

  const [cartItems, setCartItems] = useState<Cart[]>(
    cartFromLocalStorage || [],
  );

  useEffect(() => {
    LocalStorageService.set(LS_KEYS.CART, cartItems);
  }, [cartItems]);

  const addToCart = (newItem: Cart) => {
    const { id: newItemId, amount, price } = newItem.book;
    const availableAmount = amount || 0;

    const isAlreadyExists = cartItems.some(
      (cartItem) => cartItem.book.id === newItemId,
    );

    if (isAlreadyExists) {
      setCartItems((prevState) => [
        ...prevState.map((item) =>
          item.book.id === newItemId
            ? {
                ...item,
                cartAmount: Math.min(
                  item.cartAmount + newItem.cartAmount,
                  availableAmount,
                ),

                totalPrice: Math.min(
                  item.totalPrice + newItem.totalPrice,
                  getTotalPrice({
                    itemsNumber: availableAmount,
                    price,
                  }),
                ),
              }
            : item,
        ),
      ]);
    } else {
      setCartItems((prevState) => [...prevState, newItem]);
    }
  };

  const deleteFromCart = (bookId: number) => {
    setCartItems((prevState) => [
      ...prevState.filter((item) => item.book.id !== bookId),
    ]);
  };

  const clearCart = () => {
    setCartItems(() => []);
  };

  const getTotalCartPrice = (): number => {
    return +cartItems
      .reduce((acc, currentItem) => acc + currentItem.totalPrice, 0)
      .toFixed(2);
  };

  const getTotalCartItems = (): number => {
    return cartItems.reduce(
      (acc, currentItem) => acc + currentItem.cartAmount,
      0,
    );
  };

  const value = {
    cartItems,
    addToCart,
    deleteFromCart,
    clearCart,
    getTotalCartPrice,
    getTotalCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
