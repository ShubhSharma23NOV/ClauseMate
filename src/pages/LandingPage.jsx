import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentIcon, BookOpenIcon, ArrowPathIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: DocumentIcon,
    title: 'Document Collaboration',
    description: 'Work seamlessly with lawyers on your legal documents in real-time.',
  },
  {
    icon: BookOpenIcon,
    title: 'Legal Glossary',
    description: 'Access a comprehensive database of legal terms and definitions.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Version Control',
    description: 'Track changes and maintain document history with ease.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Storage',
    description: 'Your documents are encrypted and stored with enterprise-grade security.',
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">ClauseMate</h1>
            <div className="flex items-center gap-4">
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Streamline Your Legal Collaboration
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            ClauseMate helps startups and lawyers collaborate on legal documents efficiently and securely.
          </p>
          <Link to="/signup" className="btn btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ClauseMate?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm border border-border"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Legal Workflow?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of startups and lawyers who trust ClauseMate for their legal document collaboration needs.
          </p>
          <Link to="/signup" className="btn btn-primary text-lg px-8 py-3">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2024 ClauseMate. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 