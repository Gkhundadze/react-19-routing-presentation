import { CodeBlock } from '../components/CodeBlock'

function Slide8() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Navigation with &lt;Link&gt; and &lt;NavLink&gt;</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Using Link Component</h3>
            <CodeBlock 
              language="jsx" 
              filename="Navigation.jsx"
            >
{`import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}`}
            </CodeBlock>
            <div className="mt-4 p-3 bg-green-900/30 rounded">
              <p className="text-green-300 font-semibold">✅ Link Benefits:</p>
              <ul className="text-sm space-y-1 mt-2">
                <li>• No page reload</li>
                <li>• Proper HTML anchor tags</li>
                <li>• Accessible navigation</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-900/30 border-l-4 border-red-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-red-300">❌ Don't Use Regular Anchors</h3>
            <CodeBlock 
              language="jsx" 
              filename="BadExample.jsx"
            >
{`// This will cause page reload!
<a href="/about">About</a>

// This breaks SPA experience
<button onClick={() => {
  window.location.href = '/about'
}}>
  About
</button>`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">NavLink for Active States</h3>
            <CodeBlock 
              language="jsx" 
              filename="ActiveNavigation.jsx"
            >
{`import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/"
        className={({ isActive }) =>
          isActive ? 'active-link' : 'nav-link'
        }
      >
        Home
      </NavLink>
      
      <NavLink 
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? 'gold' : 'white'
        })}
      >
        About
      </NavLink>
    </nav>
  )
}`}
            </CodeBlock>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">NavLink vs Link</h3>
            <div className="space-y-3">
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-blue-300">Link</h4>
                <p className="text-sm text-gray-300">Basic navigation, no active state</p>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-purple-300">NavLink</h4>
                <p className="text-sm text-gray-300">Adds isActive prop for styling current page</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-400/50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-yellow-300">💡 Pro Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Relative Paths</h4>
            <CodeBlock 
              language="jsx" 
              filename="RelativePaths.jsx"
            >
{`<Link to="../parent">Back</Link>
<Link to="child">Forward</Link>`}
            </CodeBlock>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Replace History</h4>
            <CodeBlock 
              language="jsx" 
              filename="ReplaceHistory.jsx"
            >
{`<Link to="/login" replace>
  Login
</Link>`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide8