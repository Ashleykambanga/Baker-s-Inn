import { useState } from "react";




const Bakers = () => {

  
    const [recipesBakers] = useState([
        {
            recipesBakersTitle: `The Finest of Baker’s Tik Tok Community Recipes`,
            recipesBakersSec:`Make the finest croissants worthy of    Paris from your     home
                             #Croissant #Zimbabwe #Paris #Baker’s_Inn`,
            recipesBakersThri:`@The_Bakers_Inn`,
            id:1
        },
        {
            recipesBakersImage: require('../img/Rectangle 705.png'),
            recipesBakersImage2: require('../img/Rectangle 705.png'),
            recipesBakersImage3: require('../img/Rectangle 723.png'),
            recipesBakersImage4: require('../img/Rectangle 723.png'),
            id:2
        },
    ])

    return (  
        <div className="">
            
            <div className="container Bakers">
            
                <div className="row innerBakers">
                {/* <div class="loader">
                  </div> */}
                    {recipesBakers.map((finest) =>(
                        <div className="col-lg-6 BakersItem" key={finest.id}>
                            <div className="inner  align-items">
                            <h1>{finest.recipesBakersTitle}</h1>
                            <h4>{
                            finest.recipesBakersSec}</h4>
                            <p>{finest.recipesBakersThri}</p>
                            </div>
                            <div className="imagge">
                                <img src={finest.recipesBakersImage} alt="" className="img-fluid" />
                                <img src={finest.recipesBakersImage2} alt="" className="img-fluid" />
                                <img src={finest.recipesBakersImage3} alt="" className="img-fluid" />
                                <img src={finest.recipesBakersImage4} alt="" className="img-fluid" />
                            </div>
                            </div>
                        
                    ))}
                </div>
            </div>
        </div> 
    );
}
 
export default Bakers;