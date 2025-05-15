import { useState } from 'react';
import { FileSpreadsheet, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const PdfToExcelPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    setConverted(false);
    setError(null);
  };

  const handleConvert = () => {
    if (files.length === 0) {
      setError('Por favor, selecione um arquivo PDF para converter.');
      return;
    }

    setConverting(true);
    setError(null);

    // Simulação de conversão (em um app real, isso seria substituído pela lógica de conversão)
    setTimeout(() => {
      setConverting(false);
      setConverted(true);
    }, 2000);
  };

  const handleDownload = () => {
    // Simulação de download (em um app real, isso seria substituído pela lógica de download)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    link.download = files[0].name.replace('.pdf', '.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Converter PDF para Excel"
        description="Converta tabelas de PDF para planilhas Excel editáveis. Extraia dados tabulares com precisão."
        keywords="PDF para Excel, converter tabelas, extrair dados, PDF para planilha"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Converter PDF para Excel
            </h1>
            <p className="text-xl mb-0 text-green-100">
              Extraia dados de tabelas PDF para planilhas Excel editáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Converter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FileSpreadsheet className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold">PDF para Excel</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do seu arquivo PDF contendo tabelas e converta-o para uma planilha Excel editável.
                  Nossa ferramenta preserva o layout e formatação das tabelas.
                </p>
              </div>

              <div className="space-y-6">
                <FileUploader
                  acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
                  maxFiles={1}
                  maxSize={10485760} // 10MB
                  onFilesSelected={handleFilesSelected}
                  label="Arraste e solte seu arquivo PDF aqui, ou clique para selecionar"
                />

                {error && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleConvert}
                  disabled={files.length === 0 || converting || converted}
                  className={`w-full btn ${
                    files.length === 0 || converting || converted
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
                  }`}
                >
                  {converting ? 'Convertendo...' : 'Converter para Excel'}
                </button>

                {converted && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Conversão concluída com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar arquivo Excel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como converter PDF para Excel</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do seu arquivo PDF usando o botão acima.</li>
                <li>Clique no botão "Converter para Excel" para iniciar a conversão.</li>
                <li>Aguarde a conclusão do processo de conversão.</li>
                <li>Baixe o arquivo Excel convertido.</li>
              </ol>
            </div>

            {/* Features */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Recursos da conversão PDF para Excel</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Extração precisa:</strong> Nossa ferramenta detecta e extrai tabelas automaticamente, preservando a estrutura dos dados.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Múltiplas páginas:</strong> Converta PDFs com várias páginas, cada tabela será colocada em uma planilha separada.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Formatação preservada:</strong> Mantém cores, bordas e estilos de texto quando possível.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dados editáveis:</strong> O resultado é uma planilha Excel totalmente editável, pronta para análise e modificações.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PdfToExcelPage;