import Navbar from "./Navbar";

const LoggedinLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default LoggedinLayout;
