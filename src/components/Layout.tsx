import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdBanner from './AdBanner';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AdBanner position="top" />
        <Outlet />
        <AdBanner position="bottom" />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;