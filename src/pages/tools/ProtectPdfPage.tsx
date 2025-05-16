import { useState } from 'react';
import { Lock, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const ProtectPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [protecting, setProtecting] = useState(false);
  const [isProtected, setIsProtected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelected = (selectedFiles: File[]) => {
    if (selectedFiles.length > 0) {
      setFile(selectedFiles[0]);
      setIsProtected(false);
      setError(null);
    }
  };

  const handleProtect = () => {
    if (!file) {
      setError('Por favor, selecione um arquivo PDF para proteger.');
      return;
    }

    if (!password) {
      setError('Por favor, defina uma senha.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setProtecting(true);
    setError(null);

    // Simulação de proteção (em um app real, isso seria substituído pela lógica de proteção)
    setTimeout(() => {
      setProtecting(false);
      setIsProtected(true);
    }, 2000);
  };

  const handleDownload = () => {
    // Simulação de download (em um app real, isso seria substituído pela lógica de download)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/pdf' }));
    link.download = file!.name.replace('.pdf', '_protegido.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Proteger PDF com Senha"
        description="Adicione proteção por senha aos seus arquivos PDF. Proteja documentos confidenciais de forma segura."
        keywords="proteger PDF, senha PDF, criptografar PDF, segurança PDF"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Proteger PDF com Senha
            </h1>
            <p className="text-xl mb-0 text-gray-300">
              Adicione proteção por senha aos seus documentos PDF.
            </p>
          </div>
        </div>
      </section>

      {/* Protect Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-gray-600 mr-2" />
                  <h2 className="text-2xl font-bold">Proteger PDF</h2>
                </div>
                <p className="text-gray-600">
                  Adicione uma senha ao seu PDF para proteger o acesso ao documento.
                  Apenas pessoas com a senha poderão abrir e visualizar o conteúdo.
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

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Senha
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="Digite uma senha forte"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmar Senha
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="Digite a senha novamente"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleProtect}
                  disabled={!file || !password || protecting || isProtected}
                  className={`w-full btn ${
                    !file || !password || protecting || isProtected
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500'
                  }`}
                >
                  {protecting ? 'Protegendo...' : 'Proteger PDF'}
                </button>

                {isProtected && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>PDF protegido com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar PDF Protegido
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como proteger um PDF</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do arquivo PDF que deseja proteger.</li>
                <li>Digite uma senha forte (mínimo 6 caracteres).</li>
                <li>Confirme a senha digitando-a novamente.</li>
                <li>Clique em "Proteger PDF" para adicionar a proteção.</li>
                <li>Baixe o PDF protegido.</li>
              </ol>
            </div>

            {/* Security Tips */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Dicas de Segurança</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Senha Forte:</strong> Use uma combinação de letras maiúsculas, minúsculas, números e símbolos.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Armazenamento Seguro:</strong> Guarde a senha em um local seguro. Se você perder a senha, não será possível acessar o documento.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Compartilhamento:</strong> Ao compartilhar o PDF protegido, envie a senha por um canal de comunicação diferente.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProtectPdfPage;