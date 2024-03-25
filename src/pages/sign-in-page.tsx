import userIcon from '.././assets/avatar.png';
import { Container } from '../components/container/container';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { cn } from '../utils/cn';

interface IFormInputs {
  username: string;
}

const SignInPage = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInputs>({ mode: 'onChange' });

  const onSubmit = (data: IFormInputs) => {
    const { username } = data;
    signin(username, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className='py-6'>
      <Container>
        <div className='flex justify-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='rounded-md p-8 shadow-lg '
          >
            <div className='mb-4 flex items-center justify-center'>
              <p className='text-xl font-bold tracking-wide'>Sign in</p>
            </div>

            <div className='flex items-center justify-center'>
              <div className='max-w-28'>
                <img src={userIcon} />
              </div>
            </div>

            <div className=' my-5 flex flex-col gap-1'>
              <label htmlFor='name' className='text-center font-semibold'>
                Username
              </label>
              <input
                {...register('username', {
                  required: 'This field is required',
                  maxLength: {
                    value: 16,
                    message: 'Cannot be longer than 16 characters',
                  },
                  minLength: {
                    value: 4,
                    message: 'Cannot be shorter than 4 characters',
                  },
                })}
                id='name'
                placeholder='Enter username'
                autoComplete='off'
                className={cn(
                  'rounded-md border-[2px] border-gray-300 px-1 py-1 outline-none placeholder:text-gray-300 focus:border-[#4294FF]',
                  { 'border-red-600': errors?.username?.message },
                )}
              />
              <div className='min-h-6 text-red-600'>
                {errors?.username && (
                  <p className='text-wrap text-xs'>
                    {errors?.username?.message || 'Error'}
                  </p>
                )}
              </div>
            </div>

            <div className='flex items-center justify-end'>
              <button
                disabled={!isValid}
                className=' rounded-md bg-[#4294FF] px-2 py-1 text-white disabled:opacity-75'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export { SignInPage };
