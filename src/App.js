import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <News />
    </div>
  );
}

export default App;
