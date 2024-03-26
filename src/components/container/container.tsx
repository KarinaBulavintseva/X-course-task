import { cn } from '../../utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'm-[0_auto] min-h-full max-w-screen-xl  px-[20px] md:px-[40px]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Container };
