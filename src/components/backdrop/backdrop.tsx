import { cn } from '../../utils';

type BackdropProps = {
  onClick: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-10 h-full w-full bg-black/30 transition-[opacity] duration-[200ms] ease-out md:hidden',
      )}
      onClick={onClick}
    ></div>
  );
};

export { Backdrop };
