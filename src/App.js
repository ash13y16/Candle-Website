import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import CandlePage from "./components/CandlePage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<CandlePage />} />
                <Route path="/order" element={<ContactPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
