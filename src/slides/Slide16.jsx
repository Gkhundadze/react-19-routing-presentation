function Slide16() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Q&A / Practice Prompt</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">🙋‍♀️ Questions?</h3>
            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded">
                <h4 className="font-semibold text-green-300 mb-2">Common Questions:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• "When should I use Link vs useNavigate()?"</li>
                  <li>• "How do I handle authentication with routes?"</li>
                  <li>• "Can I pass data between routes?"</li>
                  <li>• "What about search parameters (?query=value)?"</li>
                  <li>• "How do I animate route transitions?"</li>
                </ul>
              </div>
              <div className="text-center p-4 bg-blue-900/30 rounded">
                <p className="text-lg font-semibold text-blue-300">Ask Away! 🎤</p>
                <p className="text-sm text-gray-300 mt-2">
                  No question is too basic - we're here to learn together!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">🔧 Quick Review Quiz</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-black/30 p-3 rounded">
                <p><strong>1.</strong> What component wraps your entire app for routing?</p>
                <p className="text-gray-400 text-xs mt-1">Answer: BrowserRouter</p>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <p><strong>2.</strong> How do you get URL parameters in a component?</p>
                <p className="text-gray-400 text-xs mt-1">Answer: useParams() hook</p>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <p><strong>3.</strong> What's the difference between Link and NavLink?</p>
                <p className="text-gray-400 text-xs mt-1">Answer: NavLink provides isActive state</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 border border-green-400/50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-green-300">🎯 Practice Challenge</h3>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-yellow-300">Build a "Personal Blog" App</h4>
              
              <div className="bg-black/30 p-4 rounded">
                <h5 className="font-semibold text-blue-300 mb-2">Requirements:</h5>
                <ul className="space-y-1 text-sm">
                  <li>✅ <strong>Home page</strong> - list of blog posts</li>
                  <li>✅ <strong>Post page</strong> - individual post (/posts/:id)</li>
                  <li>✅ <strong>About page</strong> - your bio</li>
                  <li>✅ <strong>Contact page</strong> - contact form</li>
                  <li>✅ <strong>Navigation</strong> - working nav bar</li>
                  <li>✅ <strong>404 page</strong> - handle bad URLs</li>
                </ul>
              </div>

              <div className="bg-black/30 p-4 rounded">
                <h5 className="font-semibold text-purple-300 mb-2">Bonus Features:</h5>
                <ul className="space-y-1 text-sm">
                  <li>🌟 Active nav styling with NavLink</li>
                  <li>🌟 Back button on post pages</li>
                  <li>🌟 Search functionality</li>
                  <li>🌟 Categories/tags routing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-400/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-300">⏰ Time Estimate</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Basic routing setup:</span>
                <span className="font-semibold">15 minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Create components:</span>
                <span className="font-semibold">30 minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Dynamic routes:</span>
                <span className="font-semibold">20 minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Styling & polish:</span>
                <span className="font-semibold">25 minutes</span>
              </div>
              <hr className="border-yellow-400/30" />
              <div className="flex justify-between font-semibold text-yellow-300">
                <span>Total:</span>
                <span>~90 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-400/50 rounded-lg p-8 mt-12">
        <h3 className="text-3xl font-bold text-center mb-6 text-purple-300">🚀 Ready to Build?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-3 text-blue-300">Resources</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-black/30 p-2 rounded">📖 React Router docs</div>
              <div className="bg-black/30 p-2 rounded">💻 Code examples from slides</div>
              <div className="bg-black/30 p-2 rounded">🎨 CSS framework of choice</div>
              <div className="bg-black/30 p-2 rounded">🤝 Ask for help anytime!</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-3 text-green-300">Success Tips</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-black/30 p-2 rounded">🎯 Start simple, add features</div>
              <div className="bg-black/30 p-2 rounded">🔄 Test navigation frequently</div>
              <div className="bg-black/30 p-2 rounded">📝 Plan your routes first</div>
              <div className="bg-black/30 p-2 rounded">🎉 Celebrate small wins!</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold mb-4 text-white">Thanks for Learning React Router! 🎉</h3>
        <p className="text-xl text-gray-300">Now go build amazing navigable apps! 🌟</p>
      </div>
    </div>
  )
}

export default Slide16