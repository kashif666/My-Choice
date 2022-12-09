 import { Link } from "react-router-dom";
function Navbar() {



    return ( 
    <div class="mystyle">
<Link to="/">
<button style={{marginTop:'2vw',marginLeft:'4vw'}} type="button" class="btn btn-outline-dark">
 <b>Home</b>
</button></Link>


  <form class="d-flex" style={{width:'40vw',marginLeft:'25vw',marginTop:'-2.5vw'}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit"><b>Search</b></button>
      </form>

     

<div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginTop:'-2.5vw',marginRight:'4vw'}}>

<Link to="/login">
  <button class="btn btn-outline-dark" type="button"> <b>Login</b> </button>
  </Link>

<Link to="/AddInstitute">
  <button  class="btn btn-outline-dark" type="button"><b>Add institute</b></button>
  </Link>

<Link to={"/Login"}>
  <button  class="btn btn-outline-dark" type="button"><b>Admin</b></button>
  </Link>

  <Link to={"/Help"}>
  <button  class="btn btn-outline-dark" type="button"><b>Help</b></button>
  </Link>


</div>

      </div>

      


);
}

export default Navbar;