import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOption from "@/app/api/auth/[...nextauth]/authOptions";
import LoginForm from "@/app/(guest)/_components/LoginForm";

const LoginPage = async () => {
  const session = await getServerSession(authOption);

  if (session?.user) {
    redirect("/home");
  }

  return <LoginForm />;
};

export default LoginPage;
