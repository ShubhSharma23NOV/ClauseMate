import { useState } from "react"
import { motion } from "framer-motion"
import DashboardLayout from "../components/layout/DashboardLayout"
import { Search } from "lucide-react"

const legalTerms = [
  {
    term: "Force Majeure",
    definition:
      "A clause that frees both parties from liability or obligation when an extraordinary event or circumstance beyond the control of the parties occurs.",
    category: "Contract Law",
  },
  {
    term: "Indemnification",
    definition:
      "A contractual obligation of one party to compensate the loss incurred by the other party due to the relevant act of the indemnitor or any other party.",
    category: "Contract Law",
  },
  {
    term: "Intellectual Property",
    definition:
      "A category of property that includes intangible creations of the human intellect, such as patents, trademarks, and copyrights.",
    category: "IP Law",
  },
  {
    term: "Non-Disclosure Agreement",
    definition:
      "A legal contract between at least two parties that outlines confidential material, knowledge, or information that the parties wish to share with one another.",
    category: "Contract Law",
  },
  {
    term: "Term Sheet",
    definition:
      "A non-binding document outlining the basic terms and conditions under which an investment will be made.",
    category: "Investment Law",
  },
]

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(legalTerms.map((term) => term.category))]

  const filteredTerms = legalTerms.filter((term) => {
    const matchesSearch = term.term
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Legal Glossary</h1>
          <p className="mt-1 text-sm text-gray-500">
            Search and browse common legal terms and their definitions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Terms List */}
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {filteredTerms.map((term, index) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {term.term}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{term.category}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-700">{term.definition}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No terms found matching your search.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
} 