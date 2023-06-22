import React from 'react';
import Tabs from '../componets/Tabs';
import Footer from "../componets/Footer";




const Products = () => {
	return (
		
		<div className='pproduct'>
			<div className="Product">
				<img src={require('../img/Group 5.png') } alt="Group 5.png" className="img-fluid" />
				<h1>Our Product Range</h1>
			</div>
			<Tabs/>
			<Footer/>
		</div>
	
	);
};

export default Products;
