import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, AlertCircle } from 'lucide-react';

interface FileUploaderProps {
  acceptedFileTypes: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  onFilesSelected: (files: File[]) => void;
  label?: string;
}

const FileUploader = ({
  acceptedFileTypes,
  maxFiles = 1,
  maxSize = 10485760, // 10MB
  onFilesSelected,
  label = 'Arraste e solte arquivos aqui, ou clique para selecionar',
}: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null);
      const newFiles = [...files, ...acceptedFiles].slice(0, maxFiles);
      setFiles(newFiles);
      onFilesSelected(newFiles);
    },
    [files, maxFiles, onFilesSelected]
  );

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onFilesSelected(newFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    maxFiles,
    maxSize,
    onDropRejected: (fileRejections) => {
      const errors: string[] = [];
      fileRejections.forEach((rejection) => {
        rejection.errors.forEach((error) => {
          if (error.code === 'file-too-large') {
            errors.push(`Arquivo muito grande. Tamanho máximo: ${maxSize / 1048576}MB`);
          } else if (error.code === 'file-invalid-type') {
            errors.push('Tipo de arquivo não suportado');
          } else if (error.code === 'too-many-files') {
            errors.push(`Máximo de ${maxFiles} arquivo(s) permitido(s)`);
          } else {
            errors.push(error.message);
          }
        });
      });
      setError(errors[0] || 'Erro ao carregar arquivo');
    },
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="h-12 w-12 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-xs text-gray-500">
            Tamanho máximo: {maxSize / 1048576}MB
            {maxFiles > 1 && ` • Máximo de ${maxFiles} arquivos`}
          </p>
        </div>
      </div>

      {error && (
        <div className="mt-2 flex items-center text-red-600 text-sm">
          <AlertCircle className="h-4 w-4 mr-1" />
          <span>{error}</span>
        </div>
      )}

      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-md border border-gray-200"
            >
              <div className="flex items-center">
                <File className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-700 truncate max-w-xs">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB • {file.type || 'Arquivo desconhecido'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="p-1 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700"
                aria-label="Remover arquivo"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;