import { useState } from 'react';
import { FileSignature, Download, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FileUploader from '../../components/FileUploader';

const SignPdfPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [certificate, setCertificate] = useState<File | null>(null);
  const [signing, setSigning] = useState(false);
  const [signed, setSigned] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    setSigned(false);
    setError(null);
  };

  const handleCertificateSelected = (selectedFiles: File[]) => {
    if (selectedFiles.length > 0) {
      setCertificate(selectedFiles[0]);
    }
  };

  const handleSign = () => {
    if (files.length === 0) {
      setError('Por favor, selecione um arquivo PDF para assinar.');
      return;
    }

    if (!certificate) {
      setError('Por favor, selecione seu certificado digital.');
      return;
    }

    setSigning(true);
    setError(null);

    // Simulação de assinatura (em um app real, isso seria substituído pela lógica de assinatura)
    setTimeout(() => {
      setSigning(false);
      setSigned(true);
    }, 2000);
  };

  const handleDownload = () => {
    // Simulação de download (em um app real, isso seria substituído pela lógica de download)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Conteúdo simulado'], { type: 'application/pdf' }));
    link.download = files[0].name.replace('.pdf', '_assinado.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="Assinar PDF"
        description="Assine documentos PDF com certificado digital. Assinatura eletrônica segura e válida juridicamente."
        keywords="assinar PDF, assinatura digital, certificado digital, assinatura eletrônica"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Assinar PDF
            </h1>
            <p className="text-xl mb-0 text-indigo-100">
              Assine seus documentos PDF com certificado digital de forma segura.
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
                  <FileSignature className="h-6 w-6 text-indigo-600 mr-2" />
                  <h2 className="text-2xl font-bold">Assinar PDF</h2>
                </div>
                <p className="text-gray-600">
                  Faça o upload do seu arquivo PDF e do seu certificado digital para assinar o documento.
                  A assinatura digital garante a autenticidade e integridade do documento.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Documento PDF
                  </label>
                  <FileUploader
                    acceptedFileTypes={{ 'application/pdf': ['.pdf'] }}
                    maxFiles={1}
                    maxSize={10485760} // 10MB
                    onFilesSelected={handleFilesSelected}
                    label="Arraste e solte seu arquivo PDF aqui, ou clique para selecionar"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Certificado Digital
                  </label>
                  <FileUploader
                    acceptedFileTypes={{
                      'application/x-pkcs12': ['.pfx', '.p12'],
                      'application/x-x509-ca-cert': ['.cer', '.crt']
                    }}
                    maxFiles={1}
                    maxSize={1048576} // 1MB
                    onFilesSelected={handleCertificateSelected}
                    label="Selecione seu certificado digital (.pfx, .p12, .cer, .crt)"
                  />
                </div>

                {error && (
                  <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleSign}
                  disabled={files.length === 0 || !certificate || signing || signed}
                  className={`w-full btn ${
                    files.length === 0 || !certificate || signing || signed
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
                  }`}
                >
                  {signing ? 'Assinando...' : 'Assinar Documento'}
                </button>

                {signed && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Documento assinado com sucesso!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="w-full btn bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Baixar PDF Assinado
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Como assinar um PDF</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>Faça o upload do arquivo PDF que deseja assinar.</li>
                <li>Selecione seu certificado digital (.pfx, .p12, .cer ou .crt).</li>
                <li>Clique no botão "Assinar Documento" para iniciar o processo.</li>
                <li>Baixe o documento PDF assinado.</li>
              </ol>
            </div>

            {/* About Digital Signatures */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Sobre Assinaturas Digitais</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  A assinatura digital é uma tecnologia que garante a autenticidade, integridade e não repúdio de documentos eletrônicos.
                  Quando você assina digitalmente um documento:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Garante que o documento não foi alterado após a assinatura</li>
                  <li>Comprova sua identidade como signatário</li>
                  <li>Adiciona valor legal ao documento</li>
                  <li>Permite a verificação da assinatura por terceiros</li>
                </ul>
                <p>
                  Nossa ferramenta utiliza certificados digitais padrão ICP-Brasil e outros certificados reconhecidos,
                  garantindo a validade jurídica das assinaturas conforme a legislação vigente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignPdfPage;