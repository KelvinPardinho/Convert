import React from 'react';
import { FileUploader } from '../../components/FileUploader';
import { Scissors } from 'lucide-react';

export default function SplitPdfPage() {
  const handleFileUpload = async (files: FileList) => {
    // TODO: Implement PDF splitting functionality
    console.log('Files to split:', files);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Scissors className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dividir PDF</h1>
          <p className="text-lg text-gray-600 mb-8">
            Divida seus arquivos PDF em múltiplos documentos. Selecione as páginas que deseja separar
            e crie novos arquivos PDF.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <FileUploader 
            onUpload={handleFileUpload}
            accept=".pdf"
            maxFiles={1}
            maxSize={10 * 1024 * 1024} // 10MB
          />

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>Tamanho máximo do arquivo: 10MB</p>
            <p>Formato suportado: PDF</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como dividir um PDF</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                1
              </div>
              <div className="ml-4">
                <p className="text-gray-700">Faça o upload do arquivo PDF que você deseja dividir</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                2
              </div>
              <div className="ml-4">
                <p className="text-gray-700">Selecione as páginas onde você deseja dividir o documento</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                3
              </div>
              <div className="ml-4">
                <p className="text-gray-700">Clique em "Dividir PDF" e faça o download dos arquivos separados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}