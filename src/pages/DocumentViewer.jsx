import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { motion } from "framer-motion"
import DashboardLayout from "../components/layout/DashboardLayout"
import { Button } from "../components/ui/button"
import { MessageSquare, Download, Share2 } from "lucide-react"

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const comments = [
  {
    id: 1,
    user: "John Doe",
    text: "This clause needs to be reviewed by legal team",
    timestamp: "2 hours ago",
    page: 1,
  },
  {
    id: 2,
    user: "Sarah Smith",
    text: "I suggest we modify this section to include...",
    timestamp: "1 day ago",
    page: 2,
  },
]

export default function DocumentViewer() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [showComments, setShowComments] = useState(true)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-4rem)]">
        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">Investment Agreement</h1>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowComments(!showComments)}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Comments
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <Document
                file="/sample.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                className="max-w-full"
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-lg"
                />
              </Document>
            </div>

            <div className="flex justify-center mt-4 space-x-4">
              <Button
                variant="outline"
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber <= 1}
              >
                Previous
              </Button>
              <span className="py-2">
                Page {pageNumber} of {numPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= numPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>

        {/* Comments Panel */}
        {showComments && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 320 }}
            exit={{ width: 0 }}
            className="border-l border-gray-200 bg-white"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Comments</h2>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="mb-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">{comment.user}</span>
                      <span className="text-sm text-gray-500">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{comment.text}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      Page {comment.page}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  rows={3}
                  placeholder="Add a comment..."
                />
                <Button className="mt-2 w-full">Post Comment</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  )
} 