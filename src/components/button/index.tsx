type ButtonProps = {
  children: string;
  handleClick: () => void;
  className?: string;
  color?: string;
};

const Button = ({
  children,
  handleClick,
  className,
  color = "bg-red-600",
}: ButtonProps) => {
  return (
    <button
      className={`py-3 text-sm text-white rounded-sm font-bold shadow-sm
         hover:brightness-75 transition-all duration-300 ease-in-out
        ${color} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
