import './App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='./Header' element={<Header/>} />
        <Route path="./" element={<Home/>} />
        <Route path="./Footer" element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
