'use client'

import { exportText, ExportFormat } from '@/lib/export'
import { useState } from 'react'

interface ExportButtonProps {
  text: string
  filename?: string
}

export default function ExportButton({ text, filename = 'document' }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleExport = async (format: ExportFormat) => {
    setIsExporting(true)
    setIsOpen(false)
    try {
      await exportText(text, format, filename)
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isExporting}
        className="px-3 py-1 bg-amber-600 text-white rounded hover:bg-amber-700 disabled:opacity-50 text-sm flex items-center gap-1"
      >
        {isExporting ? 'Exporting...' : 'Export'}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
          <button
            onClick={() => handleExport('pdf')}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            Export as PDF
          </button>
          <button
            onClick={() => handleExport('docx')}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            Export as DOCX
          </button>
          <button
            onClick={() => handleExport('png')}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            Export as PNG
          </button>
          <button
            onClick={() => handleExport('epub')}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            Export as EPUB
          </button>
        </div>
      )}
    </div>
  )
}