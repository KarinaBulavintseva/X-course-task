import { XMarkIcon } from '@heroicons/react/20/solid';
import userIcon from '../../assets/avatar.png';
import { cn } from '../../utils';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const handleSignOut = () => {
    signout(() => navigate('/', { replace: true }));
  };

  return (
    <div
      className={cn(
        'fixed right-0 top-0 z-20 h-full w-2/4 translate-x-[100%] bg-white  transition-[transform] duration-300 ease-out  md:hidden',
        { 'translate-x-0': open },
      )}
    >
      <div className=' border-b-[2px] border-b-gray-200 px-3 py-3'>
        <div>
          <button onClick={() => {}}>
            <XMarkIcon className='h-7 w-7 ' onClick={onClose} />
          </button>
        </div>
        <div>
          <div className='max-h-[80px] max-w-[80px]'>
            <img src={userIcon}></img>
          </div>
          <p className='font-semibold '>{user}</p>
        </div>
      </div>

      <div className='px-3 pt-3'>
        <button
          onClick={handleSignOut}
          className='flex-auto flex-shrink-0  flex-grow-0 rounded-md  bg-[#4294FF] px-2 py-1 text-[#fffaff]'
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export { Drawer };
