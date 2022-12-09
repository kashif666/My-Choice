

import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";


function HomePage() {


  const [schoolInfo, setSchoolInfo] = useState([

    { Name: "Army Public  School (APS) ", disc: "Location: Surban Chuak Abbottobad", img: "./Aps.png", p: "/Armyschool" },
    { Name: "BurnHall School & Collage", disc: "Location:Mandian Abbottabad ", img: "./Burn Hall.jpg",p: "/BurnHall" },
    { Name: "Moderanage School & Collage ", disc: "Location: Jangi Abbottabad ", img: "./Modernage.jpg",p: "/Moderanage" },
    { Name: "Beaconhouse School & College (BSS) ", disc: "Location: Abbottabad ", img: "./Beaconhouse.jpg",p: "/Beaconhouse" },
    { Name: "Tameer-i-Wattan School & College", disc: "Location: Mizail Chuak Abbottabad ", img: "./Tameer-i-Wattan.jpg" ,p: "/Tameer-i-Wattan"},
    { Name: "Shaheen Internation School & College", disc: "Location: Mandian ", img: "./Shaheen.jpg",p: "/Shaheen" },
    { Name: "Pakistan Public School & college(PIPS) ", disc: "Location: Abbottabad ", img: "./PIPS atd.jpg",p: "/PIPS" },
    { Name: "Progresive School & College ", disc: "Location: Bypass Road Mandian Abbottabad", img: "./Progressive.jpg",p: "/Progresive" },
    { Name: "Peace School & College", disc: "Location: Mandian Abbottabad", img: "./Peace.jpg" ,p: "/Peace"},
    { Name: "The Peshawar Science School & Collage", disc: "Location: Mandian ", img: "./Peshawar.jpg",p: "/Peshawar" },
    { Name: "Muslim School and Collage ", disc: "Location: Near Ayub madical Complex ", img: "./Muslim.jpg",p: "/Muslim" },
    { Name: "The Pakistan Science School & College", disc: "Location: Supply ATD ", img: "./The Pakistan.jpg",p: "/Pakistan" },
    { Name: "The City School ", disc: "Location: Supply / Jangi / Habibullah Colony Abbottabad ", img: "./City School.png",p: "/City" },
    { Name: "Chinar School & Collage", disc: "Location: Main Bazar Abbotttabad ", img: "./Chinar.jpg",p: "/Chinar" },
    { Name: "Abbottabad Public School & Collage(APS) ", disc: "Location: Supply ATD ", img: "./Abbottabad.jpg",p: "/Abbottabad" },
    { Name: "Abbottabad School & College of Science ", disc: "Location: Mandian", img: "./Abbott.jpg",p: "/Abbott" },
    { Name: "Hillcrest School & Collage ", disc: "Location: Main Bazar Abbottabad ", img: "./Hillcrest.jpg",p: "/Hillcrest" },
    { Name: "IIUI School & College", disc: "Location: Gush Market Supply Abbottabad ", img: "./IIUI.png",p: "/IIUI" },

  ]);

  return (
    

    <div className="mainContainer">
      
      {
        schoolInfo.map((sco) => (
          <div id="cards-p-div">
          <div class="row row-cols-1 g-4">

          
            <div class="card" style={{height:"400px",marginLeft: '10px',width:"220px"}}>

              <Link to={sco.p}>
                <img src={sco.img} className="card-img-top" alt="Army Public School & College"/>
              </Link>
              
              <Link to={sco.p} style={{color:"black",textDecoration:"none"}}>
              <div class="card-body">
                <h5 class="card-title" >{sco.Name}</h5>
                <p class="card-text">{sco.disc}</p>
              </div></Link>
              <Link to="Apply">
              <div class="card-footer">
                <button class="btn btn-outline-dark" type="button" style={{ marginLeft: "48px" }}> <b>Apply</b> </button>
              </div></Link>
            </div>
          
            </div>
            </div>

        ))
      }
    </div>

     

  );
}

export default HomePage;