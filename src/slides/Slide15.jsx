import { CodeBlock, InlineCode } from '../components/CodeBlock'

function SlideProtectedRoutes() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Protected Routes</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Intro & Simple Example */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Why Protected Routes?</h3>
            <p className="text-gray-300 mb-4">
              Protected Routes are routes that require the user to be authenticated before they can be accessed.
              If the user is not logged in, they are redirected to the login page.
              This is useful for restricting access to certain parts of your application,
              such as dashboards or profile pages.
            </p>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li>Personal profile pages</li>
              <li>Administrator panel</li>
              <li>Payment processes</li>
              <li>Content for subscribers only</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Basic Protected Route</h3>
            <CodeBlock
              language="jsx"
              filename="ProtectedRoute.jsx"
            >
              {`import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const isAuthenticated = false 
  // Replace with real auth logic

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute`}
            </CodeBlock>
          </div>
        </div>

        {/* Usage & Advanced Example */}
        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Using ProtectedRoute in App</h3>
            <CodeBlock
              language="jsx"
              filename="App.jsx"
            >
              {`import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './Dashboard'
import Login from './Login'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  )
}

export default App`}
            </CodeBlock>
          </div>

          {/* Visual Demo */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Visual Flow</h3>
            <div className="mt-4 bg-white/5 p-4 rounded text-sm">
              <div className="flex flex-col space-y-2">
                <div className="p-2 bg-green-700/30 rounded">User tries to access <b>/dashboard</b></div>
                <div className="p-2 bg-blue-700/30 rounded">ProtectedRoute checks authentication</div>
                <div className="p-2 bg-red-700/30 rounded">If not authenticated → Redirect to <b>/login</b></div>
                <div className="p-2 bg-green-700/30 rounded">If authenticated → Render Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Info */}
      <div className="bg-yellow-900/20 border border-yellow-400/50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-yellow-300">🔑 Key Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/30 p-4 rounded text-center">
            <h4 className="font-semibold text-red-300 mb-2">Authentication</h4>
            <p className="text-sm">Check if user is logged in before rendering route.</p>
          </div>
          <div className="bg-black/30 p-4 rounded text-center">
            <h4 className="font-semibold text-blue-300 mb-2">Redirect</h4>
            <p className="text-sm">Use <InlineCode>{`<Navigate />`}</InlineCode> for safe redirects.</p>
          </div>
          <div className="bg-black/30 p-4 rounded text-center">
            <h4 className="font-semibold text-purple-300 mb-2">State</h4>
            <p className="text-sm">Pass previous location for after-login redirect.</p>
          </div>
        </div>
      </div>

      {/* Best Practices & Common Use Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-900/30 border-l-4 border-green-400 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-300">✅ Best Practices</h3>
          <ul className="space-y-2 text-sm">
            <li>• Store auth state in context or global store</li>
            <li>• Always handle unauthorized access gracefully</li>
            <li>• Keep login page simple and fast</li>
            <li>• Avoid storing sensitive data in localStorage</li>
            <li>• Use JWT or cookies securely</li>
          </ul>
        </div>

        <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">🎯 Common Use Cases</h3>
          <ul className="space-y-2 text-sm">
            <li>• User profile pages</li>
            <li>• Admin dashboards</li>
            <li>• Subscription content</li>
            <li>• Checkout pages</li>
            <li>• Member-only forums</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SlideProtectedRoutes
