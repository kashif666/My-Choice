import { Link } from "react-router-dom";

function Armyschool() {
    return ( 

        <div>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" style={{width:'100vw',height:'55vw',marginTop:'2vw'}}>

    <div class="carousel-item active">
      <img src="Army1.jpg" class="d-block w-95" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="Army2.jpg" class="d-block w-95" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Army3.jpg" class="d-block w-95" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="Army4.jpg" class="d-block w-95" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="Army5.jpg" class="d-block w-95" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Army6.jpg" class="d-block w-95" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Army7.jpg" class="d-block w-95" alt="..."/>
    </div>


  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<br />

<div style={{border:'2px solid black',width:'20vw',height:'20vw',marginLeft:'77vw'}}>
<h3>
    Contact Info
</h3>
<Link to ="/email">abbottabadapsacs@gmail.com</Link>
<br />
<br />
<Link to="/contact">tel:0992330174, 0992333150, 0992340430</Link>

<br />
<br />
<Link to ="/location">https://www.google.com/maps/search <br />/Murree%20Rd,%20Abbottabad,%20<br />Khyber%20Pakhtunkhwa,%20Pakistan</Link>
</div>

</div>




    );
}

export default Armyschool;