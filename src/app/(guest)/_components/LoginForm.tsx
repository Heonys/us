"use client";
import type { FormType } from "@/types";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import InputForm from "./InputForm";
import { formSchema } from "@/utils/validation";
import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value: FormType) => {
    try {
      setIsLoading(true);
      const response = await signIn("credentials", {
        identity: value.id,
        password: value.password,
        redirect: false,
        callbackUrl: "/home",
      });
      if (!response?.ok) {
        toast.error("로그인에 실패하였습니다");
      } else {
        router.push(response.url!);
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("로그인에 실패하였습니다");
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col max-w-[370px] m-auto h-screen items-center justify-center gap-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Image
        src="/images/logo.png"
        width="210"
        height="210"
        alt="logo"
        priority
      />
      <InputForm
        label="아이디"
        type="email"
        placeholder="아이디를 입력해 주세요"
        register={register("id")}
        error={errors.id?.message}
      />
      <InputForm
        label="패스워드"
        type="password"
        placeholder="패스워드를 입력해 주세요"
        register={register("password")}
        error={errors.password?.message}
      />
      <button className="btn bg-[#13C296] text-base-100 w-full">로그인</button>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {isLoading && <LoadingSpinner />}
    </form>
  );
};

export default LoginForm;
