function Slide4() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Why Not Traditional Reloads?</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-red-900/30 border-l-4 border-red-400 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-red-300">Traditional Multi-Page</h3>
            <ul className="space-y-3 text-lg">
              <li>❌ <strong>Full page reload</strong> on each navigation</li>
              <li>❌ <strong>Re-download</strong> CSS, JS, and assets</li>
              <li>❌ <strong>Lose component state</strong></li>
              <li>❌ <strong>Slower</strong> user experience</li>
              <li>❌ <strong>Flash</strong> between pages</li>
            </ul>
          </div>

          <div className="bg-green-900/30 border-l-4 border-green-400 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-green-300">SPA with React Router</h3>
            <ul className="space-y-3 text-lg">
              <li>✅ <strong>No page reload</strong> - instant navigation</li>
              <li>✅ <strong>Keep assets cached</strong> in memory</li>
              <li>✅ <strong>Preserve state</strong> across routes</li>
              <li>✅ <strong>Smooth animations</strong> possible</li>
              <li>✅ <strong>Better performance</strong></li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Performance Comparison</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-red-300">Traditional Page Load:</p>
                <div className="bg-red-900/30 h-8 rounded mt-1 flex items-center px-3">
                  <div className="w-full bg-red-400 h-2 rounded animate-pulse"></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">2-5 seconds</p>
              </div>
              
              <div>
                <p className="font-semibold text-green-300">SPA Route Change:</p>
                <div className="bg-green-900/30 h-8 rounded mt-1 flex items-center px-3">
                  <div className="w-1/4 bg-green-400 h-2 rounded"></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">&lt; 100ms</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">User Experience</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
                <span>Feels like a native mobile app</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚡</span>
                <span>Lightning fast navigation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎯</span>
                <span>Bookmarkable URLs</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔄</span>
                <span>Browser back/forward works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide4