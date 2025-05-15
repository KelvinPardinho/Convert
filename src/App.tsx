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
import PdfToExcelPage from './pages/tools/PdfToExcelPage';
import SignPdfPage from './pages/tools/SignPdfPage';
import AdminLayout from './components/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogEditor from './pages/admin/BlogEditor';
import BlogList from './pages/admin/BlogList';

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
        <Route path="ferramentas/pdf-para-excel" element={<PdfToExcelPage />} />
        <Route path="ferramentas/assinar-pdf" element={<SignPdfPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminLogin />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/new" element={<BlogEditor />} />
        <Route path="blog/edit/:id" element={<BlogEditor />} />
      </Route>
    </Routes>
  );
}

export default App;