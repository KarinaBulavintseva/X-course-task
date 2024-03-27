import { useParams } from 'react-router-dom';
import mockData from '../../data/mock-data.json';
import imageNotFound from '../../assets/not-found.jpg';
import { Book } from '../../types';
import { AddToCartPanel } from '../../components/add-to-cart-panel/add-to-cart-panel';
import { Container } from '../../components/container/container';

export function BookPage() {
  const { bookId } = useParams();

  const currentBook = mockData.books.find(
    (book: Book) => book.id === Number(bookId),
  ) as Book;

  const { title, author, level, amount, description, tags, image } =
    currentBook;

  const availableAmount = amount || 0;

  const bookImage = image.trim() || imageNotFound;

  const bookTags = tags.join(' ');

  return (
    <div className='pt-4'>
      <Container>
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className='grow '>
            <div className='flex gap-8'>
              <div>
                <img src={bookImage} />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p>Author : {author}</p>
                <p>Book level : {level}</p>
                <p>Amount : {availableAmount}</p>
                <p className='flex gap-1'>Tags : {bookTags}</p>
              </div>
            </div>
            <p className='mt-2 text-justify'>{description}</p>
          </div>
          <AddToCartPanel book={currentBook}></AddToCartPanel>
        </div>
      </Container>
    </div>
  );
}
