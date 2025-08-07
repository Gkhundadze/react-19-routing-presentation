import { CodeBlock, InlineCode } from '../components/CodeBlock'

function Slide12() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Go Back / Forward Navigation</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">History Navigation</h3>
            <p className="text-lg mb-4">
              React Router maintains browser history, allowing users to:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⬅️</span>
                <span>Go back to previous pages</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">➡️</span>
                <span>Move forward in history</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔄</span>
                <span>Jump multiple steps back/forward</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Using navigate() for History</h3>
            <CodeBlock 
              language="jsx" 
              filename="HistoryNavigation.jsx"
            >
{`import { useNavigate } from 'react-router-dom'

function BackButton() {
  const navigate = useNavigate()
  
  return (
    <button 
      onClick={() => navigate(-1)}
      className="back-btn"
    >
      ← Go Back
    </button>
  )
}

function ForwardButton() {
  const navigate = useNavigate()
  
  return (
    <button 
      onClick={() => navigate(1)}
      className="forward-btn"
    >
      Go Forward →
    </button>
  )
}`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Smart Back Button Component</h3>
            <CodeBlock 
              language="jsx" 
              filename="SmartBackButton.jsx"
            >
{`function SmartBackButton({ fallback = '/' }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleBack = () => {
    // Check if we have history
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      // No history, go to fallback
      navigate(fallback)
    }
  }
  
  return (
    <button 
      onClick={handleBack}
      className="smart-back-btn"
    >
      ← Back
    </button>
  )
}`}
            </CodeBlock>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Breadcrumb Navigation</h3>
            <CodeBlock 
              language="jsx" 
              filename="Breadcrumbs.jsx"
            >
{`function Breadcrumbs() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment)
  
  return (
    <nav className="breadcrumbs">
      <button onClick={() => navigate('/')}>
        Home
      </button>
      
      {pathSegments.map((segment, index) => {
        const path = '/' + pathSegments
          .slice(0, index + 1)
          .join('/')
        
        return (
          <span key={path}>
            <span> / </span>
            <button onClick={() => navigate(path)}>
              {segment}
            </button>
          </span>
        )
      })}
    </nav>
  )
}`}
            </CodeBlock>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-400/50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-yellow-300">📊 History Numbers Explained</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/30 p-4 rounded text-center">
            <h4 className="font-semibold text-red-300 mb-2"><InlineCode>navigate(-1)</InlineCode></h4>
            <p className="text-sm">Go back 1 step</p>
            <p className="text-xs text-gray-400">(Like browser back button)</p>
          </div>
          <div className="bg-black/30 p-4 rounded text-center">
            <h4 className="font-semibold text-blue-300 mb-2"><InlineCode>navigate(1)</InlineCode></h4>
            <p className="text-sm">Go forward 1 step</p>
            <p className="text-xs text-gray-400">(Like browser forward button)</p>
          </div>
          <div className="bg-black/30 p-4 rounded text-center">
            <h4 className="font-semibold text-purple-300 mb-2"><InlineCode>navigate(-3)</InlineCode></h4>
            <p className="text-sm">Go back 3 steps</p>
            <p className="text-xs text-gray-400">(Jump multiple pages back)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-900/30 border-l-4 border-green-400 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-300">✅ Best Practices</h3>
          <ul className="space-y-2 text-sm">
            <li>• Always provide fallback navigation</li>
            <li>• Consider user's entry point</li>
            <li>• Test with direct URL access</li>
            <li>• Use meaningful button labels</li>
            <li>• Handle edge cases gracefully</li>
          </ul>
        </div>

        <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">🎯 Common Use Cases</h3>
          <ul className="space-y-2 text-sm">
            <li>• Modal close buttons</li>
            <li>• Form cancel actions</li>
            <li>• Error page navigation</li>
            <li>• Wizard step navigation</li>
            <li>• Photo gallery navigation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Slide12