import { Link } from "react-router-dom";

function Footer() {
  return (

    <div>

      {/* <!-- Footer --> */}
    <footer id="footer" class="text-center text-dark">
        {/* <!-- Grid container --> */}
        <div class="container p-4">


          {/* <!-- Section: Form --> */}
        <section class="">
            <form action="">
              {/* <!--Grid row--> */}
            <div class="row d-flex justify-content-center">
                {/* <!--Grid column--> */}
                <div class="col-auto">
                <p class="pt-2">
                    <strong>FeedBack</strong>
                </p>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div>
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px', width: '600px', margin: 'auto' }}>Feedback</textarea>
                    <br />
                  </div>

                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div class="col-auto">
                  {/* <!-- Submit button --> */}
                  <button type="submit" class="btn btn-outline-dark mb-4">
                    <b>Send</b>
                  </button>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </form>
          </section>
          {/* <!-- Section: Form --> */}

          {/* <!-- Section: Text --> */}

          {/* <!-- Section: Text --> */}

          {/* <!-- Section: Links --> */}
          <section class="">
            {/* <!--Grid row--> */}
            <div class="row">
              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Description</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                  repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                  eum harum corrupti dicta, aliquam sequi voluptate quas.
                </p>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Social Media--> */}
              <div class="col-lg-3 col-md-6 mb-7 mb-md-0">
                <h5 class="text-uppercase">Social media</h5>

                <ul class="list-unstyled mb-0">
                  <section class="mb-4">
                    {/* <!-- Facebook --> */}
                    {/* <li>
                    <Link
                      class="btn btn-outline-dark btn-floating m-1" href="https://web.facebook.com/profile.php?id=100077857866703" role="button">
                      <img style={{ width: '30px', height: '30px', background: "white" }} src="facebook.png" /></Link>
                      </li> */}

                      

                    {/* <!-- Twitter --> */}
                    <Link class="btn btn-outline-dark btn-floating m-1" href="" role="button">
                      <img style={{ width: '30px', height: '30px' }} src="twitter.jpg" />

                    </Link>

                    {/* <!-- Google --> */}
                    <Link class="btn btn-outline-dark btn-floating m-1" href="" role="button"
                    ><img style={{ width: '30px', height: '30px', backgroundColor: "white" }} src="Google1.png" /></Link>

                    {/* <!-- Instagram --> */}
                    <Link class="btn btn-outline-dark btn-floating m-1" href="" role="button"
                    >
                      <img style={{ width: '30px', height: '30px', backgroundColor: 'white' }} src="instagram1.png" />
                    </Link>

                    {/* <!-- Linkedin --> */}
                    <Link class="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/syedkashif-alishah-120921226/" role="button">
                      <img style={{ width: '30px', height: '30px', backgroundColor: 'white' }} src="linkedin.png" />
                    </Link>

                    {/* <!-- Github --> */}
                    <Link
                      class="btn btn-outline-dark btn-floating m-1" href="https://github.com/kashif666/My-Choice" role="button">
                      <img style={{ width: '30px', height: '30px', backgroundColor: 'white' }} src="github.png" />

                    </Link>
                  </section>
                </ul>
              </div>
              {/* <!--Social Media--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
        </div>



      </footer>


    </div>


  );
}

export default Footer;