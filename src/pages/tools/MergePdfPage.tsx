import React from 'react';
import FileUploader from '../../components/FileUploader';
import SEO from '../../components/SEO';

const MergePdfPage = () => {
  const handleFileUpload = async (files: File[]) => {
    // TODO: Implement PDF merging functionality
    console.log('Files to merge:', files);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Mesclar PDFs | PDF Tools"
        description="Combine múltiplos arquivos PDF em um único documento facilmente com nossa ferramenta gratuita de mesclagem de PDFs."
      />
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mesclar PDFs</h1>
        <p className="text-gray-600 mb-8">
          Combine múltiplos arquivos PDF em um único documento. Arraste e solte seus arquivos abaixo.
        </p>

        <FileUploader 
          onUpload={handleFileUpload}
          accept=".pdf"
          multiple={true}
          maxFiles={10}
          maxSize={10 * 1024 * 1024} // 10MB
        />

        <div className="mt-8 prose prose-blue">
          <h2>Como mesclar arquivos PDF</h2>
          <ol>
            <li>Arraste e solte seus arquivos PDF na área acima ou clique para selecionar os arquivos</li>
            <li>Organize os arquivos na ordem desejada</li>
            <li>Clique em "Mesclar PDFs" para combinar os arquivos</li>
            <li>Faça o download do seu novo PDF mesclado</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MergePdfPage;