import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRouter from './Pages/AdminRouter';
import Deshboard from './Pages/Deshboard';
import Education from './Pages/Home/Education';
import Experience from './Pages/Home/Experience';
import Home from './Pages/Home/Home';
import MainSkill from './Pages/Home/MainSkill';
import LogIn from './Pages/LogIn';

function App() {
  return (
    <div className="bg-primary">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="" element={<MainSkill />} />
            <Route path="main-skill" element={<MainSkill />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
          </Route>
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/desboard" element={<AdminRouter element={<Deshboard />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
