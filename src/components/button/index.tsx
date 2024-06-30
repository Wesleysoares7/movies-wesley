type ButtonProps = {
  children: string;
  handleClick: () => void;
  disabled?: boolean;
  className?: string;
  color?: string;
};

const Button = ({
  children,
  handleClick,
  disabled,
  className,
  color = "bg-red-600",
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`py-3 text-sm text-white rounded-sm font-bold shadow-sm
         hover:brightness-75 transition-all duration-300 ease-in-out disabled:cursor-not-allowed
         disabled:bg-gray-500/50
        ${color} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
