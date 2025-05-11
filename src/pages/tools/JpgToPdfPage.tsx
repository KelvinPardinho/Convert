import { useState } from 'react';
import { FileImage, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const JpgToPdfPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pageSize, setPageSize] = useState<string>('a4');
  const [orientation, setOrientation] = useState<string>('portrait');
  const [margin, setMargin] = useState<number>(10);

  const handleFilesSelected = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    setConverted(false);
    setError(null);
  };

  const handleConvert = () => {
    if (files.length === 0) {
      setError('Por favor, selecione pelo menos uma imagem para converter.');
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
    link.download = 'imagens_convertidas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Converter JPG para PDF"
        description="Converta imagens JPG, PNG e outros formatos para PDF. Combine múltiplas imagens em um único documento PDF organizado."
        keywords="JPG para PDF, converter imagem, PNG para PDF, combinar imagens, criar PDF"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Converter JPG para PDF
            </h1>
            <p className="text-xl mb-0 text-orange-100">
              Transforme suas imagens em documentos PDF de alta qualidade.
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
                  <FileImage className="h-6 w-6 text-orange-500 mr-2" />
                  <h2 className="text-2xl font-bold">JPG para PDF</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload das suas imagens (JPG, PNG, BMP, GIF) e converta-as para um único documento PDF.
                  Você pode adicionar várias imagens e organizá-las na ordem desejada.
                </p>
              </div>

              <div className="space-y-6">
                <FileUploader
                  acceptedFileTypes={{
                    'image/jpeg': ['.jpg', '.jpeg'],
                    'image/png': ['.png'],
                    'image/gif': ['.gif'],
                    'image/bmp': ['.bmp'],
                  }}
                  maxFiles={20}
                  maxSize={10485760} // 10MB por arquivo
                  onFilesSelected={handleFilesSelected}
                  label="Arraste e solte suas imagens aqui, ou clique para selecionar"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tamanho da página
                    </label>
                    <select
                      value={pageSize}
                      onChange={(e) => setPageSize(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                    >
                      <option value="a4">A4 (210 x 297 mm)</option>
                      <option value="a5">A5 (148 x 210 mm)</option>
                      <option value="letter">Carta (216 x 279 mm)</option>
                      <option value="legal">Ofício (216 x 356 mm)</option>
                      <option value="original">Tamanho original das imagens</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Orientação
                    </label>
                    <select
                      value={orientation}
                      onChange={(e) => setOrientation(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                      disabled={pageSize === 'original'}
                    >
                      <option value="portrait">Retrato</option>
                      <option value="landscape">Paisagem</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Margem (mm)
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="5"
                      value={margin}
                      onChange={(e) => setMargin(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700 min-w-[40px]">{margin} mm</span>
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
                      : 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400'
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
                      className="w-full btn bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400 flex items-center justify-center"
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
              <h3 className="text-xl font-semibold mb-4">Como converter JPG para PDF</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload das suas imagens usando o botão acima (você pode selecionar várias imagens de uma vez).</li>
                <li>Escolha o tamanho da página desejado para o PDF final.</li>
                <li>Selecione a orientação (retrato ou paisagem) se não estiver usando o tamanho original.</li>
                <li>Ajuste as margens conforme necessário.</li>
                <li>Clique no botão "Converter para PDF" para iniciar a conversão.</li>
                <li>Após a conclusão, baixe o arquivo PDF gerado.</li>
              </ol>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Dicas para conversão de JPG para PDF</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Organização:</strong> As imagens serão organizadas no PDF na ordem em que foram carregadas. Você pode remover e adicionar imagens para alterar a ordem.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Tamanho da página:</strong> Escolha "Tamanho original das imagens" se quiser que cada página do PDF tenha exatamente o mesmo tamanho da imagem original.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Margens:</strong> Defina as margens como 0 mm para maximizar o espaço da imagem na página, ou adicione margens para facilitar a impressão.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JpgToPdfPage;