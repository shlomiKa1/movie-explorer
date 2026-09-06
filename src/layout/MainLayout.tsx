import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./style.css";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
