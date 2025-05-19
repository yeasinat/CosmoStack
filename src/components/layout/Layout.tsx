import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
