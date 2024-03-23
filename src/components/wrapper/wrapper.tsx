type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col overflow-x-hidden'>
      {children}
    </div>
  );
};

export { Wrapper };
