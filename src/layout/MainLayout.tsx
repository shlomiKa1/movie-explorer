import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./style.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
