"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data } = useSession();

  const handleLogout = async () => {
    const response: any = await signOut({
      redirect: false,
      callbackUrl: "/login",
    });

    router.push(response.url);
  };

  return (
    <nav className="bg-white  flex items-center justify-between mx-auto p-6">
      <Link href="/home">
        <Image src="/images/logo.png" alt="logo" width="52" height="52" />
      </Link>
      <button
        className="btn btn-outline border-[#13C296] text-[#13C296] btn-sm"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </nav>
  );
};

export default Navbar;
