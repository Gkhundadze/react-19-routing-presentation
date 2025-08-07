import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'

function CodeBlock({ 
  children, 
  language = 'javascript', 
  filename = null,
  showLineNumbers = false,
  className = ''
}) {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  const codeContent = typeof children === 'string' ? children.trim() : children

  return (
    <div className={`code-block-container ${className}`}>
      {filename && (
        <div className="code-block-header">
          <div className="code-block-dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="code-block-filename">{filename}</div>
        </div>
      )}
      <div className="code-block-content">
        <pre 
          className={`language-${language} ${showLineNumbers ? 'line-numbers' : ''}`}
          style={{ margin: 0, background: 'transparent' }}
        >
          <code className={`language-${language}`}>
            {codeContent}
          </code>
        </pre>
      </div>
    </div>
  )
}

function TerminalBlock({ children, className = '' }) {
  return (
    <div className={`terminal-block-container ${className}`}>
      <div className="terminal-block-header">
        <div className="code-block-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="terminal-block-title">Terminal</div>
      </div>
      <div className="terminal-block-content">
        <pre className="terminal-pre">
          <code className="terminal-code">
            {typeof children === 'string' ? children.trim() : children}
          </code>
        </pre>
      </div>
    </div>
  )
}

// Inline code component for small code snippets
function InlineCode({ children, className = '' }) {
  return (
    <code className={`inline-code ${className}`}>
      {children}
    </code>
  )
}

export { CodeBlock, TerminalBlock, InlineCode }