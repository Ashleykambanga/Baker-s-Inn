import { useState } from "react";


const Location = () =>{
     
  const  [contactLocation] = useState ([
        {
            contactLocationImage: require('../img/Rectangle 347.png'),
            contactLocationTitle: `Harare Bread Factory`,
            contactLocationSec: `1 shepperton Road, Graniteside, Harare`,
            contactLocationThir: `+263 242 710334, +263 242 751481,+263 242 751 1572 ,+263 242 758657`,
            contactLocationFou: `VOIP: 08677006178`,
            contactLocationFiff: `Econet Toll Free: 08080151, 08080152`,
            id:1
        },
        {
            contactLocationImage: require('../img/Rectangle 671.png'),
            contactLocationTitle: `Bulawayo Bread Factory`,
            contactLocationSec: `22 A Bellevue Road, Belmont, Bulawayo`,
            contactLocationThir:`+263 9 78279, +263 9 68826, +263 9 68381, +263 9 68383, +263 9 69592, +263 9 76693`,
            contactLocationFou: ` VOIP: 08677006179`,
            contactLocationFiff: `Econet Toll Free: 08080151, 08080152`,
            id:2
        },
    ])

    return(
        <div className="">
            <div className="container Contact">
                <div className="row inner-Contact">
                    {contactLocation.map((Us) =>(
                        <div className="col-md-6 ContactItems"key={Us.id}>
                            <img src={Us.contactLocationImage} alt="" className="img-fluid"/>
                            <h4>{Us.contactLocationTitle}</h4>
                            <p>{Us.contactLocationSec}</p>
                               <div className="para" >
                                  <p>{Us.contactLocationThir}</p> 
                                </div>
                            <p>{Us.contactLocationFou}</p>
                            <h6>{Us.contactLocationFiff}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Location;