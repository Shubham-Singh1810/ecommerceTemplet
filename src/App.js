import "./App.css";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="mainBody">
        <Sidebar/>
        <AllRoutes/>
      </div>
    </div>
  );
}

export default App;
