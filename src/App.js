import HomePage from "./Home";
import Nav from "./Navbar";
import Login from "./login";
import SignUp from "./signUp";
import { Routes, Route } from "react-router-dom";
import AddInstitute from "./AddInstitute";
import Help from "./Help";
import Armyschool from "./ArmySchool";


function App() {
  return (

<div>
    <Nav/>
    
    <Routes>

      <Route path="/" element={<HomePage/>}/>;
      <Route path="/login" element={<Login/>}/>;
      <Route path="/signUp" element={<SignUp/>}/>;
      <Route path="/AddInstitute" element={<AddInstitute/>}/>;
      <Route path="/Help" element={<Help/>}/>;
      <Route path="/ArmySchool" element={<Armyschool/>}/>;

    </Routes>
    </div>

  );
  
}

export default App;
