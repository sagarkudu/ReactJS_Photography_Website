import React from 'react';

import CameraAltIcon from '@material-ui/icons/CameraAlt';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TheatersIcon from '@material-ui/icons/Theaters';
import VideocamIcon from '@material-ui/icons/Videocam';

import "./index.css";


const Services = () => {
    return (
        <>
            <div className="my-5 col-10 mx-auto">
                <h1 className="text-center"> Our Services</h1>
                
                <br />             

                <div id="services" className="container-fluid text-center">
        
                    <br/>
                    
                    <div className="row slideanim">
                            <div className="col-sm-4">
                                <CameraAltIcon className="material-icons md-48 icon" /> <br/> 
                                <center><strong>TRADITIONAL<br/> PHOTOGRAPHY</strong> </center>
                            </div>
                    
                            <div className="col-sm-4">
                                <WatchLaterIcon className="material-icons md-48 icon" /> <br />
                                <center><strong>CANDID <br />  PHOTOGRAPHY</strong></center>
                            </div>

                            <div className="col-sm-4">
                                <MenuBookIcon className="material-icons md-48 icon"/> <br/>
                                <center><strong>PHOTOGRAPHY <br/> ALBUMS</strong></center>
                            </div>
                        
                            

                    </div>
                    <br/>
                    <div className="row">
                            <div className="col-sm-4">
                            <span> <center><TheatersIcon className="material-icons md-48 icon" /> <br />
                                <strong>CINEMATIC <br /> VIDEOGRAPHY</strong></center> </span>
                            </div>
                    
                            <div className="col-sm-4">
                            <span> <center><VideocamIcon className="material-icons md-48 icon" /> <br />
                            <strong>TRADITIONAL <br /> VIDEOGRAPHY</strong></center> </span>
                            </div>

                            <div className="col-sm-4">
                                <span className="glyphicon glyphicon-lock logo-small"></span>
                                <MenuBookIcon className="material-icons md-48 icon"/> <br/>
                                <center><strong>PHOTOGRAPHY <br/> ALBUMS</strong></center>
                            </div>
                        
                            <br/><br/>

                    </div>
                </div>

                
                

                
               
                <br />  
                          
                <center><button type="button" className="service-btn"><a className="no-text-decoration" href="https://wa.me/919421392873?text=Hello%20Bhavesh!%20Please%20send%20the%20best%20Quotation">BOOK NOW</a></button></center>
                {/* <section id="header" className="d-flex align-items-center">
                <a className="btn-get-started" href="https://wa.me/919421392873?text=Hello%20Bhavesh!%20Please%20send%20the%20best%20Quotation" >BOOK NOW</a>
                </section> */}
            </div>


            {/* <div class="services-menu-css align-items-center">
                <table >
                <tr>
               <span> <td> <center><CameraAltIcon className="material-icons md-48 icon" /> <br/><br/><strong>TRADITIONAL<br/> PHOTOGRAPHY</strong> </center> </td> </span>
               <span> <td> <center><WatchLaterIcon className="material-icons md-48 icon"/> <br/><br/><strong>CANDID <br/>  PHOTOGRAPHY</strong></center> </td> </span>
               <span> <td> <center><MenuBookIcon className="material-icons md-48 icon"/> <br/><br/><strong>PHOTOGRAPHY <br/> ALBUMS</strong></center> </td> </span>
               <span> <td> <center><TheatersIcon className="material-icons md-48 icon"/> <br/><br/><strong>CINEMATIC <br/> VIDEOGRAPHY</strong></center> </td> </span>
               <span> <td> <center><VideocamIcon className="material-icons md-48 icon"/> <br/><br/><strong>TRADITIONAL <br/> VIDEOGRAPHY</strong></center> </td> </span>
                </tr>
                </table>
                </div>

                <center><div class="services-menu-css">
                    <span> <center><CameraAltIcon className="material-icons md-48 icon" /> <br/><br/><strong>TRADITIONAL<br/> PHOTOGRAPHY</strong> </center> </span>
                    <span> <center><WatchLaterIcon className="material-icons md-48 icon"/> <br/><br/><strong>CANDID <br/>  PHOTOGRAPHY</strong></center> </span>
                    <span> <center><MenuBookIcon className="material-icons md-48 icon"/> <br/><br/><strong>PHOTOGRAPHY <br/> ALBUMS</strong></center> </span>
                    <span> <center><TheatersIcon className="material-icons md-48 icon"/> <br/><br/><strong>CINEMATIC <br/> VIDEOGRAPHY</strong></center> </span>
                    <span> <center><VideocamIcon className="material-icons md-48 icon"/> <br/><br/><strong>TRADITIONAL <br/> VIDEOGRAPHY</strong></center> </span>
                </div>
                </center>


	<center><div class="services-menu-css">
                    <span> <center><CameraAltIcon className="material-icons md-48 icon" /> <br/><br/><strong>TRADITIONAL<br/> PHOTOGRAPHY</strong> </center> </span>
                    <span> <center><WatchLaterIcon className="material-icons md-48 icon"/> <br/><br/><strong>CANDID <br/>  PHOTOGRAPHY</strong></center> </span>
                    <span> <center><MenuBookIcon className="material-icons md-48 icon"/> <br/><br/><strong>PHOTOGRAPHY <br/> ALBUMS</strong></center> </span>
                    <span> <center><TheatersIcon className="material-icons md-48 icon"/> <br/><br/><strong>CINEMATIC <br/> VIDEOGRAPHY</strong></center> </span>
                    <span> <center><VideocamIcon className="material-icons md-48 icon"/> <br/><br/><strong>TRADITIONAL <br/> VIDEOGRAPHY</strong></center> </span>
                </div>
                </center> */}

        </>
    );
}

export default Services;




// import React from 'react';
// import Card from './Card';
// import Sdata from "./Sdata";

// const Services = () => {
//     return (
//         <>
//             <div className="my-5">
//                 <h1 className="text-center"> Our Services</h1>
//                 <h5 className="text-center"> FIND YOUR PHOTOGRAPHER</h5>
           
                
//             </div>

//             <div className="container-fluid mb-5">
//                 <div className="row">
//                     <div className="col-10 mx-auto ">
//                         <div className="row gy-4"> 
//                             {Sdata.map((val, ind) => {
//                                 return <Card key= {ind}
//                                 imgsrc = { val.imgsrc }
//                                 title ={val.title} />
//                         }) }   
                           
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Services;