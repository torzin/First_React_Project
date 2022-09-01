import logo from "./logo.svg"

function App() {
  return (
    <div className="Content">
      <nav>
        <div>
          <img className="react-logo" src={logo} />
          <h1 className="react-logo-text">ReactFacts</h1>
        </div>
        <h3 className="project-name">React Course - Project 1</h3>
      </nav>
      <main>
        <h1 className="title">Fun Facts About React</h1>
        <ul className="facts-list">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
