import {  NavLink,  } from "react-router-dom";


const Footer = () => {

     return(
     <div className="footer">
        <div className="footerimg">
            <img src={require('../img/549cbc104480557-2-transformed 1.png')} 
            alt="549cbc104480557-2-transformed 1.png" className="img-fluid"/>
            <div className="footerline">
            <hr></hr>
            </div>
            </div>

                <div className="inner-footer">

                    <div className="list5">
                    <h3>Instagram Feed</h3>
                       <img src={require('../img/Rectangle 688.png')} alt="Rectangle 688.png" className="img-fluid"/>
                       <img src={require('../img/Rectangle 689.png')} alt="Rectangle 689.png" className="img-fluid"/>
                       <img src={require('../img/Rectangle 690.png')} alt="Rectangle 690.png" className="img-fluid"/>

                    </div>

                    <div className="list6">
                        <h3>Our Location</h3>
                        <li>1 Shepperton Road,</li>
                        <li>Graniteside,</li>
                        <li>Harare,</li>
                        <li>Zimbabwe.</li>
                    </div>

                    <div className="list7">
                    <h3>Get In Touch With Us</h3>
                    <li>  <img src={require('../img/Vector 6.png')} alt="Vector 6.png" className="img-fluid"  /> 08080151 </li>
                    <li>08080152</li>
                    <li>+263 242 751 481</li>
                    <li>+263 242 710 334</li>
                    <li> <img src={require('../img/Vector 5.png')} alt="Vector 5.png" className="img-fluid"  /> marketing@bakersinnzim.com </li>
                    </div>

                    <div className="list8">
                        <h3>Sitemap</h3>
                        <ul>
                            <li>
                            <NavLink to="/" activeStyle>
                                    Home
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/about" activeStyle>
                                About Us
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/products" activeStyle>
                                Products
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/recipes" activeStyle>
                                Recipes
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/kids" activeStyle>
                                Kid's Corner
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact" activeStyle>
                                Contact Us
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
             <div className="list9">
                 <img src={require('../img/Vector-4.png')} alt="Vector-4.png" className="img-fluid" />
                 <img src={require('../img/Vector-3.png')} alt="Vector-3.png" className="img-fluid" />
                 <img src={require('../img/Vector-2.png')} alt="Vector-2.png" className="img-fluid" />
             </div>
             <div className="footerline">
            <hr></hr>
            </div>
            
            <div className="container">
                <div className="row inner-innscor">
                    <div className="col-md-6 loggo">
                        <p>Subsidiary of   <img src={require('../img/inscor_logo@2x 1.png')} alt="inscor_logo@2x 1.png" className="img-fluid"  /></p>
                    </div>
                    <div className="col-md-6 ">
                        <p>Copyright © 2022 Bakers Inn. All rights reserved. Site by<span> NoWalls Pan Africa</span></p>
                    </div>
                </div>
            </div>
            </div> 
     )
}
export default Footer;
