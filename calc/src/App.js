import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calc from './calc'; 

function App() {
  return (
    <Router basename="/dev_downy/calc">
      <Routes>
        <Route path="/" element={<Calc />} />
      </Routes>
    </Router>
  );
}

export default App;
