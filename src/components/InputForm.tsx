import { UseFormRegisterReturn } from "react-hook-form";
import type { FormType } from "@/types";

type Props = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn<keyof FormType>;
  type?: React.ComponentPropsWithoutRef<"input">["type"];
};

const InputForm = ({ label, placeholder, register, type = "text" }: Props) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        {...register}
      />
    </label>
  );
};

export default InputForm;
