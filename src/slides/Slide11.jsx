import { CodeBlock } from '../components/CodeBlock'

function Slide11() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Programmatic Navigation with useNavigate()</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">What is useNavigate()?</h3>
            <p className="text-lg mb-4">
              A hook that lets you navigate programmatically - perfect for:
            </p>
            <ul className="space-y-2">
              <li>• <strong>Form submissions</strong> → redirect after success</li>
              <li>• <strong>Authentication</strong> → redirect after login</li>
              <li>• <strong>Conditional logic</strong> → navigate based on data</li>
              <li>• <strong>Error handling</strong> → redirect on errors</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Basic Usage</h3>
            <CodeBlock 
              language="jsx" 
              filename="LoginForm.jsx"
            >
{`import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()
  
  const handleLogin = async (formData) => {
    try {
      await login(formData)
      // Navigate to dashboard on success
      navigate('/dashboard')
    } catch (error) {
      // Stay on login page, show error
      setError('Login failed')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      {/* form fields */}
    </form>
  )
}`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Navigation Options</h3>
            <CodeBlock 
              language="jsx" 
              filename="NavigationOptions.jsx"
            >
{`const navigate = useNavigate()

// Basic navigation
navigate('/about')

// Replace current entry in history
navigate('/login', { replace: true })

// Navigate with state
navigate('/profile', { 
  state: { from: 'login' } 
})

// Go back/forward in history
navigate(-1)  // Go back
navigate(1)   // Go forward
navigate(-2)  // Go back 2 pages`}
            </CodeBlock>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Real Examples</h3>
            <CodeBlock 
              language="jsx" 
              filename="RealExamples.jsx"
            >
{`// Shopping cart checkout
const handleCheckout = () => {
  if (!user.loggedIn) {
    navigate('/login')
  } else {
    navigate('/checkout')
  }
}

// Delete user confirmation
const handleDeleteUser = async (userId) => {
  await deleteUser(userId)
  navigate('/users', { 
    replace: true,
    state: { message: 'User deleted' }
  })
}

// Timeout redirect
useEffect(() => {
  const timer = setTimeout(() => {
    navigate('/home')
  }, 5000)
  return () => clearTimeout(timer)
}, [])`}
            </CodeBlock>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-900/30 border-l-4 border-green-400 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-300">✅ When to Use useNavigate()</h3>
          <ul className="space-y-2 text-sm">
            <li>• After form submissions</li>
            <li>• Authentication flows</li>
            <li>• Error redirects</li>
            <li>• Conditional navigation</li>
            <li>• Programmatic back/forward</li>
          </ul>
        </div>

        <div className="bg-red-900/30 border-l-4 border-red-400 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-red-300">❌ When to Use Link Instead</h3>
          <ul className="space-y-2 text-sm">
            <li>• Regular page navigation</li>
            <li>• Menu items</li>
            <li>• Breadcrumbs</li>
            <li>• Static links</li>
            <li>• User-initiated navigation</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-300">💡 Pro Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Replace vs Push</h4>
            <CodeBlock 
              language="jsx" 
              filename="ReplaceVsPush.jsx"
            >
{`// Adds to history (default)
navigate('/dashboard')

// Replaces current entry
navigate('/dashboard', { replace: true })`}
            </CodeBlock>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Navigation with Data</h4>
            <CodeBlock 
              language="jsx" 
              filename="NavigationWithData.jsx"
            >
{`navigate('/success', { 
  state: { orderId: 123 } 
})

// Access with useLocation()
const location = useLocation()
const orderId = location.state?.orderId`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide11