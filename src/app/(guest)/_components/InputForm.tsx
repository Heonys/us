import { UseFormRegisterReturn } from "react-hook-form";
import type { FormType } from "@/types";

type Props = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn<keyof FormType>;
  error?: string;
  type?: React.ComponentPropsWithoutRef<"input">["type"];
};

const InputForm = ({
  label,
  placeholder,
  register,
  error,
  type = "text",
}: Props) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        required
        {...register}
      />
      <div className="label">
        <span className="label-text-alt text-red-500">{error}</span>
      </div>
    </label>
  );
};

export default InputForm;
