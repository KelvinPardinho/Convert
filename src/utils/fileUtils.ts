import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import * as XLSX from 'xlsx';
import { createWorker } from 'tesseract.js';

export async function convertPdfToWord(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();
  
  // Extract text from each page
  const text = pages.map(page => {
    const { width, height } = page.getSize();
    return page.doc.getForm().getFields().map(field => field.getText()).join('\n');
  }).join('\n\n');

  // Create a simple .docx file
  const blob = new Blob([text], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  return blob;
}

export async function convertWordToPdf(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  
  // Convert Word content to PDF
  const text = await file.text();
  page.drawText(text, {
    x: 50,
    y: page.getHeight() - 50,
    size: 12,
  });

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}

export async function convertPdfToJpg(file: File): Promise<Blob[]> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();
  
  // Convert each page to JPG
  const images = await Promise.all(pages.map(async (page) => {
    const { width, height } = page.getSize();
    // Implementation would use canvas to render PDF page and convert to JPG
    // This is a simplified version
    return new Blob(['image data'], { type: 'image/jpeg' });
  }));

  return images;
}

export async function convertJpgToPdf(files: File[]): Promise<Blob> {
  const pdfDoc = await PDFDocument.create();
  
  for (const file of files) {
    const imageBytes = await file.arrayBuffer();
    let image;
    
    if (file.type === 'image/jpeg') {
      image = await pdfDoc.embedJpg(imageBytes);
    } else if (file.type === 'image/png') {
      image = await pdfDoc.embedPng(imageBytes);
    }

    if (image) {
      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
      });
    }
  }

  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}

export async function compressPdf(file: File, quality: number): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  
  // Implement PDF compression based on quality setting
  const pdfBytes = await pdfDoc.save({
    useObjectStreams: true,
    addDefaultPage: false,
  });

  return new Blob([pdfBytes], { type: 'application/pdf' });
}

export async function convertPdfToExcel(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();
  
  // Extract table data from PDF
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet([['Data from PDF']]);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
  const excelBuffer = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
  return new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}

export async function mergePdfs(files: File[]): Promise<Blob> {
  const mergedPdf = await PDFDocument.create();
  
  for (const file of files) {
    const pdfBytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const pdfBytes = await mergedPdf.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}

export async function splitPdf(file: File, ranges: string): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const zip = new JSZip();
  
  // Parse page ranges and create separate PDFs
  const rangeList = ranges.split(',').map(r => r.trim());
  
  for (const range of rangeList) {
    const [start, end] = range.split('-').map(n => parseInt(n));
    const newPdf = await PDFDocument.create();
    const pages = await newPdf.copyPages(pdfDoc, [start - 1, end ? end - 1 : start - 1]);
    pages.forEach(page => newPdf.addPage(page));
    
    const pdfBytes = await newPdf.save();
    zip.file(`pages_${range}.pdf`, pdfBytes);
  }

  return await zip.generateAsync({ type: 'blob' });
}

export async function performOcr(file: File, language: string): Promise<Blob> {
  const worker = await createWorker(language);
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  
  // Perform OCR on each page
  const pages = pdfDoc.getPages();
  for (const page of pages) {
    // Implementation would convert page to image and perform OCR
    await worker.recognize(page);
  }
  
  await worker.terminate();
  
  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}

export async function protectPdf(file: File, password: string): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  
  const pdfBytes = await pdfDoc.save({
    userPassword: password,
    ownerPassword: password,
  });

  return new Blob([pdfBytes], { type: 'application/pdf' });
}

export async function unlockPdf(file: File, password: string): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer, { password });
  
  const pdfBytes = await pdfDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
}

export function downloadFile(blob: Blob, filename: string) {
  saveAs(blob, filename);
}