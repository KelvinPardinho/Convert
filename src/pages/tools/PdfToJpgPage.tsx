import { useState } from 'react';
import { Image, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const PdfToJpgPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(90);
  const [allPages, setAllPages] = useState<boolean>(true);
  const [selectedPages, setSelectedPages] = useState<string>('');

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

    if (!allPages && !selectedPages) {
      setError('Por favor, selecione as páginas que deseja converter ou escolha "Todas as páginas".');
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
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/zip' }));
    link.download = files[0].name.replace('.pdf', '_imagens.zip');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Converter PDF para JPG"
        description="Converta arquivos PDF em imagens JPG de alta qualidade. Extraia páginas específicas ou converta o documento inteiro."
        keywords="PDF para JPG, converter PDF, extrair imagens, PDF para imagem, JPG"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Converter PDF para JPG
            </h1>
            <p className="text-xl mb-0 text-purple-100">
              Transforme suas páginas PDF em imagens JPG de alta qualidade.
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
                  <Image className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold">PDF para JPG</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do seu arquivo PDF e converta-o para imagens JPG.
                  Você pode converter todas as páginas ou selecionar páginas específicas.
                </p>
              </div>

              <div className="space-y-6">
                <FileUploader
                  acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
                  maxFiles={1}
                  maxSize={20971520} // 20MB
                  onFilesSelected={handleFilesSelected}
                  label="Arraste e solte seu arquivo PDF aqui, ou clique para selecionar"
                />

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Qualidade da imagem
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="range"
                        min="10"
                        max="100"
                        step="10"
                        value={quality}
                        onChange={(e) => setQuality(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 min-w-[40px]">{quality}%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Páginas para converter
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="allPages"
                          name="pageSelection"
                          checked={allPages}
                          onChange={() => setAllPages(true)}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="allPages" className="ml-2 block text-sm text-gray-700">
                          Todas as páginas
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="selectedPages"
                          name="pageSelection"
                          checked={!allPages}
                          onChange={() => setAllPages(false)}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="selectedPages" className="ml-2 block text-sm text-gray-700">
                          Páginas específicas
                        </label>
                      </div>
                      {!allPages && (
                        <div className="pl-6">
                          <input
                            type="text"
                            value={selectedPages}
                            onChange={(e) => setSelectedPages(e.target.value)}
                            placeholder="Ex: 1-3, 5, 7-9"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-sm"
                          />
                          <p className="mt-1 text-xs text-gray-500">
                            Separe as páginas por vírgula. Use hífen para intervalos (ex: 1-5).
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

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
                      : 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500'
                  }`}
                >
                  {converting ? 'Convertendo...' : 'Converter para JPG'}
                </button>

                {converted && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Conversão concluída com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar imagens (ZIP)
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como converter PDF para JPG</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do seu arquivo PDF usando o botão acima.</li>
                <li>Selecione a qualidade da imagem desejada (quanto maior a porcentagem, melhor a qualidade).</li>
                <li>Escolha se deseja converter todas as páginas ou apenas páginas específicas.</li>
                <li>Clique no botão "Converter para JPG" para iniciar a conversão.</li>
                <li>Após a conclusão, baixe as imagens em formato ZIP.</li>
              </ol>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Dicas para conversão de PDF para JPG</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Qualidade vs. Tamanho:</strong> Uma qualidade mais alta resultará em imagens maiores. Escolha 70-80% para um bom equilíbrio entre qualidade e tamanho.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Documentos grandes:</strong> Para PDFs com muitas páginas, considere converter apenas as páginas necessárias para reduzir o tempo de processamento.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Resolução:</strong> As imagens serão convertidas com a resolução original do PDF. PDFs de alta resolução resultarão em imagens JPG de alta qualidade.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PdfToJpgPage;