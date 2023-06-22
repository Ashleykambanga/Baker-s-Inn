import { useState } from "react";

const Corner = () =>{

const[kidsCorner] = useState ([
    {
        
        kidsCornerImage: require('../img/Group 3.png'),
        id:1
    },
    {
       
        kidsCornerImage: require('../img/Group 15.png'),
        id:2
    },
])

const [spaceShip] = useState ([
    {
        spaceShipTitle: `Spaceship Maze`,
        spaceShipSec: `Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location. `,
        spaceShipThir :`Develop kids’ skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning.`,
        spaceShipfou: `PLAY GAME`,
        id:1
    },
   
     {
        spaceShipImage: require ('../img/Rectangle 382.png'),
        id:2
    },
   
])
const [ riskyWay] = useState ([

    {
        riskyWayTitle: `Risky Way`,
        riskyWaySec: `Risky Way is a free instant game. The highways of the future are risky and if you want to survive you'll need to be smarter than all of them combined. All you have to do in this nerve-tingling racing game is click, hold, and let go. Of course, if you want to be an effective driver who is able to survive you'll have to know when to click, how long to hold, and only let go at the appropriate time.`,
        riskyWayThir: `PLAY GAME`,
        Id:1
    },
    {
        riskyWayImage :require('../img/Group 7.png'),
        id:2
    },
])

 const [pacmanKiss] = useState ([
    {
        pacmanKissTitle: `Pacman`,
        pacmanKissSec: `There's nothing like a little old school Pacman game right? The great arcade game Pac Man was ported to the NES in 1988 and you can play it right here. Never played before?! What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way! But there's more! Ever wonder how Pacman got started? Check out the history of Pacman below and see how it all began.`,
        pacmanKissThir: `PLAY GAME`,
        id:1
    },
    {
        pacmanKissImage: require('../img/kisspng-pac-man-championship-edition-super-smash-bros-for-pac-man-5ac7fd0f47b9191484751415230558872938-u1U_ZbU1J-transformed 1.png'),
        id:2
    },
 ])


return (
    <div className=" Corner">
        <div className="kids-corner">
            <div className="container  row kids-corner">
                { kidsCorner.map((corner) =>(
                    <div className="col-md-6" key={corner.id}>
                        
                            <img src={corner.kidsCornerImage} alt="" className="img-fluid"/>
                            <img src={corner.kidsCornerImage2} alt="" className="img-fluid"/>
                        
                    </div>
                ))}
            </div>
        </div>

        <div className="">
            <div className=" spaceShip">
                <div className="row inner-spaceShip align-items-center">
                    {spaceShip.map((space) =>(
                        <div className="col-md-6 spaces " key={space.id}>
                             <div className="title">
                            <h3>{space.spaceShipTitle}</h3>
                            <p>{space.spaceShipSec}</p>
                            <p>{space.spaceShipThir}</p>
                            </div>
                            <button>{space.spaceShipfou}</button>
                            
                            <img src={space.spaceShipImage} alt="" className="img-fluid" />
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="">
            <div className=" riskyWay" >
                <div className="row inner-riskyWay align-items-center">
                    {riskyWay.map((way) =>(
                      < div className="col-lg-6 way">
                        <h3>{way.riskyWayTitle}</h3>
                        <p>{way.riskyWaySec}</p>
                        <button>{way.riskyWayThir}</button>
                        <img src={way.riskyWayImage} alt="" className="img-fluid" />
                      </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="">
            <div className=" pacmanKiss">
            <div className="row inner-pacmanKiss align-items-center">
                {pacmanKiss.map((kiss) =>(
                    < div className="col-lg-6 kiss">
                        <h3>{kiss.pacmanKissTitle}</h3>
                        <p>{kiss.pacmanKissSec}</p>
                        <button>{kiss.pacmanKissThir}</button>
                        <img src={kiss.pacmanKissImage} alt="" className="img-fluid" />
                    </div>
                ))}
            </div>
            </div>
        </div>

    </div>
);
}
export default Corner;