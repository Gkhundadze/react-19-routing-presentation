import { CodeBlock, InlineCode } from '../components/CodeBlock'

function Slide10() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-center mb-12">Example: User Page with useParams()</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Route Definition</h3>
            <CodeBlock 
              language="jsx" 
              filename="App.jsx"
            >
{`// App.jsx
import { Routes, Route } from 'react-router-dom'
import UserProfile from './UserProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/users/:userId" 
        element={<UserProfile />} 
      />
    </Routes>
  )
}`}
            </CodeBlock>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">UserProfile Component</h3>
            <CodeBlock 
              language="jsx" 
              filename="UserProfile.jsx"
            >
{`import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function UserProfile() {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch user data
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(userData => {
        setUser(userData)
        setLoading(false)
      })
  }, [userId])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>User ID: {userId}</p>
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">How useParams() Works</h3>
            <div className="space-y-4">
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-yellow-300">URL: <InlineCode>/users/123</InlineCode></h4>
                <p className="text-sm text-gray-300 mt-1">
                  useParams() returns: <InlineCode>{"{ userId: '123' }"}</InlineCode>
                </p>
              </div>
              
              <div className="bg-black/30 p-3 rounded">
                <h4 className="font-semibold text-yellow-300">URL: <InlineCode>/users/john-doe</InlineCode></h4>
                <p className="text-sm text-gray-300 mt-1">
                  useParams() returns: <InlineCode>{"{ userId: 'john-doe' }"}</InlineCode>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Navigation to Dynamic Routes</h3>
            <CodeBlock 
              language="jsx" 
              filename="UserList.jsx"
            >
{`function UserList() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <Link to={\`/users/\${user.id}\`}>
            View {user.name}'s Profile
          </Link>
        </div>
      ))}
    </div>
  )
}`}
            </CodeBlock>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-400/50 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-yellow-300">🔍 Multiple Parameters Example</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Route Definition:</h4>
            <CodeBlock language="jsx" filename="MultipleParams.jsx">
{`<Route 
  path="/users/:userId/posts/:postId" 
  element={<UserPost />} 
/>`}
            </CodeBlock>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Component Usage:</h4>
            <CodeBlock language="jsx" filename="UseParams.jsx">
{`const { userId, postId } = useParams()
// URL: /users/123/posts/456
// userId = "123"
// postId = "456"`}
            </CodeBlock>
          </div>
        </div>
      </div>

      <div className="bg-blue-900/30 border-l-4 border-blue-400 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3 text-blue-300">💡 Best Practices</h3>
        <ul className="space-y-2">
          <li>• Always destructure only the params you need</li>
          <li>• Handle loading states while fetching data</li>
          <li>• Validate parameters (check if user exists)</li>
          <li>• Use meaningful parameter names (:userId not :id)</li>
        </ul>
      </div>
    </div>
  )
}

export default Slide10