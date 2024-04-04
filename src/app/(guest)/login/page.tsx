import { getServerSession } from "next-auth";
import authOption from "@/app/api/auth/[...nextauth]/authOptions";
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession(authOption);

  if (session?.user) {
    redirect("/home");
  }

  return <LoginForm />;
};

export default LoginPage;
