import React from 'react';
import { NavLink } from 'react-router-dom';

const Comman = (props) => {
  
    return(
        <>  
            <section id="header" className="d-flex align-items-center">
            <div className ="container-fluid">
            <div className="row">
                <div className = "col-10 mx-auto">
                            {/**put you code here to properly set menu */}
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            
                        <h1>{props.name}
                        <strong className="brand-name"><br/> BHAVESH THAKUR PHOTOGRAPHY</strong>
                        </h1>
                                
                        <p className="my-3">
                            Book Now & Get Discount <span role="img" aria-label="discount">💰</span> with Best photographer in palghar...          
                        </p>
                                
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started mb-auto ">{props.btname}</NavLink>
                        </div>        
                    </div>                  
                        
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="..."  />                       
                            
                            </div>
                            </div>
                    </div>
            </div>
            </div>


            </section>
        </>
    );
}

export default Comman;