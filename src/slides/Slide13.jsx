import { CodeBlock, InlineCode } from '../components/CodeBlock'

function Slide13() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Route Placement & Structure</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Route Order Matters!</h3>
            <p className="text-lg mb-4">
              React Router matches routes from <strong>top to bottom</strong> and uses the <strong>first match</strong>.
            </p>
            <div className="bg-red-900/30 border border-red-400 rounded p-4">
              <h4 className="font-semibold text-red-300 mb-2">❌ Wrong Order</h4>
              <CodeBlock 
                language="jsx" 
                filename="WrongOrder.jsx"
              >
{`<Routes>
  <Route path="/users/:id" element={<User />} />
  <Route path="/users/new" element={<NewUser />} />
</Routes>`}
              </CodeBlock>
              <p className="text-xs text-red-300 mt-2"><InlineCode>/users/new</InlineCode> will match <InlineCode>/users/:id</InlineCode> with id="new"</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">✅ Correct Structure</h3>
            <CodeBlock 
              language="jsx" 
              filename="CorrectOrder.jsx"
            >
{`<Routes>
  {/* Most specific routes first */}
  <Route path="/users/new" element={<NewUser />} />
  <Route path="/users/edit" element={<EditUser />} />
  
  {/* Dynamic routes after static ones */}
  <Route path="/users/:id" element={<User />} />
  
  {/* Catch-all routes last */}
  <Route path="/users/*" element={<UsersNotFound />} />
  <Route path="*" element={<NotFound />} />
</Routes>`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Organized App Structure</h3>
            <CodeBlock 
              language="jsx" 
              filename="OrganizedApp.jsx"
            >
{`function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />
      
      {/* Authentication routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      {/* User management */}
      <Route path="/users/new" element={<NewUser />} />
      <Route path="/users/:id" element={<UserProfile />} />
      <Route path="/users/:id/edit" element={<EditUser />} />
      
      {/* Products */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      
      {/* Catch all 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}`}
            </CodeBlock>
          </div>

          <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">💡 Organization Tips</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Group related routes</strong> together</li>
              <li>• <strong>Static routes</strong> before dynamic ones</li>
              <li>• <strong>More specific</strong> before less specific</li>
              <li>• <strong>Catch-all routes</strong> at the end</li>
              <li>• <strong>Comment sections</strong> for clarity</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-900/30 border-l-4 border-red-400 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-red-300">⚠️ Common Mistakes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Wrong Route Order</h4>
            <p className="text-sm text-gray-300">Dynamic routes matching everything</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Missing 404 Route</h4>
            <p className="text-sm text-gray-300">Users see blank page on bad URLs</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Too Many Routes in App.jsx</h4>
            <p className="text-sm text-gray-300">Hard to maintain and understand</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Inconsistent Path Naming</h4>
            <p className="text-sm text-gray-300">Confusing URL patterns</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide13