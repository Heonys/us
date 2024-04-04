"use client";
import type { FormType } from "@/types";
import { useForm } from "react-hook-form";
import Image from "next/image";
import InputForm from "./InputForm";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/utils/validation";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const onSubmit = async (value: FormType) => {
    try {
      const response: any = await signIn("credentials", {
        identity: "johndoh@us-all.cc",
        password: "qwer1234",
        redirect: false,
        callbackUrl: "/home",
      });
      router.push(response.url);
    } catch (error) {
      toast.error("로그인에 실패하였습니다");
    }
  };

  return (
    <form
      className="flex flex-col max-w-[370px] m-auto h-screen items-center justify-center gap-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
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
      <Image src="/images/logo.png" width="210" height="210" alt="logo" />
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
    </form>
  );
};

export default LoginForm;
