import React from "react";
import Card from "../componets/Card";
import Footer from "../componets/Footer";
import { NavLink } from "react-router-dom";


const Home = () => {


    return (
        <div className="header">
            <div className="header1">
                <div className="hometxt">
                    <h1>Bring you the best value at the best price</h1>
                    <p>The freshest sandwiches you can make are with Baker’s inn soft white loaf.</p>
                    <button>READ MORE</button>
                </div>


                <div className="image" >
                    <img src={require('../img/Rectangle 344.png')} alt="Rectangle 344.png" className="img-fluid" />
                    <img src={require('../img/Rectangle 341.png')} alt="Rectangle 341.png" className="img-fluid" />
                    <img src={require('../img/Rectangle 343.png')} alt="Rectangle 343.png" className="img-fluid" />
                    <img src={require('../img/Rectangle 344.png')} alt="Rectangle 344.png" className="img-fluid" />
                </div>

            </div>

            <div className="about">
                <div className=" row innerAbout">

                    <div className="col-12 col-md-6 col-lg-4 col-xl-6 col-xxl-6">
                        <h2>About Baker’s Inn</h2>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 col-xl-6 col-xxl-6">
                        <p className="para">
                            It all started back in the eighties when Baker's Inn was just a small
                            confectionery company that employed 40 people and produced about
                            30,000 loaves a day. We now aim to provide a nourishing, convenient and
                            accessible answer to hunger’s call.
                        </p>
                        <NavLink className="btn1" to="/about">READ MORE</NavLink>
                    </div>

                </div>

                <div className="imm">
                    <div className="">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                                <img src={require('../img/Rectangle 12.png')} alt="Rectangle 12.png" className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                                <img src={require('../img/Rectangle 14.png')} alt="Rectangle 14.png" className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                                <img src={require('../img/Rectangle 15.png')} alt="Rectangle 15.png" className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                                <img src={require('../img/Rectangle 16.png')} alt="Rectangle 16.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="food">
                <div className="hh">
                    <h2>
                        Our Product Range
                    </h2>
                </div>
                <div className="container foodimg">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                            <img src={require('../img/Rectangle 22.png')} alt="Rectangle 22.png" className="img-fluid" />
                            <p>Bread</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                            <img src={require('../img/Rectangle 24.png')} alt="Rectangle 24.png" className="img-fluid" />
                            <p>Meat pies</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                            <img src={require('../img/Rectangle 26.png')} alt="Rectangle 26.png" className="img-fluid" />
                            <p>Scones</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                            <img src={require('../img/Rectangle 28.png')} alt="Rectangle 28.png" className="img-fluid" />
                            <p>Donuts</p>
                        </div>
                    </div>
                </div>
                <NavLink className="btn2" to="/products" >VIEW COMPLETE RANGE</NavLink>

            </div>



            <div className="tour">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 part1">
                            <h2>
                                Book A Factory Tour
                            </h2>
                            <p>Keen on seeing how Baker’s inn products are made? Are
                                you interested in a field trip day for your school’s class?
                                Get in touch with us to book a tour of our factory that is
                                closest to you. Fill in the booking form and we will get
                                back to you.</p>

                            <button type="button" className="btn3" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                BOOK FACTORY TOUR
                            </button>
                        </div>
                        {/* modal */}
                        <div className="modal fade bd-example-modal-lg" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">model</h5>
                                        <button type="buttonclose  rounded-circle" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="RequestProduct">
                                            <div className="container inner-RequestProduct">
                                                <div className="row">
                                                    <h2>
                                                        Request Product Donations
                                                    </h2>

                                                    <p>You can apply for product donations by completing this form, we will contact you should your application
                                                        be successful. please bear i mind that will need at least 3 week's notice to the date of your event
                                                    </p>
                                                    <div className="col-md-6">
                                                        {/* <div class="form-floating mb-3">
                                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                            <label for="floatingInput">Name Of Your Organisation</label>
                                                        </div> */}
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="Your Phone Number" aria-label="Name Of Your Organisation" />
                                                        </div>
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="contact person position" aria-label="contact person position" />
                                                        </div>
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="Contact Person's Telephone" aria-label="Contact Person's Telephone" />
                                                        </div>
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="Date Of Event" aria-label="Date Of Event" />
                                                        </div>
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="number of attendants" aria-label="number of attendants" />
                                                        </div>


                                                    </div>

                                                    <div className="col-md-6">
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="Name Of Contact Person" aria-label="Name Of Contact Person" />
                                                        </div>
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="Organisation Address" aria-label="Organisation Address" />
                                                        </div>
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="Contact Person's E-mail" aria-label="Contact Person's E-mail" />
                                                        </div>
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="Intended Use of Donation" aria-label="Intended Use of Donation" />
                                                        </div>
                                                        <div class="col">
                                                            <label for="inputAddress" class="form-label"></label>
                                                            <input type="text" class="form-control" placeholder="What products are specifically looking for?" aria-label="What products are specifically looking for?" />
                                                        </div>

                                                    </div>
                                                    <button>Proceed To next step</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* modal */}


                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-66">
                            <img src={require('../img/Rectangle 32.png')} alt="Rectangle 32.png" className="img-fluid" />
                        </div>

                    </div>
                </div>
            </div>
            {/* donation */}
            <div className="donation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 image2">
                            <img src={require('../img/Rectangle 31.png')} alt="Rectangle 31.png" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 part2">
                            <h2>
                                Request A Donation
                            </h2>
                            <p>If you are holding an event that you wish to have us
                                donate to, we’re more than glad to help. Fill in the
                                donation request form for us to best understand how we
                                can increase your event’s impact in the local community</p>


                            <button type="button" className="btn4" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                REQUEST  DONATION
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            {/* modal */}
            <div className="modal fade bd-example-modal-lg" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">model</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="RequestProduct">
                                <div className="container inner-RequestProduct">
                                    <div className="row">
                                        <h2>
                                            Request Product Donations
                                        </h2>

                                        <p>You can apply for product donations by completing this form, we will contact you should your application
                                            be successful. please bear i mind that will need at least 3 week's notice to the date of your event
                                        </p>
                                        <div className="col-md-6">
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Name Of Your Organisation</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">contact person position</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Contact Person's Telephone</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Date Of Event</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">number of attendants</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Name Of Contact Person</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Organisation Address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Contact Person's E-mail</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Intended Use of Donation</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">What products are specifically looking for?</label>
                                            </div>

                                        </div>
                                        <button>Proceed To next step</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* modal */}


            <div className="kids">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 image3">
                            <img src={require('../img/Group 10.png')}
                                alt="Group 10" className="img-fluid" />

                            {/* <img src={require('../img/new-super-mario-bros-2-super-paper-mario-png-favpng-rsGyK8GSVR5JcU6tF9nzJCgB8-removebg-preview 1.png')}
                                alt="new-super-mario-bros-2-super-paper-mario-png-favpng-rsGyK8GSVR5JcU6tF9nzJCgB8-removebg-preview 1.png" className="img-fluid  " />

                            <img src={require('../img/Group 9.png')}
                                alt="Group 9" className="img-fluid  " />

                            <img src={require('../img/2cd43b_19a192ae6ec44ffc9597044f7f063e0c_mv2 1.png')}
                                alt="2cd43b_19a192ae6ec44ffc9597044f7f063e0c_mv2 1.png" className="img-fluid"  /> */}

                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 KIDD ">
                            <h3>
                                Kids Corner
                            </h3>
                            <p>
                                Let your children join the fun. Explore a place
                                with exciting games and the top winners stand a
                                chance to win exciting monthly prizes!
                            </p>
                            <button className="btn5">PLAY GAMES</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="ccard">
                <h2>Baker’s Recipes</h2>
                <Card />
            </div>


            <div className="submit">
                <div className="container">
                    <div className="row">
                        <div className=" col-12 col-md-6">
                            <h2>
                                Get Notified About Promotions We Offer
                            </h2>
                            {/* <form>
                                <input label="email" placeholder=" your email"></input>
                                <button class="btn6">Submit</button>
                            </form> */}
                            <div class="">
                                <label for="inputAddress" class="form-label"></label>
                                <input type="text" class="form-control" placeholder="Your E-Mail" aria-label="Your E-Mail" /> <button class="btn6">Submit</button>
                            </div>
                        </div>
                        <div className="col-md-6 imagge">
                            <div className="d-flex">
                                <img src={require('../img/Rectangle 344.png')} alt="Rectangle 3414.png" className="img-fluid" />
                                <img src={require('../img/Rectangle 341.png')} alt="Rectangle 341.png" className="img-fluid " />
                                <img src={require('../img/Rectangle 343.png')} alt="Rectangle 343.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}

export default Home;