import { VscError } from "react-icons/vsc";

type FormErrorProp = {
  children: string;
};

const FormError = ({ children }: FormErrorProp) => {
  return (
    <div className="flex gap-1 text-red-600 items-center justify-center">
      <VscError />
      <p>{children}</p>
    </div>
  );
};

export default FormError;
