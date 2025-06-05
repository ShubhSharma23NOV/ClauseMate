import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const features = [
  {
    title: "Document Collaboration",
    description: "Work seamlessly with lawyers on your legal documents in real-time.",
    icon: "📄",
  },
  {
    title: "Legal Glossary",
    description: "Access a comprehensive database of legal terms and definitions.",
    icon: "📚",
  },
  {
    title: "Version Control",
    description: "Track changes and maintain document history with ease.",
    icon: "🔄",
  },
  {
    title: "Secure Storage",
    description: "Your documents are encrypted and stored with enterprise-grade security.",
    icon: "🔒",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-primary">
              Streamline Your Legal Collaboration
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ClauseMate helps startups and lawyers collaborate on legal documents
              efficiently and securely.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📄</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Why Choose ClauseMate?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Ready to Transform Your Legal Workflow?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of startups and lawyers who trust ClauseMate for their
            legal document collaboration needs.
          </p>
          <Button size="lg" asChild>
            <Link to="/register">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 