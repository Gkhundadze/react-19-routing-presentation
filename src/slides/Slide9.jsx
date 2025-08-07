import { CodeBlock, InlineCode } from '../components/CodeBlock'

function Slide9() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Dynamic Routing</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">What are Dynamic Routes?</h3>
            <p className="text-lg mb-4">
              Routes with variable segments that change based on data (like IDs, usernames, or slugs).
            </p>
            <div className="space-y-2 text-sm">
              <div className="bg-black/30 p-3 rounded flex justify-between">
                <InlineCode>/users/123</InlineCode>
                <span className="text-gray-300">→ User ID: 123</span>
              </div>
              <div className="bg-black/30 p-3 rounded flex justify-between">
                <InlineCode>/products/laptop</InlineCode>
                <span className="text-gray-300">→ Product: laptop</span>
              </div>
              <div className="bg-black/30 p-3 rounded flex justify-between">
                <InlineCode>/blog/react-hooks</InlineCode>
                <span className="text-gray-300">→ Post: react-hooks</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Route Parameter Syntax</h3>
            <CodeBlock 
              language="jsx" 
              filename="routes.jsx"
            >
{`// Route definition with parameter
<Route 
  path="/users/:userId" 
  element={<UserProfile />} 
/>

// Multiple parameters
<Route 
  path="/users/:userId/posts/:postId" 
  element={<UserPost />} 
/>

// Optional parameters
<Route 
  path="/search/:query?" 
  element={<SearchResults />} 
/>`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Real-World Examples</h3>
            <div className="space-y-4">
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-blue-300">E-commerce</h4>
                <div className="text-sm space-y-1 mt-2 font-mono">
                  <div>/products/:id</div>
                  <div>/category/:name</div>
                  <div>/user/:id/orders</div>
                </div>
              </div>
              
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-green-300">Social Media</h4>
                <div className="text-sm space-y-1 mt-2 font-mono">
                  <div>/profile/:username</div>
                  <div>/post/:postId</div>
                  <div>/:username/followers</div>
                </div>
              </div>
              
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-yellow-300">Documentation</h4>
                <div className="text-sm space-y-1 mt-2 font-mono">
                  <div>/docs/:section</div>
                  <div>/api/:version/:endpoint</div>
                  <div>/tutorial/:step</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">💡 Route Matching</h3>
            <p className="mb-3">React Router matches routes in order:</p>
            <CodeBlock language="jsx" filename="RouteOrdering.jsx">
{`<Routes>
  <Route path="/users/new" element={<NewUser />} />
  <Route path="/users/:id" element={<User />} />
</Routes>`}
            </CodeBlock>
            <p className="text-sm text-gray-300 mt-2">
              ⚠️ More specific routes should come first!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-900/20 border border-green-400/50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-green-300">🎯 Benefits of Dynamic Routing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🔄</div>
            <h4 className="font-semibold">Reusable Components</h4>
            <p className="text-sm text-gray-300">One component handles many URLs</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📊</div>
            <h4 className="font-semibold">Data Driven</h4>
            <p className="text-sm text-gray-300">URLs reflect your data structure</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="font-semibold">Scalable</h4>
            <p className="text-sm text-gray-300">Handle unlimited variations</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide9