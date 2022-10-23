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
  <div style={{width:'30vw',height:'30vw',margin:"auto",marginTop:'10vw',backgroundColor:"lightblue",border:'2px solid gray'}}>


<form style={{marginTop:'4vw'}}>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>

<br />

  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>

  <br/>
  
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
      <label class="form-check-label" for="autoSizingCheck">
        Remember me
      </label>
    </div>
  </div>
  
  <button type="submit" class="btn btn-success" style={{marginLeft:'14vw'}}>Sign in</button>

 <br />
<br />
<p style={{marginLeft:'10vw'}}>New around here? <Link to="/signUp"> <button type="button" class="btn btn-info">Sign Up</button></Link></p>

<br />

 <p style={{marginLeft:'12vw'}}> <Link>Forgot password?</Link></p>
  </form> 
</div>

</div>

</div>

);
}

export default Login;