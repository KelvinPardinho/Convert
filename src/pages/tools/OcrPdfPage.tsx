import React from 'react';
import { FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';
import SEO from '../../components/SEO';

export default function OcrPdfPage() {
  const handleFileUpload = async (files: FileList) => {
    // OCR functionality will be implemented here
    console.log('OCR processing for:', files[0]?.name);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Extrair Texto de PDF (OCR) | PDF Tools" 
        description="Extraia texto de PDFs digitalizados usando nossa ferramenta OCR online gratuita. Converta imagens de texto em PDF para texto editável."
      />
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Extrair Texto de PDF (OCR)
        </h1>
        
        <p className="text-gray-600 mb-8">
          Extraia texto de PDFs digitalizados ou imagens usando nossa tecnologia OCR avançada. 
          Converta documentos digitalizados em texto editável facilmente.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6">
          <FileUploader
            onFileSelect={handleFileUpload}
            accept=".pdf"
            maxFiles={1}
            maxSize={10} // 10MB
            icon={<FileText className="w-12 h-12 text-blue-500" />}
            title="Arraste seu PDF aqui"
            subtitle="ou clique para selecionar"
          />
        </div>

        <div className="mt-8 space-y-4 text-gray-600">
          <h2 className="text-xl font-semibold text-gray-900">Como usar:</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Faça upload do seu arquivo PDF digitalizado</li>
            <li>Nossa tecnologia OCR processará o documento</li>
            <li>Baixe o arquivo com o texto extraído</li>
          </ol>
        </div>
      </div>
    </div>
  );
}