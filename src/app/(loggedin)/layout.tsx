import { Suspense } from "react";
import Navbar from "./Navbar";
import LoadingSpinner from "@/components/LoadingSpinner";

const LoggedinLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        {children}
      </div>
    </Suspense>
  );
};

export default LoggedinLayout;
