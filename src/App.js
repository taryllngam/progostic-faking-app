import './App.css';
import Landing from "../src/components/Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
