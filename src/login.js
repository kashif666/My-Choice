import { Link } from "react-router-dom";

function Login() {

const mystyle={
  width:'40vw',
  height:'30vw',
   margin:"auto",


}

    return ( 

<div>
  <div style={mystyle}>
  <div style={{width:'30vw',margin:"auto",marginTop:'10vw',backgroundColor:"lightblue"}}>


<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  
  <button type="submit" class="btn btn-success" style={{marginLeft:'14vw'}}>Sign in</button>

 <br />

<p style={{marginLeft:'10vw'}}>New around here? <Link to="/signUp"> <button type="button" class="btn btn-info">Sign Up</button></Link></p>

 <p style={{marginLeft:'12vw'}}> <Link>Forgot password?</Link></p>
  </form> 
</div>

</div>

</div>

);
}

export default Login;