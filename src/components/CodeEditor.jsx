function CodeEditor({ filename, children, language = 'javascript' }) {
  return (
    <div className="code-editor">
      <div className="code-editor-header">
        <div className="code-editor-dot red"></div>
        <div className="code-editor-dot yellow"></div>
        <div className="code-editor-dot green"></div>
        {filename && <div className="code-editor-title">{filename}</div>}
      </div>
      <div className="code-editor-content">
        <pre><code><SyntaxHighlight language={language}>{children}</SyntaxHighlight></code></pre>
      </div>
    </div>
  )
}

function Terminal({ children }) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="code-editor-dot red"></div>
        <div className="code-editor-dot yellow"></div>
        <div className="code-editor-dot green"></div>
        <div className="code-editor-title">Terminal</div>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  )
}

function SyntaxHighlight({ children, language = 'javascript' }) {
  // Enhanced syntax highlighting for common patterns
  let highlighted = children

  if (language === 'javascript' || language === 'jsx') {
    highlighted = highlighted
      // Comments first (so they don't get overridden)
      .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>')
      
      // Strings (before other patterns)
      .replace(/(['"`])([^'"`]*?)\1/g, '<span class="string">$1$2$1</span>')
      
      // Template literals
      .replace(/(`[^`]*`)/g, '<span class="string">$1</span>')
      
      // Keywords
      .replace(/\b(import|export|default|function|const|let|var|return|if|else|for|while|class|extends|try|catch|async|await|from|useState|useEffect|useParams|useNavigate|useLocation)\b/g, '<span class="keyword">$1</span>')
      
      // React/JSX specific
      .replace(/\b(React|ReactDOM|BrowserRouter|Routes|Route|Link|NavLink|Navigate|Outlet)\b/g, '<span class="keyword">$1</span>')
      
      // JSX tags
      .replace(/(<\/?[A-Z][a-zA-Z0-9]*)/g, '<span class="tag">$1</span>')
      .replace(/(<\/?)([a-z][a-zA-Z0-9]*)/g, '$1<span class="tag">$2</span>')
      
      // JSX attributes
      .replace(/(\s)([a-zA-Z-]+)(=)/g, '$1<span class="attribute">$2</span>$3')
      
      // Function calls
      .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="function">$1</span>')
      
      // Object properties
      .replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '.<span class="property">$1</span>')
      
      // Numbers
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>')
      
      // Operators
      .replace(/([=!<>+\-*/%&|^~?:]+)/g, '<span class="operator">$1</span>')
      
      // Variables in destructuring and declarations
      .replace(/\b(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '<span class="keyword">$1</span> <span class="variable">$2</span>')
      
      // Object destructuring
      .replace(/\{\s*([a-zA-Z_$][a-zA-Z0-9_$,\s]*)\s*\}/g, (match, vars) => {
        const highlighted = vars.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '<span class="variable">$1</span>')
        return `{${highlighted}}`
      })
  }

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />
}

export { CodeEditor, Terminal, SyntaxHighlight }