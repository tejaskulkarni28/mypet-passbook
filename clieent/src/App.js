import './App.css';
import './Styles/navigation.css'
import './Styles/form.css'
import '../src/Styles/footer.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import About from './Components/About/About';
import AdminPage from './Components/Admin/AdminPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/approved" element={<AdminPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
