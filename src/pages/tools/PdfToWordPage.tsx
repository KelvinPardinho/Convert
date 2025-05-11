import { useState } from 'react';
import { FileText, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const PdfToWordPage = () => {
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
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));
    link.download = files[0].name.replace('.pdf', '.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Converter PDF para Word"
        description="Converta arquivos PDF para documentos Word editáveis. Mantenha a formatação original e edite seu conteúdo facilmente."
        keywords="PDF para Word, converter PDF, editar PDF, documento editável, OCR PDF"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Converter PDF para Word
            </h1>
            <p className="text-xl mb-0 text-blue-100">
              Transforme seus arquivos PDF em documentos Word editáveis com facilidade.
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
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold">PDF para Word</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do seu arquivo PDF e converta-o para um documento Word (.docx) editável.
                  A formatação original será preservada na medida do possível.
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
                      : 'btn-primary'
                  }`}
                >
                  {converting ? 'Convertendo...' : 'Converter para Word'}
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
                      Baixar arquivo Word
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como converter PDF para Word</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do seu arquivo PDF usando o botão acima.</li>
                <li>Clique no botão "Converter para Word" para iniciar a conversão.</li>
                <li>Aguarde a conclusão do processo de conversão.</li>
                <li>Baixe o arquivo Word convertido clicando no botão "Baixar arquivo Word".</li>
              </ol>
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">A formatação original será mantida?</h4>
                  <p className="text-gray-600 text-sm">
                    Nossa ferramenta preserva a maior parte da formatação original, incluindo texto, imagens e tabelas. No entanto, documentos com layouts complexos podem apresentar pequenas diferenças.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Posso converter PDFs escaneados?</h4>
                  <p className="text-gray-600 text-sm">
                    Sim, nossa ferramenta utiliza tecnologia OCR (Reconhecimento Óptico de Caracteres) para converter PDFs escaneados em texto editável.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Qual é o tamanho máximo de arquivo suportado?</h4>
                  <p className="text-gray-600 text-sm">
                    Atualmente, o tamanho máximo suportado é de 10MB. Para arquivos maiores, recomendamos dividir o PDF em partes menores.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Meus arquivos são seguros?</h4>
                  <p className="text-gray-600 text-sm">
                    Sim, seus arquivos são processados localmente no seu navegador e não são enviados para nossos servidores. Após a conversão, os arquivos são automaticamente excluídos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PdfToWordPage;