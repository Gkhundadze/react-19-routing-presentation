import { CodeBlock, InlineCode } from '../components/CodeBlock'

function Slide15() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Summary</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">🎯 What We Learned</h3>
            <ul className="space-y-3 text-lg">
              <li>✅ <strong>React Router</strong> enables SPA navigation</li>
              <li>✅ <strong>Routes & Links</strong> create navigable apps</li>
              <li>✅ <strong>Dynamic routing</strong> with useParams()</li>
              <li>✅ <strong>Programmatic navigation</strong> with useNavigate()</li>
              <li>✅ <strong>Nested routes</strong> for shared layouts</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">🔧 Core Components & Hooks</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-black/30 p-2 rounded"><InlineCode>BrowserRouter</InlineCode></div>
              <div className="bg-black/30 p-2 rounded"><InlineCode>Routes</InlineCode></div>
              <div className="bg-black/30 p-2 rounded"><InlineCode>Route</InlineCode></div>
              <div className="bg-black/30 p-2 rounded"><InlineCode>Link</InlineCode></div>
              <div className="bg-black/30 p-2 rounded"><InlineCode>NavLink</InlineCode></div>
              <div className="bg-black/30 p-2 rounded"><InlineCode>Outlet</InlineCode></div>
              <div className="bg-black/30 p-2 rounded"><InlineCode>useParams</InlineCode></div>
              <div className="bg-black/30 p-2 rounded"><InlineCode>useNavigate</InlineCode></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">📝 Quick Reference</h3>
            <CodeBlock 
              language="jsx" 
              filename="QuickReference.jsx"
            >
{`// Basic setup
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users/:id" element={<User />} />
  </Routes>
</BrowserRouter>

// In components
const { id } = useParams()
const navigate = useNavigate()

// Navigation
<Link to="/about">About</Link>
<NavLink to="/about">About</NavLink>
navigate('/dashboard')
navigate(-1) // go back`}
            </CodeBlock>
          </div>

          <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">🚀 Next Steps</h3>
            <ul className="space-y-2 text-sm">
              <li>• Build a multi-page React app</li>
              <li>• Experiment with nested routes</li>
              <li>• Add protected routes with authentication</li>
              <li>• Learn about route loading states</li>
              <li>• Explore advanced React Router features</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-400/50 rounded-lg p-8 mt-12">
        <h3 className="text-3xl font-bold text-center mb-6 text-green-300">🎉 Congratulations!</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl mb-2">🗺️</div>
            <h4 className="font-semibold text-blue-300">Navigation Master</h4>
            <p className="text-sm text-gray-300">You can now create navigable SPAs</p>
          </div>
          <div>
            <div className="text-4xl mb-2">⚡</div>
            <h4 className="font-semibold text-purple-300">Performance Pro</h4>
            <p className="text-sm text-gray-300">No more page reloads!</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🎯</div>
            <h4 className="font-semibold text-orange-300">Route Expert</h4>
            <p className="text-sm text-gray-300">Dynamic and nested routes</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-400/50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-yellow-300">💡 Remember the Key Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Route Order Matters</h4>
            <p className="text-gray-300">Specific routes before dynamic ones</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Use Links, Not Anchors</h4>
            <p className="text-gray-300">Keep the SPA experience smooth</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Always Handle 404s</h4>
            <p className="text-gray-300">Catch-all routes for bad URLs</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Organize Your Routes</h4>
            <p className="text-gray-300">Group related functionality together</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide15