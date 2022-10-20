import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import Profile from "./Profile";
import Nav from "./Navbar";


function App() {
  return (

    <div>
    <BrowserRouter>
    <HomePage/>
    <Profile/>
    <Routes>

    <Route path="/Home" element={<HomePage/>}/>

    <Route path="/Profile" element={<Profile/>}/>



    </Routes>
    </BrowserRouter>

    

    </div>
  );
}

export default App;
