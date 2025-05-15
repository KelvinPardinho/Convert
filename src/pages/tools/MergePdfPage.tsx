import { useState } from 'react';
import { FilePlus, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const MergePdfPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [merging, setMerging] = useState(false);
  const [merged, setMerged] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    setMerged(false);
    setError(null);
  };

  const handleMerge = () => {
    if (files.length < 2) {
      setError('Por favor, selecione pelo menos dois arquivos PDF para mesclar.');
      return;
    }

    setMerging(true);
    setError(null);

    // Simulação de mesclagem (em um app real, isso seria substituído pela lógica de mesclagem)
    setTimeout(() => {
      setMerging(false);
      setMerged(true);
    }, 2000);
  };

  const handleDownload = () => {
    // Simulação de download (em um app real, isso seria substituído pela lógica de download)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/pdf' }));
    link.download = 'documentos_mesclados.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Mesclar PDFs"
        description="Combine múltiplos arquivos PDF em um único documento. Mescle PDFs facilmente e mantenha a qualidade original."
        keywords="mesclar PDF, combinar PDF, juntar PDF, unir PDF"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Mesclar PDFs
            </h1>
            <p className="text-xl mb-0 text-blue-100">
              Combine vários arquivos PDF em um único documento.
            </p>
          </div>
        </div>
      </section>

      {/* Merge Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FilePlus className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold">Mesclar PDFs</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload dos arquivos PDF que você deseja combinar.
                  Arraste os arquivos para reorganizá-los na ordem desejada.
                </p>
              </div>

              <div className="space-y-6">
                <FileUploader
                  acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
                  maxFiles={10}
                  maxSize={10485760} // 10MB por arquivo
                  onFilesSelected={handleFilesSelected}
                  label="Arraste e solte seus arquivos PDF aqui, ou clique para selecionar"
                />

                {error && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleMerge}
                  disabled={files.length < 2 || merging || merged}
                  className={`w-full btn ${
                    files.length < 2 || merging || merged
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
                  }`}
                >
                  {merging ? 'Mesclando...' : 'Mesclar PDFs'}
                </button>

                {merged && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>PDFs mesclados com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar PDF Mesclado
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como mesclar PDFs</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload dos arquivos PDF que deseja combinar.</li>
                <li>Organize os arquivos na ordem desejada.</li>
                <li>Clique no botão "Mesclar PDFs" para iniciar o processo.</li>
                <li>Baixe o arquivo PDF mesclado.</li>
              </ol>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Dicas para mesclar PDFs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Ordem dos arquivos:</strong> Os PDFs serão combinados na ordem em que aparecem na lista. Organize-os conforme necessário.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Tamanho dos arquivos:</strong> Cada arquivo pode ter até 10MB. Para arquivos maiores, considere comprimi-los primeiro.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Qualidade:</strong> A qualidade original dos PDFs será mantida no arquivo mesclado.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MergePdfPage;