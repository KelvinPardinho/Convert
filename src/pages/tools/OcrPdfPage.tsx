import { useState } from 'react';
import { FileSearch, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const OcrPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState<string>('por');
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const languages = [
    { code: 'por', name: 'Português' },
    { code: 'eng', name: 'Inglês' },
    { code: 'spa', name: 'Espanhol' },
    { code: 'fra', name: 'Francês' },
    { code: 'deu', name: 'Alemão' },
    { code: 'ita', name: 'Italiano' },
  ];

  const handleFileSelected = (selectedFiles: File[]) => {
    if (selectedFiles.length > 0) {
      setFile(selectedFiles[0]);
      setProcessed(false);
      setError(null);
    }
  };

  const handleProcess = () => {
    if (!file) {
      setError('Por favor, selecione um arquivo PDF para processar.');
      return;
    }

    setProcessing(true);
    setError(null);

    // Simulação de processamento OCR (em um app real, isso seria substituído pela lógica de OCR)
    setTimeout(() => {
      setProcessing(false);
      setProcessed(true);
    }, 3000);
  };

  const handleDownload = () => {
    // Simulação de download (em um app real, isso seria substituído pela lógica de download)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/pdf' }));
    link.download = file!.name.replace('.pdf', '_ocr.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="OCR PDF - Reconhecimento de Texto"
        description="Converta PDFs digitalizados em texto pesquisável. Extraia texto de imagens e documentos escaneados com OCR."
        keywords="OCR PDF, reconhecimento de texto, PDF pesquisável, extrair texto"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              OCR PDF
            </h1>
            <p className="text-xl mb-0 text-cyan-100">
              Converta PDFs digitalizados em documentos com texto pesquisável.
            </p>
          </div>
        </div>
      </section>

      {/* OCR Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FileSearch className="h-6 w-6 text-cyan-600 mr-2" />
                  <h2 className="text-2xl font-bold">Reconhecimento de Texto (OCR)</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do seu PDF digitalizado e nossa tecnologia OCR irá extrair e reconhecer
                  todo o texto, tornando o documento pesquisável e editável.
                </p>
              </div>

              <div className="space-y-6">
                <FileUploader
                  acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
                  maxFiles={1}
                  maxSize={20971520} // 20MB
                  onFilesSelected={handleFileSelected}
                  label="Arraste e solte seu arquivo PDF aqui, ou clique para selecionar"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Idioma do Documento
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-sm text-gray-500">
                    Selecione o idioma principal do documento para melhor precisão no reconhecimento.
                  </p>
                </div>

                {error && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleProcess}
                  disabled={!file || processing || processed}
                  className={`w-full btn ${
                    !file || processing || processed
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500'
                  }`}
                >
                  {processing ? 'Processando...' : 'Processar OCR'}
                </button>

                {processed && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>OCR concluído com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar PDF Pesquisável
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como usar o OCR</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do seu PDF digitalizado ou escaneado.</li>
                <li>Selecione o idioma principal do documento.</li>
                <li>Clique em "Processar OCR" para iniciar o reconhecimento de texto.</li>
                <li>Baixe o PDF pesquisável após o processamento.</li>
              </ol>
            </div>

            {/* Features */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Recursos do OCR</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Reconhecimento Preciso:</strong> Nossa tecnologia OCR oferece alta precisão no reconhecimento de texto em diversos idiomas.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Múltiplos Idiomas:</strong> Suporte para vários idiomas, garantindo reconhecimento adequado de caracteres específicos.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Preservação do Layout:</strong> Mantém a formatação original do documento, incluindo fontes, imagens e layout.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Texto Pesquisável:</strong> O PDF resultante permite busca de texto e seleção/cópia de conteúdo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OcrPdfPage;