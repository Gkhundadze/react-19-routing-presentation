import { CodeBlock } from '../components/CodeBlock'

function Slide2() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">What is React Router?</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Definition</h3>
            <p className="text-lg leading-relaxed">
              React Router is a powerful routing library for React that enables navigation 
              between different components in a Single Page Application (SPA).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-green-300">Key Benefits</h3>
            <ul className="space-y-2 text-lg">
              <li>• <strong>URL Synchronization:</strong> Keeps URL in sync with UI</li>
              <li>• <strong>Browser History:</strong> Back/forward buttons work</li>
              <li>• <strong>Bookmarkable:</strong> Users can bookmark specific pages</li>
              <li>• <strong>SEO Friendly:</strong> Search engines can index routes</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Without React Router</h3>
          <CodeBlock 
            language="jsx" 
            filename="BadExample.jsx"
          >
{`function App() {
  const [currentPage, setCurrentPage] = useState('home')
  
  const renderPage = () => {
    if (currentPage === 'home') return <Home />
    if (currentPage === 'about') return <About />
    if (currentPage === 'contact') return <Contact />
  }
  
  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>
          Home
        </button>
        <button onClick={() => setCurrentPage('about')}>
          About
        </button>
      </nav>
      {renderPage()}
    </div>
  )
}`}
          </CodeBlock>
          <p className="text-red-300 mt-2 text-sm">❌ No URL updates, no browser history!</p>
        </div>
      </div>
    </div>
  )
}

export default Slide2