function App() {
  return (
    <>
      <p className="text-5xl text-red-500 bg-blue-500">Hello World!</p>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
      <button className="btn btn-ghost">Ghost</button>
      <input
        type="checkbox"
        value="light"
        className="toggle theme-controller"
      />
    </>
  );
}

export default App;
