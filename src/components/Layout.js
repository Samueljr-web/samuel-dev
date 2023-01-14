import { Navbar } from "./";
import { Footer } from "./";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/*" && <Navbar />}
      {children}
      {pathname !== "/*" && <Footer />}
    </>
  );
};

export default Layout;
