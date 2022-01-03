import Navbar from "./navs/Navbar";
import Footer from "./navs/Footer";

export default function Landing({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
