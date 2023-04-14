import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div className='bg-primary'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <AddToHomeScreen />
    </div>
  );
}

export default App;
