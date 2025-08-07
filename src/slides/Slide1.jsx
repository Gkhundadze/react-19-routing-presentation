function Slide1() {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Session 10
        </h1>
        <h2 className="text-4xl font-semibold text-white">
          Intro to React Router
        </h2>
        <h3 className="text-3xl text-blue-300">
          Multi-Page Navigation
        </h3>
      </div>
      
      <div className="mt-16 space-y-4">
        <p className="text-xl text-gray-300">Frontend Development Course</p>
        <p className="text-lg text-gray-400">Learning Single Page Applications</p>
      </div>

      <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
        <h4 className="text-lg font-semibold mb-4 text-blue-300">What We'll Cover:</h4>
        <ul className="text-left space-y-2 text-gray-300">
          <li>• Understanding React Router</li>
          <li>• Setting up routing in React</li>
          <li>• Creating navigable components</li>
          <li>• Dynamic routes and parameters</li>
          <li>• Navigation best practices</li>
        </ul>
      </div>
    </div>
  )
}

export default Slide1