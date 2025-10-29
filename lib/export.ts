import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { Document, Packer, Paragraph, TextRun } from 'docx'
import JSZip from 'jszip'

export type ExportFormat = 'pdf' | 'png' | 'docx' | 'epub'

export async function exportText(text: string, format: ExportFormat, filename: string = 'export') {
  switch (format) {
    case 'pdf':
      return exportToPDF(text, filename)
    case 'png':
      return exportToPNG(text, filename)
    case 'docx':
      return exportToDOCX(text, filename)
    case 'epub':
      return exportToEPUB(text, filename)
    default:
      throw new Error(`Unsupported format: ${format}`)
  }
}

async function exportToPDF(text: string, filename: string) {
  const pdf = new jsPDF()
  const lines = pdf.splitTextToSize(text, 180)
  pdf.text(lines, 10, 10)
  pdf.save(`${filename}.pdf`)
}

async function exportToPNG(text: string, filename: string) {
  const div = document.createElement('div')
  div.style.cssText = 'position:absolute;left:-9999px;padding:20px;background:white;font-family:Arial;font-size:14px;line-height:1.5;width:800px'
  div.textContent = text
  document.body.appendChild(div)
  
  const canvas = await html2canvas(div)
  document.body.removeChild(div)
  
  const link = document.createElement('a')
  link.download = `${filename}.png`
  link.href = canvas.toDataURL()
  link.click()
}

async function exportToDOCX(text: string, filename: string) {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [new Paragraph({ children: [new TextRun(text)] })]
    }]
  })
  
  const blob = await Packer.toBlob(doc)
  const link = document.createElement('a')
  link.download = `${filename}.docx`
  link.href = URL.createObjectURL(blob)
  link.click()
}

async function exportToEPUB(text: string, filename: string) {
  const zip = new JSZip()
  
  zip.file('META-INF/container.xml', `<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`)

  zip.file('OEBPS/content.opf', `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="2.0">
  <metadata>
    <dc:title xmlns:dc="http://purl.org/dc/elements/1.1/">${filename}</dc:title>
    <dc:language xmlns:dc="http://purl.org/dc/elements/1.1/">en</dc:language>
  </metadata>
  <manifest>
    <item id="chapter1" href="chapter1.xhtml" media-type="application/xhtml+xml"/>
  </manifest>
  <spine>
    <itemref idref="chapter1"/>
  </spine>
</package>`)

  zip.file('OEBPS/chapter1.xhtml', `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>${filename}</title></head>
<body><p>${text.replace(/\n/g, '</p><p>')}</p></body>
</html>`)

  const blob = await zip.generateAsync({ type: 'blob' })
  const link = document.createElement('a')
  link.download = `${filename}.epub`
  link.href = URL.createObjectURL(blob)
  link.click()
}