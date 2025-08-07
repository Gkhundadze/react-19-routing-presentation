import { CodeBlock, TerminalBlock } from '../components/CodeBlock'

function Slide5() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Installing react-router-dom</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Package Installation</h3>
            <TerminalBlock>
{`$ npm install react-router-dom
+ react-router-dom@6.28.0
added 1 package in 2.1s

$ yarn add react-router-dom
✨ Done in 1.8s`}
            </TerminalBlock>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Version Information</h3>
            <ul className="space-y-3 text-lg">
              <li>• <strong>Latest:</strong> v6.x (Current)</li>
              <li>• <strong>React 18+:</strong> Full compatibility</li>
              <li>• <strong>React 19:</strong> Ready to use</li>
              <li>• <strong>Bundle Size:</strong> ~40kb minified</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Basic Import Examples</h3>
            <CodeBlock 
              language="jsx" 
              filename="imports.js"
            >
{`// Core routing components
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'

// Hooks for navigation
import {
  useNavigate,
  useParams,
  useLocation
} from 'react-router-dom'`}
            </CodeBlock>
          </div>

          <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">💡 Pro Tip</h3>
            <p className="text-lg">
              Always install the exact version you need in production projects:
            </p>
            <div className="bg-black/30 rounded p-2 mt-2 font-mono text-sm">
              npm install react-router-dom@^6.22.0
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-400/50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-yellow-300">⚠️ Important Notes</h3>
        <ul className="space-y-2">
          <li>• <strong>react-router-dom</strong> is for web applications</li>
          <li>• <strong>react-router-native</strong> is for React Native mobile apps</li>
          <li>• Version 6 has breaking changes from v5 - check migration guide if upgrading</li>
        </ul>
      </div>
    </div>
  )
}

export default Slide5