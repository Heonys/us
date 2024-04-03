import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <Image src="/images/logo.png" alt="logo" width="52" height="52" />
      <button className="btn btn-outline border-[#13C296] text-[#13C296] btn-sm">
        로그아웃
      </button>
    </nav>
  );
};

export default Navbar;
