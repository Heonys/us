"use client";
import type { FormType } from "@/types";
import { useForm } from "react-hook-form";
import Image from "next/image";
import InputForm from "./InputForm";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormType>();
  const router = useRouter();

  const onSubmit = (value: FormType) => {
    router.push("/home");
  };

  return (
    <form
      className="flex flex-col max-w-[370px] m-auto h-screen items-center justify-center gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image src="/images/logo.png" width="210" height="210" alt="logo" />
      <InputForm
        label="아이디"
        type="email"
        placeholder="아이디를 입력해 주세요"
        register={register("id")}
      />
      <InputForm
        label="패스워드"
        type="password"
        placeholder="패스워드를 입력해 주세요"
        register={register("password")}
      />
      <button className="btn bg-[#13C296] text-base-100 w-full">로그인</button>
    </form>
  );
};

export default LoginForm;
