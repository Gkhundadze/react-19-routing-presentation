import { CodeBlock, InlineCode } from '../components/CodeBlock'

function Slide14() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Nested Routes & Layouts</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">What are Nested Routes?</h3>
            <p className="text-lg mb-4">
              Routes that render <strong>inside other routes</strong>, sharing common layouts and URL structures.
            </p>
            <div className="space-y-2 text-sm bg-black/30 p-3 rounded">
              <div><InlineCode>/dashboard</InlineCode> → Dashboard Layout</div>
              <div><InlineCode>/dashboard/profile</InlineCode> → Layout + Profile</div>
              <div><InlineCode>/dashboard/settings</InlineCode> → Layout + Settings</div>
              <div><InlineCode>/dashboard/users</InlineCode> → Layout + Users</div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Layout Component</h3>
            <CodeBlock 
              language="jsx" 
              filename="DashboardLayout.jsx"
            >
{`import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <nav>
          <Link to="/dashboard">Overview</Link>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </nav>
      </header>
      
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      
      <footer>© 2024 My App</footer>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Nested Route Definition</h3>
            <CodeBlock 
              language="jsx" 
              filename="App.jsx"
            >
{`function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Parent route with layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Child routes */}
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />}>
          {/* Nested deeper */}
          <Route path=":userId" element={<UserDetail />} />
        </Route>
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}`}
            </CodeBlock>
          </div>

          <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">🎯 Key Concepts</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-black/30 p-2 rounded">
                <strong className="text-yellow-300"><InlineCode>Outlet</InlineCode>:</strong> Where child routes render
              </div>
              <div className="bg-black/30 p-2 rounded">
                <strong className="text-green-300">Index Route:</strong> Default child route
              </div>
              <div className="bg-black/30 p-2 rounded">
                <strong className="text-purple-300">Relative Paths:</strong> No leading slash in children
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-lg p-6 mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-orange-300">Visual Layout Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-900/30 p-4 rounded border border-blue-400">
            <h4 className="font-semibold text-blue-300 mb-2">URL: <InlineCode>/dashboard</InlineCode></h4>
            <div className="space-y-2 text-xs">
              <div className="bg-green-600 text-white p-1 rounded">Dashboard Header</div>
              <div className="bg-yellow-600 text-black p-1 rounded">DashboardHome Component</div>
              <div className="bg-green-600 text-white p-1 rounded">Dashboard Footer</div>
            </div>
          </div>
          
          <div className="bg-purple-900/30 p-4 rounded border border-purple-400">
            <h4 className="font-semibold text-purple-300 mb-2">URL: <InlineCode>/dashboard/profile</InlineCode></h4>
            <div className="space-y-2 text-xs">
              <div className="bg-green-600 text-white p-1 rounded">Dashboard Header</div>
              <div className="bg-blue-600 text-white p-1 rounded">Profile Component</div>
              <div className="bg-green-600 text-white p-1 rounded">Dashboard Footer</div>
            </div>
          </div>
          
          <div className="bg-orange-900/30 p-4 rounded border border-orange-400">
            <h4 className="font-semibold text-orange-300 mb-2">URL: <InlineCode>/dashboard/settings</InlineCode></h4>
            <div className="space-y-2 text-xs">
              <div className="bg-green-600 text-white p-1 rounded">Dashboard Header</div>
              <div className="bg-red-600 text-white p-1 rounded">Settings Component</div>
              <div className="bg-green-600 text-white p-1 rounded">Dashboard Footer</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-green-900/30 border-l-4 border-green-400 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-300">✅ Benefits of Nested Routes</h3>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Shared layouts</strong> across related pages</li>
            <li>• <strong>Persistent navigation</strong> and state</li>
            <li>• <strong>Cleaner code</strong> organization</li>
            <li>• <strong>Logical URL</strong> structure</li>
            <li>• <strong>Easier maintenance</strong> of related features</li>
          </ul>
        </div>

        <div className="bg-yellow-900/30 border-l-4 border-yellow-400 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-yellow-300">🎨 Common Layout Patterns</h3>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Admin Dashboard</strong> with sidebar</li>
            <li>• <strong>Settings pages</strong> with tabs</li>
            <li>• <strong>User profile</strong> sections</li>
            <li>• <strong>E-commerce</strong> category browsing</li>
            <li>• <strong>Documentation</strong> with navigation</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-900/30 border-l-4 border-red-400 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-red-300">⚠️ Remember</h3>
        <p className="text-sm">
          <strong>Always use <InlineCode>&lt;Outlet /&gt;</InlineCode></strong> in your layout components! 
          Without it, child routes won't render.
        </p>
      </div>
    </div>
  )
}

export default Slide14