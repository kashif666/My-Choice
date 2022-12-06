import { Link } from "react-router-dom";

function Footer() {
  return (
<div style={{backgroundColor:"lightgray", marginTop:"100px",width:"100vw"}}>
    <div style={{backgroundColor:"white",border:"1px solid gray",width:"90vw",margin:"auto"}}>
     

      {/* <!-- Footer --> */}
      <footer id="footer" class="text-dark">
        {/* <!-- Grid container --> */}
        <div class="container p-4">



          {/* <!-- Section: Links --> */}
          <section class="">
            {/* <!--Grid row--> */}
            <div class="row">
              {/* <!--Grid column--> */}
              <div class="col-md-3">
                <h5 class="text-uppercase">Key Series</h5>
                <hr />

                <ul class="list-unstyled mb-0" >
                  <li>
                    T20 World Cup
                  </li><br />
                  <li>
                    England Vs Australia
                  </li><br />
                  <li>
                    New Zealand Vs India
                  </li><br />
                  <li>
                  Sri Lanka Vs Afghanistan
                  </li><br />
                  <li>
                    Australia Vs West Indies
                  </li><br />
                  <li>
                    QEA Trophy
                  </li><br />
                  <li>
                    WBBL, 2022
                  </li><br />
                  <Link to="/Next" > <li>
                    Marsh Cup
                  </li>
                  </Link><br />
                  <li>
                  New Zealand Vs India
                  </li><br />
                  <li>
                    Sri Lanka Vs Afghanistan
                  </li><br />
                  <li>
                    Australia Vs West Indies
                  </li><br />
                  <li>
          QEA Trophy
                  </li><br />
                  <li>
                    WBBL, 2022
                  </li><br />
                  <li>
                    Marsh Cup
                  </li><br />
                  <li>
                    Sri Lanka Vs Afghanistan
                  </li><br />
                  <li>
                    Australia Vs West Indies
                  </li><br />
                 
                 
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Quick Links</h5>
<hr />
                <ul class="list-unstyled mb-0">
                <li>
                    Sri Lanka Vs Afghanistan
                  </li><br />
                  <li>
                    Australia Vs West Indies
                  </li><br />
                 <Link to="/Next" ><li>
                    QEA Trophy
                  </li></Link>
                  <br />
                  <li>
                    WBBL, 2022
                  </li><br />
                  <li>
                    Marsh Cup
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">ESPNcricinfo Apps</h5>
                <hr />

                <ul class="list-unstyled mb-0">
                <li>
                    Sri Lanka Vs Afghanistan
                  </li><br />
                  <li>
                    Australia Vs West Indies
                  </li><br />
                  <li>
                    QEA Trophy
                  </li><br />
                  <li>
                    WBBL, 2022
                  </li><br />
                  <li>
                    Marsh Cup
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Social Media--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">ESPn Sites</h5>
                <hr />

                <ul class="list-unstyled mb-0">
                <li>
                    Sri Lanka Vs Afghanistan
                  </li><br />
                  <li>
                    Australia Vs West Indies
                  </li><br />
                  <li>
                    QEA Trophy
                  </li><br />
                  <li>
            WBBL, 2022
                  </li><br />
                  <li>
                    Marsh Cup
                  </li><br />
                </ul>
              </div>
              </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
          </div>
        



      </footer>
      </div>

    </div>


  );
}

export default Footer;