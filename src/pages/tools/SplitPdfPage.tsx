import { useState } from 'react';
import { Scissors, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const SplitPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pageRange, setPageRange] = useState<string>('');
  const [splitting, setSplitting] = useState(false);
  const [split, setSplit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelected = (selectedFiles: File[]) => {
    if (selectedFiles.length > 0) {
      setFile(selectedFiles[0]);
      setSplit(false);
      setError(null);
    }
  };

  const handleSplit = () => {
    if (!file) {
      setError('Por favor, selecione um arquivo PDF para dividir.');
      return;
    }

    if (!pageRange) {
      setError('Por favor, especifique o intervalo de páginas.');
      return;
    }

    // Validação básica do formato do intervalo de páginas
    const isValidRange = /^(\d+(-\d+)?)(,\s*\d+(-\d+)?)*$/.test(pageRange);
    if (!isValidRange) {
      setError('Formato de intervalo inválido. Use números e hífens (ex: 1-3, 5, 7-9).');
      return;
    }

    setSplitting(true);
    setError(null);

    // Simulação de divisão (em um app real, isso seria substituído pela lógica de divisão)
    setTimeout(() => {
      setSplitting(false);
      setSplit(true);
    }, 2000);
  };

  const handleDownload = () => {
    // Simulação de download (em um app real, isso seria substituído pela lógica de download)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/zip' }));
    link.download = 'paginas_divididas.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Dividir PDF"
        description="Divida arquivos PDF em múltiplos documentos. Extraia páginas específicas ou divida em intervalos regulares."
        keywords="dividir PDF, separar PDF, extrair páginas, split PDF"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Dividir PDF
            </h1>
            <p className="text-xl mb-0 text-purple-100">
              Divida seu arquivo PDF em múltiplos documentos ou extraia páginas específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Scissors className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold">Dividir PDF</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do arquivo PDF que você deseja dividir e especifique as páginas ou intervalos desejados.
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
                    Intervalo de Páginas
                  </label>
                  <input
                    type="text"
                    value={pageRange}
                    onChange={(e) => setPageRange(e.target.value)}
                    placeholder="Ex: 1-3, 5, 7-9"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Separe os intervalos por vírgula. Use hífen para intervalos (ex: 1-5).
                  </p>
                </div>

                {error && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleSplit}
                  disabled={!file || !pageRange || splitting || split}
                  className={`w-full btn ${
                    !file || !pageRange || splitting || split
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500'
                  }`}
                >
                  {splitting ? 'Dividindo...' : 'Dividir PDF'}
                </button>

                {split && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>PDF dividido com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar Páginas (ZIP)
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como dividir um PDF</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do arquivo PDF que deseja dividir.</li>
                <li>Especifique o intervalo de páginas desejado.</li>
                <li>Clique no botão "Dividir PDF" para iniciar o processo.</li>
                <li>Baixe as páginas divididas em um arquivo ZIP.</li>
              </ol>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Dicas para dividir PDFs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Intervalos:</strong> Você pode especificar múltiplos intervalos separados por vírgula (ex: 1-3, 5, 7-9).</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Páginas individuais:</strong> Para extrair páginas individuais, use números separados por vírgula (ex: 1, 3, 5).</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Qualidade:</strong> A qualidade original do PDF será mantida em todas as páginas extraídas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SplitPdfPage;