import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='main-container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export { Layout };
