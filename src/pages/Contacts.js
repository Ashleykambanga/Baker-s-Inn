import React from 'react';
import Location from "../componets/Location";
import Footer from "../componets/Footer";


const Contact = () => {
	return (
		<div className="CContact">
			<div className="contact">
				<img src={require('../img/Group 8.png')} alt="Group 5.png" className="img-fluid" />
				<h1>Contact Us</h1>
			</div>
			<Location />
			<h2>
				List Of Baker’s Inn Depots
			</h2>
			<div className="container list">
				<div className="row inner-list">

					<div className="col-md-3 list1">
						<h6>Depot</h6>
						<p>Chinhoyi Depot</p>
						<p>Bindura Depot</p>
						<p>Murehwa Depot</p>
						<p>Mutare Depot</p>
						<br></br>
						<p>Hwange Depot</p>
						<p>Chiredzi Depot</p>
						<p>Masvingo Depot</p>
						<p>Gweru Depot</p>
						<p>Zvishavane Depot</p>

					</div>
					<div className="col-md-6 list2">
						<h6>Address</h6>
						<p>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</p>
						<p>461 Luton Road, Industrial Site, Bindura</p>
						<p>Stand number 351 Murehwa Growth Point</p>
						<p>5-7 Glasgow Road, Industrial Site, Mutare</p>
						<br></br>
						<p>29 Derby Drive, Hwange Industrial Site</p>
						<p>329 Lion Drive, Chiredzi</p>
						<p>1310 Mineral Road, Masvingo</p>
						<p>1843 Main Street, Gweru</p>
						<p>Shabanie Mine Club, Noelville, Zvishavane</p>
					</div>
					<div className="col-md-3 list3">
						<h6>Phone Number</h6>
						<p>0772 318 309</p>
						<p>066 2107317</p>
						<p>0652 122 514</p>
						<p>020 60715</p>
						<br></br>
						<p>0281 2820105</p>
						<p>0231 231 2709</p>
						<p>039 266 333</p>
						<p>054 2220 858</p>
						<p>0772 395567</p>
					</div>
				</div>
			</div>

			<div className=" email">
				<div className="row inner-email">
					<img src={require('../img/Rectangle 31.png')} alt="Group 5.png" className="img-fluid" />
					<div className="col-md-6">
						<div className="para2"> <p>For job enquiries , email your CV to</p> </div>
						<p>hr@bakersinnzim.com</p>
						<div className='dd'>
							<hr></hr>
						</div>
					</div>
					<div className="col-md-6">
						<div className="para2">	<p>For general enquiries, email</p>  </div>
						<p>marketing@bakersinnzim.com</p>

						<div className='ddd'>
							<hr></hr>
						</div>

					</div>
				</div>
			</div>

			<div className="call-back">
				<h2>Request A Callback</h2>
				<p>Complete the form below and we will respond within 24 hours.</p>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>

							<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
								<option selected>Your Title</option>
								<option value="1">Mr</option>
								<option value="2">Mrs</option>
								<option value="3">Three</option>
								<option value="3">Dr</option>
							</select>
						</div>

						<div className='col-md-6'>
							<div class="col">
								<input type="text" class="form-control" placeholder="Your Name" aria-label="Your Name" />
							</div>
						</div>
						<div class="col">
							<label for="inputAddress" class="form-label"></label>
							<input type="text" class="form-control" placeholder="Your Phone Number" aria-label="Your Phone Number" />
						</div>
						<div class="col">
							<label for="inputAddress" class="form-label"></label>
							<input type="text" class="form-control" placeholder="Your E-Mail" aria-label="Your E-Mail" />
						</div>

						<div class="col-12">
							<label for="inputAddress" class="form-label"></label>
							<input type="text" class="form-control" id="inputAddress" placeholder="Select Area Of Interest" />
						</div>
						<div class="col-12">
							<label for="inputAddress" class="form-label"></label>
							<input type="text" class="form-control" id="inputAddress" placeholder="Nature Of Enquiry" />
						</div>
						<div class="col-12">
							<label for="inputAddress" class="form-label"></label>
							<input type="text" class="form-control" id="inputAddress" placeholder="Do You Want To Be Contacted By Phone" />
						</div>
						<div class="col-12 ">
							<label for="floatingTextarea2"></label>
							<textarea class="form-control message222" placeholder="Your Message" id="floatingTextarea2" ></textarea>
						</div>

						<div class="col-12">
							<button>Submit</button>
						</div>

					</div>
				</div>
			</div>


			<Footer />
		</div>
	);
};

export default Contact;
