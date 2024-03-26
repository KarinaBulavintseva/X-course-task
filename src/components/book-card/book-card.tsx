import { Book } from '../../types';
import imageNotFound from '../../assets/not-found.jpg';
import { Link } from 'react-router-dom';

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  let { image } = book;
  if (!image.trim()) {
    image = imageNotFound;
  }
  return (
    <div className='flex w-[250px] flex-col place-self-stretch overflow-hidden rounded shadow-lg'>
      <div className='flex grow flex-col'>
        <Link to={`/books/${book.id}`}>
          <img className='height-[328px]' src={image} alt='book-image' />
        </Link>

        <div className='px-6 py-3'>
          <div className='mb-2 text-lg font-semibold '>{book.title}</div>
          <p className='text-base text-gray-700'>{book.author}</p>
        </div>
      </div>
      <div className='flex justify-between px-6 pb-2 pt-1'>
        <p className='font-bold'>{book.price} $</p>
        <Link
          to={`/books/${book.id}`}
          className='flex-auto flex-shrink-0 flex-grow-0 rounded-md border-[2px] border-[#4294FF] px-4 py-[2px] text-[#4294FF]'
        >
          View
        </Link>
      </div>
    </div>
  );
};

export { BookCard };
