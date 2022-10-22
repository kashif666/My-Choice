 import { Link } from "react-router-dom";
function Nav() {

 const mystyle =
{
  backgroundColor: "lightBlue",
  width:"100vw",
  height:"7vw"

 };

    return ( 
    <div style={mystyle}>
<Link to="/">
<button style={{marginTop:'60px',marginLeft:'8px'}} type="button" class="btn btn-outline-success">
 Home
</button></Link>


  <form class="d-flex" style={{width:'40vw',marginLeft:'25vw',marginTop:'-35px',}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

     

<div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginTop:'-2.5vw',marginRight:'4vw'}}>

<Link to="/login">
  <button class="btn btn-outline-success" type="button"> Login </button>
  </Link>

<Link to="/AddInstitute">
  <button  class="btn btn-outline-success" type="button">Add institute</button>
  </Link>

<Link to={"/Help"}>
  <button  class="btn btn-outline-success" type="button">Help</button>
  </Link>


</div>

      </div>

      


);
}

export default Nav;