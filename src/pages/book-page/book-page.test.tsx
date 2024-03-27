import { render, screen, fireEvent } from '@testing-library/react';
import { AddToCartPanel } from '../../components/add-to-cart-panel/add-to-cart-panel';
import { Book } from '../../types';
import mockData from '../../data/mock-data.json';

const { books: mockedBooks }: { books: Book[] } = mockData;
const currentBook = mockedBooks[0];

let counterInput: HTMLInputElement;
let increaseButton: HTMLElement;
let decreaseButton: HTMLElement;

describe('AddToCart component', () => {
  beforeEach(() => {
    render(<AddToCartPanel book={currentBook} />);
    counterInput = screen.getByRole('spinbutton');
    increaseButton = screen.getByRole('button', { name: '+' });
    decreaseButton = screen.getByRole('button', { name: '-' });
  });

  it('should render a counter with value of 1', () => {
    expect(counterInput).toHaveValue(1);
  });

  it('should increase count when plus button is clicked', async () => {
    expect(counterInput).toHaveValue(1);
    fireEvent.click(increaseButton);
    expect(counterInput).toHaveValue(2);
  });

  it('should decrease count when minus button is clicked', () => {
    fireEvent.click(increaseButton);
    expect(counterInput).toHaveValue(2);
    fireEvent.click(decreaseButton);
    expect(counterInput).toHaveValue(1);
  });

  it('should not decrease to less than 1', () => {
    expect(counterInput).toHaveValue(1);
    fireEvent.click(decreaseButton);
    expect(counterInput).toHaveValue(1);
  });

  it('should update total price when quantity changes', () => {
    const totalPriceText = screen.getByTestId('total-price');
    expect(totalPriceText).toHaveTextContent('10.99');
    fireEvent.click(increaseButton);
    expect(totalPriceText).toHaveTextContent('21.98');
  });
});
