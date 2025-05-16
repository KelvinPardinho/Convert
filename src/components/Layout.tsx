import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdBanner from './AdBanner';
import { useThemeStore } from '../stores/themeStore';

const Layout = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header />
      <main className="flex-grow dark:bg-gray-900">
        <AdBanner position="top" />
        <Outlet />
        <AdBanner position="bottom" />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;