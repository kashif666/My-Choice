

import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";


function HomePage() {


  const [schoolInfo, setSchoolInfo] = useState([

    { Name: "Army Public  School (APS) ", disc: "Location: ", img: "./Aps.png", p: "/Armyschool" },
    { Name: "BurnHall School & Collage", disc: "Location: ", img: "./Burn Hall.jpg",p: "/BurnHall" },
    { Name: "Moderanage School & Collage ", disc: "Location: ", img: "./Modernage.jpg",p: "/Moderanage" },
    { Name: "Beaconhouse School & College (BSS) ", disc: "Location: ", img: "./Beaconhouse.jpg",p: "/Beaconhouse" },
    { Name: "Tameer-i-Wattan School & College", disc: "Location: ", img: "./Tameer-i-Wattan.jpg" ,p: "/Tameer-i-Wattan"},
    { Name: "Shaheen Internation School & College", disc: "Location: ", img: "./Shaheen.jpg",p: "/Shaheen" },
    { Name: "Pakistan Public School & college(PIPS) ", disc: "Location: ", img: "./PIPS atd.jpg",p: "/PIPS" },
    { Name: "Progresive School & College ", disc: "Location: ", img: "./Progressive.jpg",p: "/Progresive" },
    { Name: "Peace School & College", disc: "Location: ", img: "./Peace.jpg" ,p: "/Peace"},
    { Name: "The Peshawar Science School & Collage", disc: "Location: ", img: "./Peshawar.jpg",p: "/Peshawar" },
    { Name: "Muslim School and Collage ", disc: "Location: ", img: "./Muslim.jpg",p: "/Muslim" },
    { Name: "The Pakistan Science School & College", disc: "Location: ", img: "./The Pakistan.jpg",p: "/Pakistan" },
    { Name: "City School ", disc: "Location: ", img: "./City School.png",p: "/City" },
    { Name: "Chinar School & Collage", disc: "Location: ", img: "./Chinar.jpg",p: "/Chinar" },
    { Name: "Abbottabad Public School & Collage(APS) ", disc: "Location: ", img: "./Abbottabad.jpg",p: "/Abbottabad" },
    { Name: "Abbottabad School & College of Science ", disc: "Location: ", img: "./Abbott.jpg",p: "/Abbott" },
    { Name: "Hillcrest School & Collage ", disc: "Location: ", img: "./Hillcrest.jpg",p: "/Hillcrest" },
    { Name: "IIUI School & College", disc: "Location: ", img: "./IIUI.png",p: "/IIUI" },

  ]);

  return (
    

    <div className="mainContainer">
      
      {
        schoolInfo.map((sco) => (
          <div id="cards-p-div">
          <div class="row row-cols-1 g-4">

          
            <div class="card" style={{height:"400px",marginLeft: '10px',width:"220px"}}>

              <Link to={sco.p}>
                <img src={sco.img} class="card-img-top" alt="Army Public School & College"/>
              </Link>

              <div class="card-body">
                <h5 class="card-title">{sco.Name}</h5>
                <p class="card-text">{sco.disc}</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-outline-dark" type="button" style={{ marginLeft: "48px" }}> <b>Apply</b> </button>
              </div>
            </div>
          
            </div>
            </div>

        ))
      }
    </div>

     

  );
}

export default HomePage;