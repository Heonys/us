import { z } from "zod";

export const formSchema = z.object({
  id: z
    .string()
    .min(1, { message: "아이디를 입력해주세요" })
    .email({ message: "이메일 형식으로 입력해주세요" }),
  password: z.string().min(1, { message: "패스워드를 입력해주세요" }),
});
