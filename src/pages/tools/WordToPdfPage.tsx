import { useState } from 'react';
import { FileOutput, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const WordToPdfPage = () => {
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
      setError('Por favor, selecione um arquivo Word para converter.');
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
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/pdf' }));
    link.download = files[0].name.replace('.docx', '.pdf').replace('.doc', '.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Converter Word para PDF"
        description="Converta documentos Word para arquivos PDF de alta qualidade. Preserve a formatação original e compartilhe seus documentos com segurança."
        keywords="Word para PDF, converter Word, DOCX para PDF, DOC para PDF, converter documento"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Converter Word para PDF
            </h1>
            <p className="text-xl mb-0 text-emerald-100">
              Transforme seus documentos Word em arquivos PDF de alta qualidade.
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
                  <FileOutput className="h-6 w-6 text-emerald-600 mr-2" />
                  <h2 className="text-2xl font-bold">Word para PDF</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do seu documento Word (.doc ou .docx) e converta-o para um arquivo PDF.
                  A formatação original será preservada para garantir a melhor qualidade.
                </p>
              </div>

              <div className="space-y-6">
                <FileUploader
                  acceptedFileTypes={{
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
                    'application/msword': ['.doc'],
                  }}
                  maxFiles={1}
                  maxSize={10485760} // 10MB
                  onFilesSelected={handleFilesSelected}
                  label="Arraste e solte seu arquivo Word aqui, ou clique para selecionar"
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
                      : 'btn-secondary'
                  }`}
                >
                  {converting ? 'Convertendo...' : 'Converter para PDF'}
                </button>

                {converted && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Conversão concluída com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn btn-secondary flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar arquivo PDF
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como converter Word para PDF</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do seu documento Word (.doc ou .docx) usando o botão acima.</li>
                <li>Clique no botão "Converter para PDF" para iniciar a conversão.</li>
                <li>Aguarde a conclusão do processo de conversão.</li>
                <li>Baixe o arquivo PDF convertido clicando no botão "Baixar arquivo PDF".</li>
              </ol>
            </div>

            {/* Benefits */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Vantagens de converter Word para PDF</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Compatibilidade universal:</strong> Os arquivos PDF podem ser visualizados em qualquer dispositivo ou sistema operacional sem perder a formatação.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Segurança:</strong> Os PDFs podem ser protegidos com senha e permissões de acesso, garantindo a segurança dos seus documentos.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Tamanho reduzido:</strong> Os arquivos PDF geralmente são menores que os documentos Word, facilitando o compartilhamento por e-mail ou upload.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Preservação da formatação:</strong> Garante que seu documento seja visualizado exatamente como foi criado, independentemente de quem o abrir.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordToPdfPage;