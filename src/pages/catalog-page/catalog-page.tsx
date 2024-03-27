import { useState, useMemo } from 'react';
import { Book, SearchFilter } from '../../types';
import { FilterPrices, FilterTitle } from '../../constants';
import mockData from '../../data/mock-data.json';
import { BookCard } from '../../components/book-card/book-card';
import { Filter } from '../../components/filter/filter';
import { Container } from '../../components/container/container';
import { getFilteredBooks } from '../../utils';

const CatalogPage = () => {
  const { books }: { books: Book[] } = mockData;

  const [filter, setFilter] = useState<SearchFilter>({
    title: FilterTitle.EMPTY,
    price: FilterPrices.ANY_PRICE,
  });

  const onFilterChange = (filterOption: string, newValue: string) => {
    setFilter((prevState) => ({ ...prevState, [filterOption]: newValue }));
  };

  const filteredBooks = useMemo(
    () => getFilteredBooks({ filterParams: filter, books }),
    [filter, books],
  );

  return (
    <div className='pt-4'>
      <Container>
        <Filter onChangeFilter={onFilterChange} filter={filter} />
        <div className='my-8 flex flex-wrap items-center  justify-center gap-7 lg:gap-14'>
          {filteredBooks.length ? (
            filteredBooks.map((book: Book) => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <div>
              <p className='text-lg font-semibold'>Not found</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export { CatalogPage };
