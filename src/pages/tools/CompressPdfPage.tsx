import { useState } from 'react';
import { FileArchive, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const CompressPdfPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [compressing, setCompressing] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<string>('medium');
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);

  const handleFilesSelected = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    setCompressed(false);
    setError(null);
    
    if (selectedFiles.length > 0) {
      setOriginalSize(selectedFiles[0].size);
    } else {
      setOriginalSize(null);
    }
    
    setCompressedSize(null);
  };

  const handleCompress = () => {
    if (files.length === 0) {
      setError('Por favor, selecione um arquivo PDF para comprimir.');
      return;
    }

    setCompressing(true);
    setError(null);

    // Simulação de compressão (em um app real, isso seria substituído pela lógica de compressão)
    setTimeout(() => {
      setCompressing(false);
      setCompressed(true);
      
      // Simulação de tamanho comprimido
      let compressionRatio;
      switch (compressionLevel) {
        case 'low':
          compressionRatio = 0.8;
          break;
        case 'medium':
          compressionRatio = 0.6;
          break;
        case 'high':
          compressionRatio = 0.4;
          break;
        case 'extreme':
          compressionRatio = 0.25;
          break;
        default:
          compressionRatio = 0.6;
      }
      
      if (originalSize) {
        setCompressedSize(Math.round(originalSize * compressionRatio));
      }
    }, 2000);
  };

  const handleDownload = () => {
    // Simulação de download (em um app real, isso seria substituído pela lógica de download)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/pdf' }));
    link.download = files[0].name.replace('.pdf', '_comprimido.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Função para formatar o tamanho do arquivo
  const formatFileSize = (bytes: number | null): string => {
    if (bytes === null) return '-';
    
    if (bytes < 1024) {
      return bytes + ' B';
    } else if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(1) + ' KB';
    } else if (bytes < 1024 * 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    } else {
      return (bytes / (1024 * 1024 * 1024)).toFixed(1) + ' GB';
    }
  };

  // Cálculo da redução de tamanho em porcentagem
  const calculateReduction = (): string => {
    if (originalSize && compressedSize) {
      const reduction = ((originalSize - compressedSize) / originalSize) * 100;
      return reduction.toFixed(1) + '%';
    }
    return '-';
  };

  return (
    <>
      <SEO
        title="Comprimir PDF"
        description="Reduza o tamanho dos seus arquivos PDF sem perder qualidade. Comprima PDFs para facilitar o compartilhamento por e-mail ou upload."
        keywords="comprimir PDF, reduzir tamanho PDF, otimizar PDF, PDF menor, compressão PDF"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Comprimir PDF
            </h1>
            <p className="text-xl mb-0 text-red-100">
              Reduza o tamanho dos seus arquivos PDF mantendo a qualidade.
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
                  <FileArchive className="h-6 w-6 text-red-600 mr-2" />
                  <h2 className="text-2xl font-bold">Comprimir PDF</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do seu arquivo PDF e reduza seu tamanho para facilitar o compartilhamento.
                  Escolha o nível de compressão de acordo com suas necessidades.
                </p>
              </div>

              <div className="space-y-6">
                <FileUploader
                  acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
                  maxFiles={1}
                  maxSize={104857600} // 100MB
                  onFilesSelected={handleFilesSelected}
                  label="Arraste e solte seu arquivo PDF aqui, ou clique para selecionar"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nível de compressão
                  </label>
                  <select
                    value={compressionLevel}
                    onChange={(e) => setCompressionLevel(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  >
                    <option value="low">Baixo - Melhor qualidade</option>
                    <option value="medium">Médio - Boa qualidade</option>
                    <option value="high">Alto - Qualidade reduzida</option>
                    <option value="extreme">Extremo - Menor tamanho possível</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Escolha "Baixo" para documentos com imagens de alta qualidade ou "Alto" para reduzir significativamente o tamanho.
                  </p>
                </div>

                {error && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleCompress}
                  disabled={files.length === 0 || compressing || compressed}
                  className={`w-full btn ${
                    files.length === 0 || compressing || compressed
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
                  }`}
                >
                  {compressing ? 'Comprimindo...' : 'Comprimir PDF'}
                </button>

                {compressed && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Compressão concluída com sucesso!</span>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Resultado da compressão:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-600">Tamanho original:</div>
                        <div className="font-medium">{formatFileSize(originalSize)}</div>
                        
                        <div className="text-gray-600">Tamanho comprimido:</div>
                        <div className="font-medium">{formatFileSize(compressedSize)}</div>
                        
                        <div className="text-gray-600">Redução:</div>
                        <div className="font-medium text-green-600">{calculateReduction()}</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar PDF comprimido
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como comprimir um PDF</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do seu arquivo PDF usando o botão acima.</li>
                <li>Selecione o nível de compressão desejado.</li>
                <li>Clique no botão "Comprimir PDF" para iniciar o processo.</li>
                <li>Após a conclusão, verifique o resultado da compressão.</li>
                <li>Baixe o arquivo PDF comprimido clicando no botão "Baixar PDF comprimido".</li>
              </ol>
            </div>

            {/* Compression Levels */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Níveis de compressão explicados</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Baixo - Melhor qualidade</h4>
                  <p className="text-gray-600 text-sm">
                    Compressão leve que mantém alta qualidade visual. Ideal para documentos com imagens detalhadas, gráficos ou quando a qualidade é essencial. Redução típica: 20-30%.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Médio - Boa qualidade</h4>
                  <p className="text-gray-600 text-sm">
                    Equilíbrio entre tamanho e qualidade. Adequado para a maioria dos documentos, incluindo relatórios, apresentações e documentos com imagens. Redução típica: 40-50%.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Alto - Qualidade reduzida</h4>
                  <p className="text-gray-600 text-sm">
                    Compressão significativa com alguma perda de qualidade visível, especialmente em imagens. Bom para documentos que precisam ser enviados por e-mail ou quando o tamanho é mais importante que a qualidade. Redução típica: 60-70%.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Extremo - Menor tamanho possível</h4>
                  <p className="text-gray-600 text-sm">
                    Máxima compressão com perda considerável de qualidade. Use apenas quando o tamanho do arquivo é crítico e a qualidade visual é secundária. Redução típica: 75-85%.
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

export default CompressPdfPage;