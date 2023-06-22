import { useState } from "react";


function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

const [cardBread] = useState ([
    {
        cardImage:require('../img/Rectangle 341.png'),
        cardTitle: `Premium Soft White Loaf`,
        cardTitleSec: `Our Premium Soft White loaves are 
                       delightfully soft, fresh and delicious. They are 
                       loaded with energy and fortified with vitamins 
                       and minerals for the classic everyday bread. 
                       The Standard Loaf has 18 slices.`,
        id:1
    },

    {
        cardImage:require('../img/Rectangle 354.png'),
        cardTitle: `Family Loaf High Energy Brown`,
        cardTitleSec: `Our Family Loaf High Energy Brown loaves 
                       are a great source of fibre, high in energy and 
                       fortified with vitamins and minerals! They are 
                       perfect for sandwiches, toast, breadcrumbs – 
                       anything! The Family Loaf has 21 slices.`,
        id:2
    },

    {
        cardImage:require('../img/Rectangle 357.png'),
        cardTitle: `Premium Soft White Loaf`,
        cardTitleSec: `Our Family Loaf Soft White loaves are 
                       delightfully soft, fresh and delicious. They are 
                       loaded with energy and fortified with vitamins and 
                       minerals for the classic everyday bread. 
                       The Family Loaf has 21 slices.`,
        id:3
    },
    
])

const [cardMeatPies] = useState ([
    {
        cardImage:require('../img/Rectangle 359.png'),
        cardTitle: `Premium Soft White Loaf`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit, sed do eiusmod tempor incididunt
                       ut labore et dolore magna aliqua. Ut enim ad 
                       minim veniam, quis nostrud exercitation ullamco 
                       laboris nisi ut aliquip ex ea commodo consequat.`,
        id:1
    },
    {
        cardImage:require('../img/Rectangle 359.png'),
        cardTitle: `Family Loaf High Energy Brown`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat`,
        id:2
    },
    {
        cardImage:require('../img/Rectangle 359.png'),
        cardTitle: `Premium Soft White Loaf`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat`,
        id:3
    },
    
])
 const  [cardScones] = useState ([

    {
        cardImage:require('../img/Rectangle 363.png'),
        cardTitle: `Sugar Free Scone`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat`,
        id:1
    },

    {
        cardImage:require('../img/Rectangle 363.png'),
        cardTitle: `Sugar Free Scone`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat`,
        id:2
    },

    {
        cardImage:require('../img/Rectangle 363.png'),
        cardTitle: `Sugar Free Scone`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat`,
        id:3
    },

 ])

 const [cardDonuts] = useState ([


    {
        cardImage:require('../img/Rectangle 359-2.png'),
        cardTitle: `Chocolate Donut`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat`,
        id:1
    },

    {
        cardImage:require('../img/Rectangle 359-2.png'),
        cardTitle: `Chocolate Donut`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat`,
        id:2
    },

    {
        cardImage:require('../img/Rectangle 359-2.png'),
        cardTitle: `Chocolate Donut`,
        cardTitleSec: `Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat`,
        id:3
    },
 ])



    return (
        <div className="Tabs">
            <div className="container ">
                <h2>Our Products</h2>
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Bread
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Meat Pies
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Scones
                    </button>
                    <button
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}
                    >
                        Donuts
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <div className="container">
                            <div className="row">
                                {cardBread.map((cards) => (
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-4">
                                        <div className="card1" key={cards.id}>
                                            <img src={require('../img/Rectangle 341.png')} alt="" className="img-fluid" />
                                            
                                            <h5>{cards.cardTitle}</h5>
                                            <p>{cards.cardTitleSec}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <div className="container">
                            <div className="row">
                                {cardMeatPies.map((cards) => (
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-4">
                                        <div className="card2" key={cards.id}>
                                            <img src={require('../img/Rectangle 359.png')} alt="" className="img-fluid" />
                                            <h5>{cards.cardTitle}</h5>
                                            <p>{cards.cardTitleSec}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <div className="container">
                            <div className="row">
                                {cardScones.map((cards) => (
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-4">
                                        <div className="card3" key={cards.id}>
                                            <img src={require('../img/Rectangle 363.png')} alt="" className="img-fluid" />
                                            <h5>{cards.cardTitle}</h5>
                                            <p>{cards.cardTitleSec}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <div className="container">
                            <div className="row">
                                {cardDonuts.map((cards) => (
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-6 col-xl-6 col-xxl-4">
                                        <div className="card4" key={cards.id}>
                                            <img src={require('../img/Rectangle 359-2.png')} alt="" className="img-fluid" />
                                            <h5>{cards.cardTitle}</h5>
                                            <p>{cards.cardTitleSec}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Tabs;
