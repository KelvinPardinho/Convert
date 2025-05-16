import React from 'react';
import { FileText, Lock } from 'lucide-react';

function UnlockPdfPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <FileText className="w-16 h-16 text-red-500" />
              <Lock className="w-8 h-8 text-gray-600 absolute -bottom-2 -right-2" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Remover Senha do PDF</h1>
          <p className="text-gray-600 mb-8">
            Remova a proteção por senha do seu arquivo PDF de forma rápida e segura
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">
              Arraste e solte seu arquivo PDF aqui ou clique para selecionar
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
              Selecionar Arquivo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnlockPdfPage;