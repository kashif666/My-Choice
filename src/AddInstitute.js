

function AddInstitute() {
    

const mystyle1 =
{
    width: "50vw",
    height: "60vw",
    border:"2px solid black",
    marginLeft: "25vw",
    backgroundColor: "rgb(79, 189, 186)" ,
    borderRadius: "2vw",
    marginTop: "4vw",
    marginBottom:"10vw"

}


return ( 


<div>
        
<form class="row g-10" style={mystyle1}>

<h2 style={{marginLeft:"14vw"}}>Add Your Institute</h2>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
<br />
<br />
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label">School/College Name</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>

  <div class="col-6">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>

  <div class="col-md-6">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>KPK</option>
      <option>Punjab</option>
      <option>Sindh</option>
      <option>Balochistan</option>
      <option>Gilgit</option>
    </select>
  </div>
  

  <div class="col-md-6">
    <label for="inputCity" class="form-label">Phone</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>

  <div class="col-md-3">
    <label for="inputZip" class="form-label">Zip Code/Postal</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>

  <div class="col-md-3">
    <label for="inputZip" class="form-label">Branch No:</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>

  
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
      <label class="form-check-label" for="autoSizingCheck">
        Remember me
      </label>
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-outline-dark">Sign in</button>
  </div>
</form>




</div>

);
}

export default AddInstitute;