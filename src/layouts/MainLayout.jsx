import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="bg-default py-3 text-white font-inter">
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="bg-default font-inter">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
