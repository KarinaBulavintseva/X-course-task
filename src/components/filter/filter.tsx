import { ChangeEvent } from 'react';
import { SearchFilter } from '../../types';
import { FilterOptions, FilterPrices } from '../../constants';

type FilterProps = {
  filter: SearchFilter;
  onChangeFilter: (filterOption: string, newValue: string) => void;
};

const Filter: React.FC<FilterProps> = ({ filter, onChangeFilter }) => {
  const { title, price } = filter;

  const handleChangePrice = (e: ChangeEvent<HTMLSelectElement>) => {
    const newPrice = e.target.value;
    onChangeFilter(FilterOptions.PRICE, newPrice);
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    onChangeFilter(FilterOptions.TITLE, newTitle);
  };

  return (
    <div className='flex flex-col gap-2 sm:flex-row'>
      <div className='w-full sm:max-w-[400px] '>
        <input
          className='w-full rounded-lg bg-gray-100 px-3 py-3'
          value={title}
          onChange={handleChangeTitle}
          placeholder='Search by book name'
        />
      </div>

      <select
        value={price}
        onChange={handleChangePrice}
        className='block rounded-lg border border-gray-300  bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-blue-500 focus:ring-blue-500'
      >
        <option value={FilterPrices.ANY_PRICE}>Any price</option>
        <option value={FilterPrices.UP_TO_15}>up to 15$</option>
        <option value={FilterPrices.FROM_15_TO_30}>$15 - $30</option>
        <option value={FilterPrices.OVER_30}>$30 +</option>
      </select>
    </div>
  );
};

export { Filter };
