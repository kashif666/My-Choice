

import { Link } from "react-router-dom";
import Nav from "./Navbar";


function HomePage() {


    return ( 
<div>

<br />

<div class="row row-cols-1 row-cols-md-6 g-4" style={{marginLeft:'1.5vw'}}>
  <div class="col">
    <div class="card h-100">

    <Link to="/Armyschool">
      <img src="Aps.png" class="card-img-top" alt="Army Public School & College"/>
      </Link>

      <div class="card-body">
        <h5 class="card-title">Army Public School & College(APS)</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  {/* Burn Hall School */}

  <div class="col">
    <div class="card h-100">
      <Link to="/BurnHall">
      <img src="Burn Hall.jpg" class="card-img-top" alt="Burn Hall School & College"/>
      </Link>
      <div class="card-body">
        <h5 class="card-title">Burn Hall School & College</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

{/* Modernage school */}

  <div class="col">
    <div class="card h-100">
      <img src="Modernage.jpg" class="card-img-top" alt="Modernage School & College"/>
      <div class="card-body">
        <h5 class="card-title">Modernage School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="Tameer-i-Wattan.jpg" class="card-img-top" alt="Tameer-i-Wattan School & College"/>
      <div class="card-body">
        <h5 class="card-title">Tameer-i-Wattan School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="Beaconhouse.jpg" class="card-img-top" alt="Beaconhouse School & College"/>
      <div class="card-body">
        <h5 class="card-title">Beaconhouse School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="City School.png" class="card-img-top" alt=" The City School & College"/>
      <div class="card-body">
        <h5 class="card-title">The City School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
       <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
</div>
<br />

<div class="row row-cols-1 row-cols-md-6 g-4" style={{marginLeft:'1.5vw'}}>
  <div class="col">
    <div class="card h-100">
      <img src="PIPS atd.jpg" class="card-img-top" alt="Pakistan international school & college"/>
      <div class="card-body">
        <h5 class="card-title">Pakistan International School & College (PIPS)</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="Abbottabad.jpg" class="card-img-top" alt="Abbottabad Public School & College"/>
      <div class="card-body">
        <h5 class="card-title">Abbottabad Public School & College</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="Pakistan.jpg" class="card-img-top" alt="Pakistan Public School & College"/>
      <div class="card-body">
        <h5 class="card-title">Pakistan Public School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="The Pakistan.jpg" class="card-img-top" alt="The Pakistan Science School & College"/>
      <div class="card-body">
        <h5 class="card-title">The Pakistan Science School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="Shaheen.jpg" class="card-img-top" alt="Shaheen International School & College (SIS&C)"/>
      <div class="card-body">
        <h5 class="card-title">Shaheen International School & College (SIS&C)</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="Muslim.jpg" class="card-img-top" alt="The Muslim School & College  "/>
      <div class="card-body">
        <h5 class="card-title">Muslim Edutaion System</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
       <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
</div>

<br />

<div class="row row-cols-1 row-cols-md-6 g-4" style={{marginLeft:'1.5vw'}}>
  <div class="col">
    <div class="card h-100">
      <img src="IIUI.png" class="card-img-top" alt="Iiui School & College"/>
      <div class="card-body">
        <h5 class="card-title">Iiui School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="Progressive.jpg" class="card-img-top" alt="Progressive School & College"/>
      <div class="card-body">
        <h5 class="card-title">Progressive School & College</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="International.jpg" class="card-img-top" alt="International Public School & College"/>
      <div class="card-body">
        <h5 class="card-title">International Public School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="Asian.jpg" class="card-img-top" alt="Asian International Public School & College"/>
      <div class="card-body">
        <h5 class="card-title">Asian International Public School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="Abbott.jpg" class="card-img-top" alt="Abbottabad School & College of Science"/>
      <div class="card-body">
        <h5 class="card-title">Abbottabad School & College of Science</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="Hillcrest.jpg" class="card-img-top" alt="Hillcrest School & College"/>
      <div class="card-body">
        <h5 class="card-title">Hillcrest School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
       <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
</div>

<br />

<div class="row row-cols-1 row-cols-md-6 g-4" style={{marginLeft:'1.5vw'}}>
  <div class="col">
    <div class="card h-100">
      <img src="Peace.jpg" class="card-img-top" alt=" The Peace School & College"/>
      <div class="card-body">
        <h5 class="card-title">The Peace School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="Peshawar.jpg" class="card-img-top" alt="The Peshawar Science School & College"/>
      <div class="card-body">
        <h5 class="card-title">The Peshawar Science School & College</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="Chinar.jpg" class="card-img-top" alt="Chinar Public School & College"/>
      <div class="card-body">
        <h5 class="card-title">Chinar Public School & College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="Sarhad.png" class="card-img-top" alt="Sarhad Group of College"/>
      <div class="card-body">
        <h5 class="card-title">Sarhad Group of College</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
       <button class="btn btn-outline-success" type="button" style={{width:'7vw',marginLeft:'3vw'}}> Apply</button>
      </div>
    </div>
  </div>
</div>

</div>


    );
}

export default HomePage;