import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Catalog from "./pages/Catalog/Catalog";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Main />} />
        
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;