import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Share2, Bookmark } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const DocumentViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages);
    });
  };

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.1, 2.0));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
  };

  return (
    <DashboardLayout>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[32px] font-bold">Document Viewer</p>
          <p className="text-sm text-[#4e6797]">View and interact with your legal documents</p>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg border border-[#d0d7e7] overflow-hidden">
          {/* Document Controls */}
          <div className="p-4 border-b border-[#d0d7e7] bg-[#f8f9fc]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => changePage(-1)}
                  disabled={pageNumber <= 1}
                  className="p-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium">
                  Page {pageNumber} of {numPages || '--'}
                </span>
                <button
                  onClick={() => changePage(1)}
                  disabled={pageNumber >= numPages}
                  className="p-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={zoomOut}
                  disabled={scale <= 0.5}
                  className="p-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium">{Math.round(scale * 100)}%</span>
                <button
                  onClick={zoomIn}
                  disabled={scale >= 2.0}
                  className="p-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Download</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors">
                  <Bookmark className="w-4 h-4" />
                  <span className="text-sm font-medium">Bookmark</span>
                </button>
              </div>
            </div>
          </div>

          {/* Document View */}
          <div className="p-8 flex justify-center bg-[#f8f9fc]">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Document
                file="/sample.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                className="flex justify-center"
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
          </div>

          {/* Document Information */}
          <div className="p-4 border-t border-[#d0d7e7]">
            <h3 className="text-[18px] font-bold mb-4">Document Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-sm font-medium text-[#4e6797] mb-1">Title</p>
                <p className="text-[#0e121b]">Investment Agreement</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#4e6797] mb-1">Type</p>
                <p className="text-[#0e121b]">Legal Document</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#4e6797] mb-1">Size</p>
                <p className="text-[#0e121b]">2.4 MB</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#4e6797] mb-1">Last Modified</p>
                <p className="text-[#0e121b]">March 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DocumentViewer; 