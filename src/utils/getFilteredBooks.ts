import { FilterPrices } from '../constants';
import { Book, SearchFilter } from '../types';

export const getFilteredBooks = ({
  books,
  filterParams,
}: {
  books: Book[];
  filterParams: SearchFilter;
}): Book[] => {
  const { title, price } = filterParams;

  return books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(title.toLowerCase());

    let priceMatch;
    switch (price) {
      case FilterPrices.UP_TO_15:
        priceMatch = book.price <= 15;
        break;
      case FilterPrices.FROM_15_TO_30:
        priceMatch = book.price > 15 && book.price <= 30;
        break;
      case FilterPrices.OVER_30:
        priceMatch = book.price > 30;
        break;
      default:
        priceMatch = true;
    }

    return titleMatch && priceMatch;
  });
};
