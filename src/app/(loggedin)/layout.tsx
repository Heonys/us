import Navbar from "./Navbar";

const LoggedinLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LoggedinLayout;
