import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/16/solid';
import userIcon from '../../assets/avatar.png';
import { Container } from '../container/container';

const Header = () => {
  return (
    <header className='border-b-[2px] border-b-gray-200'>
      <Container>
        <div className='flex min-h-[50px] items-center md:min-h-14'>
          <div>
            <a href='/' className='font-semibold'>
              X-course task / Bulavintseva Karyna
            </a>
          </div>
          <div className='flex grow justify-end gap-7'>
            <div className='relative flex items-center p-2'>
              <span className='absolute right-0 top-0 block flex h-5 w-5 items-center justify-center rounded-full bg-[#fdba21] text-xs'>
                1
              </span>
              <ShoppingCartIcon className='h-7 w-7 ' />
            </div>
            <div className='hidden gap-7 md:flex'>
              <div className='flex items-center'>
                <button className='flex-auto flex-shrink-0  flex-grow-0 rounded-md  bg-[#4294FF] px-2 py-1 text-[#fffaff]'>
                  Sign out
                </button>
              </div>
              <div className='flex h-[40px] items-center gap-[6px]'>
                <img src={userIcon} className='h-full max-w-full' />
                <p>Username</p>
              </div>
            </div>
            <div className='flex items-center md:hidden'>
              <button>
                <Bars3Icon className='h-6 w-6' />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
