import { useState } from 'react';
import { Book } from '../../types';
import { Cart } from '../../types';
import { MIN_ITEMS_NUMBER } from '../../constants';
import { useCart } from '../../hooks';
import { getTotalPrice } from '../../utils';
import { Counter } from '../counter/counter';

type AddToCartPanelProps = {
  book: Book;
};

const AddToCartPanel: React.FC<AddToCartPanelProps> = ({ book }) => {
  const { addToCart } = useCart();

  const { amount, price } = book;

  const availableAmount = amount || 0;

  const minNumber = availableAmount === 0 ? 0 : MIN_ITEMS_NUMBER;

  const [numberToBuy, setNumberToBuy] = useState<number>(minNumber);

  const handleCounterChange = (newValue: number) => {
    setNumberToBuy(() => newValue);
  };

  const totalPrice = getTotalPrice({ itemsNumber: numberToBuy, price });

  const onAddToCart = () => {
    const cartItem: Cart = {
      cartAmount: numberToBuy,
      book,
      totalPrice,
    };

    addToCart(cartItem);
  };

  return (
    <div className=' h-fit min-w-[300px]  rounded-md p-6 shadow-md'>
      <div className='mb-1 flex'>
        <p className='grow'>Price, $</p>
        <p>{price}</p>
      </div>
      <div className='mb-1 flex'>
        <p className='grow'>Count</p>
        <Counter
          inputValue={numberToBuy}
          min={MIN_ITEMS_NUMBER}
          max={availableAmount}
          onCounterChange={handleCounterChange}
        />
      </div>
      <div className='mb-4 flex'>
        <p className='grow'>Total price, $</p>
        <p className='text-right' data-testid='total-price'>
          {totalPrice.toFixed(2)}
        </p>
      </div>
      <div className='flex justify-end'>
        <button
          onClick={onAddToCart}
          disabled={!availableAmount}
          className='rounded-md bg-[#4294FF] px-2 py-1 text-white disabled:opacity-75'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { AddToCartPanel };
