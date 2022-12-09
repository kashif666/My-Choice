import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Login from "./login";
import SignUp from "./signUp";
import { Routes, Route } from "react-router-dom";
import AddInstitute from "./AddInstitute";
import Help from "./Help";
import Armyschool from "./ArmySchool";
import BurnHall from "./BurnHall";
import Moderanage from "./Moderanage";
import Beaconhouse from "./Beaconhouse";
import Tameer from "./Tameer-i-wattan";
import Shaheen from "./Shaheen";
import PIPS from "./PIPS";
import Progresive from "./Progresive";
import Peace from "./Peace";
import Peshawar from "./Peshawar";
import Muslim from "./Muslim";
import Pakistan from "./Pakistan";
import Footer from "./Footer";
import City from "./City";
import Chinar from "./Chinar";
import Abbottabad from "./Abbottabad";
import Abbott from "./Abbott";
import Hillcrest from "./Hillcrest";
import IIUI from "./IIUI";
import Apply from "./Apply";
// import AllSchool from "./AllSchool";
import DashboardContent from "./AdminView";
// import Nav from "./Nav";

function App() {
  return (

<div>
    <Navbar />
    {/* <Nav/> */}
    <Routes>

      <Route path="/" element={<HomePage/>}/>;
      <Route path="/login" element={<Login/>}/>;
      <Route path="/signUp" element={<SignUp/>}/>;
      <Route path="/AddInstitute" element={<AddInstitute/>}/>;
      <Route path="/Help" element={<Help/>}/>;
      <Route path="/ArmySchool" element={<Armyschool/>}/>;
      <Route path="/BurnHall" element = {<BurnHall/>}/>;
      <Route path="/Moderanage" element = {<Moderanage/>}/>;
      <Route path="/Beaconhouse" element= {<Beaconhouse/>}/>;
      <Route path="/Tameer-i-wattan" element={<Tameer/>}/>;
      <Route path="/Shaheen" element={<Shaheen/>}/>;
      <Route path="/PIPS" element ={<PIPS/>}/>;
      <Route path="/Progresive" element = {<Progresive/>}/>;
      <Route path="/Peace" element={<Peace/>}/>;
      <Route path="/Peshawar" element={<Peshawar/>}/>;
      <Route path="/Muslim" element={<Muslim/>}/>;
      <Route path="/Pakistan" element={<Pakistan/>}/>;
      <Route path="/City" element={<City/>}/>;
      <Route path="/Chinar" element={<Chinar/>}/>;
      <Route path="/Abbottabad" element ={<Abbottabad/>}/>;
      <Route path="/Abbott" element={<Abbott/>}/>;
      <Route path="/Hillcrest" element={<Hillcrest/>}/>;
      <Route path="/IIUI" element={<IIUI/>}/>;
      <Route path="/Apply" element={<Apply/>}/>;
      <Route path="/AdminView" element={<DashboardContent/>}/>;
      {/* <Route path="/AllSchool" element={<AllSchool/>}/>; */}

    </Routes>
    <Footer />
    </div>

  );
  
}

export default App;
