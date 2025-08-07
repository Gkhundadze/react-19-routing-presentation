import { CodeBlock } from '../components/CodeBlock'

function Slide7() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Creating Pages (Home, About, Contact)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-300 text-center">Home Page</h3>
          <CodeBlock 
            language="jsx" 
            filename="Home.jsx"
          >
{`function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>
        This is the home page of 
        our awesome React app.
      </p>
      <ul>
        <li>Browse products</li>
        <li>Read our story</li>
        <li>Get in touch</li>
      </ul>
    </div>
  )
}

export default Home`}
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-300 text-center">About Page</h3>
          <CodeBlock 
            language="jsx" 
            filename="About.jsx"
          >
{`function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        We are a team of passionate 
        developers building amazing 
        web experiences.
      </p>
      <h2>Our Mission</h2>
      <p>
        To make the web more 
        accessible and beautiful 
        for everyone.
      </p>
    </div>
  )
}

export default About`}
          </CodeBlock>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-300 text-center">Contact Page</h3>
          <CodeBlock 
            language="jsx" 
            filename="Contact.jsx"
          >
{`function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact`}
          </CodeBlock>
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-lg p-6 mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Updated App.jsx with All Routes</h3>
        <CodeBlock 
          language="jsx" 
          filename="App.jsx"
        >
{`import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <nav>
        {/* We'll add navigation links in the next slide */}
      </nav>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App`}
        </CodeBlock>
      </div>

      <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-300">🗂️ File Organization Tip</h3>
        <p className="mb-3">Consider organizing your pages in a dedicated folder:</p>
        <CodeBlock 
          language="bash" 
          filename="file-structure.txt"
        >
{`src/
  pages/
    Home.jsx
    About.jsx
    Contact.jsx
  components/
    Header.jsx
    Footer.jsx
  App.jsx
  main.jsx`}
        </CodeBlock>
      </div>
    </div>
  )
}

export default Slide7