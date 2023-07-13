import { useState } from "react";

const OurMission = () =>  {
    //*** second *** //
    const [missionVision] = useState([
        {
            missionVisionImage: require('../img/Rectangle19.png'),
            missionVisionTitle:'Our Mission',
            missionVisionSecTitle:`To sharpen our edge in the manufacture and marketing of quality baked products.`,
            id:1

        },
        {
            missionVisionImage: require('../img/Rectangle20.png'),
            missionVisionTitle:'Our Vision',
            missionVisionSecTitle:`To provide a nourishing, convenient and accessible answer to hunger's call.`,
            id:2

        },
    ])

    //*** the *** //

   const [ourCore] = useState ([
    {

        ourCoreImage: require('../img/Rectangle 22 copy.png'),
        ourCoreTitle:`Teamwork`,
        ourCoreTitleSec :`We set inspiring goals that we pursue with 
                         passion, unity and focus. We support each other, 
                         build on our strengths and ensure that every 
                         player in our team contributes fully. We play to 
                         win and realise that synergy, communication and 
                         alignment bind us together.`,
        id:1                 
    },
    {
        
        ourCoreImage: require('../img/Rectangle 24 copy.png'),
        ourCoreTitle:`Respect`,
        ourCoreTitleSec:`We build self-esteem by treating each other 
                        fairly, communicating directly and respectfully. 
                        We have empathy, discipline and build on our 
                        diversity as a source of strength, creativity and 
                        innovation.`,
        id:2                 
    },
    {
        
        ourCoreImage: require('../img/Rectangle 26 copy.png'),
        ourCoreTitle:`Integrity`,
        ourCoreTitleSec:`We uphold the highest professional and ethical 
                         standards. We guard the reputation of our 
                         brands. Our promises are bankable.`,
        id:3                 
    },
    {
        
        ourCoreImage: require('../img/Rectangle 349.png'),
        ourCoreTitle:`Commitment`,
        ourCoreTitleSec:`We are accountable to our stakeholders and 
                         commit to deliver what we promise. We 
                         translate plans into actions; strategies into 
                         achievements and tangible returns.`,
        id:4                 
    },
    {
        
        ourCoreImage: require('../img/Rectangle 350.png'),
        ourCoreTitle:`Excellence`,
        ourCoreTitleSec:`We strive to be the best in our business. We 
                         improve all the time, in all aspects and 
                         passionately deliver at the highest level. We 
                         offer superior value and present our offering 
                         with pride.`,
        id:5                 
    },
   ])

   const[promiseOf] = useState ([
    {
        promiseOfImage: require('../img/Rectangle 31 copy.png'),
        id:1
    },
    {
        promiseOfTitle: `PROMISE OF QUALITY`,
        promiseOfTitleSec: `Thank you for visiting our website. At Baker’s Inn, we are committed to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is to uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Baker’s Inn, we aim to improve the accessibility of our bread. We are accountable to our stakeholders to deliver what we promise.`,
         
        promiseOfTitlethir: `We translate plans into actions; dreams into reality; strategies into achievements and tangible returns. We strive to be the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand.`,
        
        promiseOffou:`We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.`,
        promiseOfSig: `C.E.O: Ngoni Mazango`,
        id:2
    },
   ])

    return ( 
        <div className="">

            <div className="container ourMission">
                <div className="row innerMission">
                    {missionVision.map((vision)=>(
                        <div className="co-12 col-md-12 col-lg-6 missionItems"  key={vision.id}>
                            <div className=" d-flex align-items">
                                <img src={vision.missionVisionImage} alt="" className="img-fluid"/>
                                <div >
                                    <h2>{vision.missionVisionTitle}</h2>
                                    <p>{vision.missionVisionSecTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" ourCore">
            <h2>Our Core Values</h2>
                <div className="row justify-content-center innerCore">
                    {ourCore.map((value) =>(
                            
                       <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 coreitems" key={value.id}>
                            <img src={value.ourCoreImage} alt="" className="img-fluid" />
                            <div>
                                <h3>{value.ourCoreTitle}</h3>
                                <p>{value.ourCoreTitleSec}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className="">
                <div className="container  promiseOf">
                    <div className="row  inner-promiseOf">
                       {promiseOf.map((quality) =>(
                        <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6" key={quality.id}>
                            <img src={quality.promiseOfImage} alt="" className="img-fluid" />
                            <h2>{quality.promiseOfTitle}</h2>
                            <p>{quality.promiseOfTitleSec}</p>
                            <p>{quality.promiseOfTitlethir}</p>
                            <p>{quality.promiseOffou}</p>
                            <p>{quality.promiseOfSig}</p>
                        </div>
                       ))}
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default OurMission;