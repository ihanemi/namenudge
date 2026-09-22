import './App.css'

function App() {
  return (
    <main className="app">
      <h1>NameNudge</h1>
      <p className="tagline">A simple, safe, preview-first batch file renamer.</p>
      <section className="status" aria-labelledby="status-heading">
        <h2 id="status-heading">Early development</h2>
        <p>
          File selection, rename preview, and renaming are coming next.
          This version does not change any files.
        </p>
      </section>
    </main>
  )
}

export default App
