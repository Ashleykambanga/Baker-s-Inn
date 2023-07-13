import { useState } from "react";



function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    const [cardRecipes] = useState([
      {
        cardTitle:'Sharma Sandwich', 
        prepTitle: 'Prep Time:', 
        time: ' 20min', 
        servesTitle:'Servers: ', 
        servesSecTitle:'6 people', 
        imageCs:require('../img/Rectangle 12.png') ,
        id:1 
      },
  
      {
        cardTitle:'Sharma Sandwich', 
        prepTitle: 'Prep Time:', 
        time: ' 20min', 
        servesTitle:'Servers: ', 
        servesSecTitle:'6 people',
         imageCs:require('../img/Rectangle 12.png') ,
         id:2 
      },
      {
        cardTitle:'Sharma Sandwich', 
        prepTitle: 'Prep Time:', 
        time: ' 20min', 
        servesTitle:'Servers: ', 
        servesSecTitle:'6 people', 
        imageCs:require('../img/Rectangle 12.png') ,
        id:3 
      },
  
    ])
  
    const [cardVegans] = useState([
      {
        cardTitle:'Sharma Sandwich',
         prepTitle: 'Prep Time:', 
         time: ' 20min', 
         servesTitle:'Servers: ', 
         servesSecTitle:'6 people', 
         imageCs:require('../img/Rectangle 13.png') ,
         id:1 
      },
  
      {
        cardTitle:'Sharma Sandwich',
         prepTitle: 'Prep Time:', 
         time: ' 20min', 
         servesTitle:'Servers: ', 
         servesSecTitle:'6 people', 
         imageCs:require('../img/Rectangle 13.png') ,
         id:2 
      },
  
      {
            cardTitle:'Sharma Sandwich',
            prepTitle: 'Prep Time:',
            time: ' 20min',
            servesTitle:'Servers: ', 
            servesSecTitle:'6 people', 
            imageCs:require('../img/Rectangle 13.png') ,
            id:3 
      },
  
    ])
  
    const [cardFamily] = useState([
      {
        cardTitle:'Sharma Sandwich',
         prepTitle: 'Prep Time:', 
         time: ' 20min', 
         servesTitle:'Servers: ', 
         servesSecTitle:'6 people', 
         imageCs:require('../img/Rectangle 337.png') ,
         id:1 
      },
  
      {
        cardTitle:'Sharma Sandwich', 
        prepTitle: 'Prep Time:', 
        time: ' 20min', 
        servesTitle:'Servers: ',
         servesSecTitle:'6 people', 
         imageCs:require('../img/Rectangle 337.png') ,
         id:2 
      },
  
      {
        cardTitle:'Sharma Sandwich', 
        prepTitle: 'Prep Time:', 
        time: ' 20min', 
        servesTitle:'Servers: ', 
        servesSecTitle:'6 people', 
        imageCs:require('../img/Rectangle 337.png') ,
        id:3
      },
  
    ])
  
    return (
      <div className="container">
       
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            For Kid's
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            For Vegans
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            For Family
          </button>
        </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="container">
            <div className="row">
              {cardRecipes.map((cards) => (
                <div className="col-lg-4">
                  <div className="card " key={cards.id}>
                    <img src={require('../img/Rectangle 12.png')} alt="" srcset="" className="img-fluid" />
                    <h5 className="card-title">
                      {cards.cardTitle}
                    </h5>
                    <p className="card-text">{cards.servesTitle} <span>{cards.time}</span></p>
                    <p className="card-text">{cards.prepTitle} <span>{cards.time}</span></p>
                    {/* <button className="btn rounded-circle">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                        />
                      </svg>

                    </button> */}





                    <button type="button" className="btn  rounded-circle" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                        />
                      </svg>
                    </button>

                    <div className="modal fade bd-example-modal-lg" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">model</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">


                          </div>
                        </div>

                      </div>
                    </div>

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
              {cardVegans.map((cards) => (
                <div className="col-lg-4">
                  <div className="card" key={cards.id}>
                    <img src={require('../img/Rectangle 13.png')} alt="" srcset="" className="img-fluid" />
                    <h5 className="card-title">
                      {cards.cardTitle}
                    </h5>
                    <p className="card-text">{cards.servesTitle} <span>{cards.time}</span></p>
                    <p className="card-text">{cards.prepTitle} <span>{cards.servesTitle}</span></p>
                    {/* <button className="btn rounded-circle">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path
                            fill="none"
                            d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                          />
                        </svg>

                      </button>  */}


                    <button type="button" className="btn  rounded-circle" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                        />
                      </svg>
                    </button>

                    <div className="modal fade bd-example-modal-lg" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">model</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">


                          </div>
                        </div>

                      </div>
                    </div>
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
              {cardFamily.map((cards) => (
                <div className="col-lg-4">
                  <div className="card" key={cards.id}>
                    <img src={require('../img/Rectangle 337.png')} alt="" srcset="" className="img-fluid" />
                    <h5 className="card-title">
                      {cards.cardTitle}
                    </h5>
                    <p className="card-text">{cards.servesTitle} <span>{cards.time}</span></p>
                    <p className="card-text">{cards.prepTitle} <span>{cards.servesTitle}</span></p>
                    {/* <button className="btn rounded-circle">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                        />
                      </svg>

                    </button> */}



                    <button type="button" className="btn  rounded-circle" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                                l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                                c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                                c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                                S1.293,9.212,1.729,9.212z"
                        />
                      </svg>
                    </button>

                    <div className="modal fade bd-example-modal-lg" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">model</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">


                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;

