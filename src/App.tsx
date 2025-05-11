import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PdfToWordPage from './pages/tools/PdfToWordPage';
import WordToPdfPage from './pages/tools/WordToPdfPage';
import PdfToJpgPage from './pages/tools/PdfToJpgPage';
import JpgToPdfPage from './pages/tools/JpgToPdfPage';
import CompressPdfPage from './pages/tools/CompressPdfPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="ferramentas" element={<ToolsPage />} />
        <Route path="ferramentas/pdf-para-word" element={<PdfToWordPage />} />
        <Route path="ferramentas/word-para-pdf" element={<WordToPdfPage />} />
        <Route path="ferramentas/pdf-para-jpg" element={<PdfToJpgPage />} />
        <Route path="ferramentas/jpg-para-pdf" element={<JpgToPdfPage />} />
        <Route path="ferramentas/comprimir-pdf" element={<CompressPdfPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;