import { useState } from 'react';
import { Lock, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const UnlockPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState<string>('');
  const [unlocking, setUnlocking] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelected = (selectedFiles: File[]) => {
    if (selectedFiles.length > 0) {
      setFile(selectedFiles[0]);
      setUnlocked(false);
      setError(null);
    }
  };

  const handleUnlock = () => {
    if (!file) {
      setError('Por favor, selecione um arquivo PDF para desbloquear.');
      return;
    }

    if (!password) {
      setError('Por favor, digite a senha do PDF.');
      return;
    }

    setUnlocking(true);
    setError(null);

    // Simulação de desbloqueio (em um app real, isso seria substituído pela lógica de desbloqueio)
    setTimeout(() => {
      setUnlocking(false);
      setUnlocked(true);
    }, 2000);
  };

  const handleDownload = () => {
    // Simulação de download (em um app real, isso seria substituído pela lógica de download)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/pdf' }));
    link.download = file!.name.replace('.pdf', '_desbloqueado.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Remover Senha do PDF"
        description="Remova a proteção por senha dos seus arquivos PDF. Desbloqueie documentos PDF protegidos de forma rápida e segura."
        keywords="remover senha PDF, desbloquear PDF, remover proteção PDF, PDF sem senha"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Remover Senha do PDF
            </h1>
            <p className="text-xl mb-0 text-red-100">
              Desbloqueie seus documentos PDF protegidos com senha.
            </p>
          </div>
        </div>
      </section>

      {/* Unlock Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-red-600 mr-2" />
                  <h2 className="text-2xl font-bold">Remover Senha</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do seu arquivo PDF protegido e digite a senha para removê-la.
                  O arquivo resultante será um PDF sem proteção.
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
                    Senha do PDF
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Digite a senha do PDF"
                  />
                </div>

                {error && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleUnlock}
                  disabled={!file || !password || unlocking || unlocked}
                  className={`w-full btn ${
                    !file || !password || unlocking || unlocked
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
                  }`}
                >
                  {unlocking ? 'Removendo senha...' : 'Remover Senha'}
                </button>

                {unlocked && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Senha removida com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar PDF Desbloqueado
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como remover a senha de um PDF</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do arquivo PDF protegido.</li>
                <li>Digite a senha atual do PDF.</li>
                <li>Clique em "Remover Senha" para iniciar o processo.</li>
                <li>Baixe o PDF desbloqueado.</li>
              </ol>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Informações Importantes</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Segurança:</strong> Você precisa conhecer a senha atual do PDF para removê-la. Esta ferramenta não pode quebrar ou descobrir senhas.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Privacidade:</strong> Todo o processamento é feito localmente no seu navegador. Seus arquivos e senhas não são enviados para nossos servidores.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Compatibilidade:</strong> Funciona com a maioria dos PDFs protegidos por senha, incluindo documentos criados com versões recentes do Adobe Acrobat.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnlockPdfPage;