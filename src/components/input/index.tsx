type InputProps = {
  className?: string;
  placeholder: string;
  value: string;
  type: string;
  setValue: (value: string) => void;
};

const Input = ({
  className,
  placeholder,
  value,
  type,
  setValue,
}: InputProps) => {
  return (
    <input
      className={`bg-gray-300/20 focus:ring-2 focus:ring-white text-white placeholder:text-white 
        border border-gray-200 rounded p-4 ${className}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
