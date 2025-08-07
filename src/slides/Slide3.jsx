function Slide3() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">SPA with Multiple Routes</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Single Page Application (SPA)</h3>
            <ul className="space-y-3 text-lg">
              <li>• <strong>One HTML file</strong> loads initially</li>
              <li>• <strong>JavaScript</strong> handles all navigation</li>
              <li>• <strong>Components</strong> swap in and out</li>
              <li>• <strong>No full page reloads</strong></li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-green-300">Route Examples</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between bg-black/30 p-2 rounded">
                <span>/</span>
                <span className="text-green-300">→ Home Component</span>
              </div>
              <div className="flex justify-between bg-black/30 p-2 rounded">
                <span>/about</span>
                <span className="text-green-300">→ About Component</span>
              </div>
              <div className="flex justify-between bg-black/30 p-2 rounded">
                <span>/products</span>
                <span className="text-green-300">→ Products Component</span>
              </div>
              <div className="flex justify-between bg-black/30 p-2 rounded">
                <span>/contact</span>
                <span className="text-green-300">→ Contact Component</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Visual Flow</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-2">
                Browser URL: /about
              </div>
            </div>
            <div className="text-center text-2xl">↓</div>
            <div className="text-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block mb-2">
                React Router matches route
              </div>
            </div>
            <div className="text-center text-2xl">↓</div>
            <div className="text-center">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg inline-block mb-2">
                Renders About Component
              </div>
            </div>
            <div className="text-center text-2xl">↓</div>
            <div className="text-center">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg inline-block">
                User sees About page content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide3