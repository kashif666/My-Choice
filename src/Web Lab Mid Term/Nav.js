import "./medterm.css"
import {FaMoon} from 'react-icons/fa';
import {FaBell} from 'react-icons/fa';
import {FaChessBoard} from 'react-icons/fa';
import{FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
function Nav() {
  
    return (
      <div>

<div style={{backgroundColor:"rgba(3,169,244,0.8)",height:"10vh"}}>
<Link to="/">
<img src="https://wassets.hscicdn.com/static/images/logo.png" style={{width:"200px",marginLeft:"20px"}}/>
</Link>

<div class="dropdown">
        <a class="dropbtn">Live Score</a>
        <div class="dropdown-content">
<Link to="/Next"><a href="#">Results</a></Link>
<Link to="/Next"><a href="#">Live score home</a></Link>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
        </div>

        <div class="dropdown">
        <a class="dropbtn">Series</a>
        <div class="dropdown-content">
        <Link to="/Next"> <a href="#">Results</a></Link>
        <Link to="/Next"> <a href="#">Live score home</a></Link>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
        </div>

        <div class="dropdown">
        <a class="dropbtn">Teams</a>
        <div class="dropdown-content">
        <Link to="/Next"> <a href="#">Results</a></Link>
        <Link to="/Next"><a href="#">Live score home</a></Link>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
        </div>

        <div class="dropdown">
        <a class="dropbtn">News</a>
        <div class="dropdown-content">
        <Link to="/Next"><a href="#">Results</a></Link>
        <Link to="/Next"> <a href="#">Live score home</a></Link>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
        </div>


        <div class="dropdown">
        <a class="dropbtn">Features</a>
        <div class="dropdown-content">
        <Link to="/Next"> <a href="#">Results</a></Link>
        <Link to="/Next"> <a href="#">Live score home</a></Link>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
        </div>

        <div class="dropdown">
        <a class="dropbtn">Videos</a>
        <div class="dropdown-content">
        <Link to="/Next"> <a href="#">Results</a></Link>
         <Link to="/Next"> <a href="#">Live score home</a></Link>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
        </div>

        <div class="dropdown">
        <a class="dropbtn">Stats</a>
        <div class="dropdown-content">
          <a href="#">Results</a>
          <a href="#">Live score home</a>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
        </div>




<div class="dropdown" style={{marginLeft:"60px"}}>
        <a class="dropbtn">EditionPK</a>
        <div class="dropdown-content">
          <a href="#">Results</a>
          <a href="#">Live score home</a>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
        </div>
<FaMoon style={{color:"white",marginLeft:"40px",height:"50px",width:"20px"}}/>
<FaBell style={{color:"white",marginLeft:"45px",height:"50px",width:"20px"}}/>
<FaChessBoard style={{color:"white",marginLeft:"50px",height:"50px",width:"20px"}}/>
<FaSearch style={{color:"white",marginLeft:"55px",height:"50px",width:"20px"}}/>

</div>
        </div>
       
      );
}

export default Nav;
