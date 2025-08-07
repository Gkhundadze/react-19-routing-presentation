import { CodeBlock } from '../components/CodeBlock'

function Slide6() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Basic Routing Setup</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">1. Wrap App with BrowserRouter</h3>
            <CodeBlock 
              language="jsx" 
              filename="main.jsx"
            >
{`// main.jsx
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)`}
            </CodeBlock>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">2. Define Routes in App</h3>
            <CodeBlock 
              language="jsx" 
              filename="App.jsx"
            >
{`// App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Key Components</h3>
            <div className="space-y-4">
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-blue-300">BrowserRouter</h4>
                <p className="text-sm text-gray-300">Provides routing context to entire app</p>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-green-300">Routes</h4>
                <p className="text-sm text-gray-300">Container for all Route components</p>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-yellow-300">Route</h4>
                <p className="text-sm text-gray-300">Defines path → component mapping</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">💡 How it Works</h3>
            <ol className="space-y-2 text-sm">
              <li>1. <strong>BrowserRouter</strong> listens to URL changes</li>
              <li>2. <strong>Routes</strong> finds the first matching Route</li>
              <li>3. <strong>Route</strong> renders the specified element</li>
              <li>4. Component appears on screen</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-green-900/20 border border-green-400/50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-green-300">✅ That's It!</h3>
        <p className="text-lg">
          With just these 3 components, you have a working router! 
          Navigate to <code className="bg-black/30 px-2 py-1 rounded">localhost:3000/about</code> to see it in action.
        </p>
      </div>
    </div>
  )
}

export default Slide6