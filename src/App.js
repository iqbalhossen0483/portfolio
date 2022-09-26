import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRouter from "./Pages/AdminRouter";
import Deshboard from "./Pages/Deshboard";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <div className='bg-primary'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route
            path='/desboard'
            element={<AdminRouter element={<Deshboard />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
