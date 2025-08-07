import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const totalSlides = 16

function Layout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const currentSlide = parseInt(location.pathname.split('/')[2]) || 1

  const goToNext = () => {
    if (currentSlide < totalSlides) {
      navigate(`/slide/${currentSlide + 1}`)
    }
  }

  const goToPrevious = () => {
    if (currentSlide > 1) {
      navigate(`/slide/${currentSlide - 1}`)
    }
  }

  const goToSlide = (slideNum) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      navigate(`/slide/${slideNum}`)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault()
        goToNext()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToPrevious()
      } else if (event.key >= '1' && event.key <= '9') {
        const slideNum = parseInt(event.key)
        if (slideNum <= totalSlides) {
          goToSlide(slideNum)
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">React Router Presentation</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              Slide {currentSlide} of {totalSlides}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Navigation Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={goToPrevious}
              disabled={currentSlide === 1}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>← Previous</span>
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => goToSlide(num)}
                  className={`w-8 h-8 rounded-full text-sm font-semibold transition-colors ${
                    num === currentSlide
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              onClick={goToNext}
              disabled={currentSlide === totalSlides}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>Next →</span>
            </button>
          </div>
          
          <div className="text-center mt-4 text-sm text-gray-300">
            Use arrow keys, spacebar, or number keys (1-9) for navigation
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout