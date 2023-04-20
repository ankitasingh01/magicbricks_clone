import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ListedProperties from "./components/ListedProperties";
import { ListedPropertiesContextProvider } from "./components/context/ListedPropertiesContextProvider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListedPropertiesContextProvider>
        <Routes>
          <Route path="/" element={<ListedProperties />} />
        </Routes>
      </ListedPropertiesContextProvider>
    </div>
  );
}

export default App;
