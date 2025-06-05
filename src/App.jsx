import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import DocumentViewer from './pages/DocumentViewer'
import Glossary from './pages/Glossary'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents/:id" element={<DocumentViewer />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App 