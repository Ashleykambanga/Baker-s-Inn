import React from 'react';
import Footer from "../componets/Footer";
import Bakers from '../componets/Bakers';
import Card from "../componets/Card";


const Recipes = () => {
	return (
	
		<div className="recipe">
			<Bakers/>
			<h2>Our Recipes</h2>
			<Card/>
              <Footer/>
		</div>
		
	);
};

export default Recipes;
