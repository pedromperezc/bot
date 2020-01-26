import React from 'react';
import logo from './logo.jpg';

const Message = (props) => {
    
    if (props.speaks==='bot'){
        return (
            <div className="col s12">
                        <div className="card panel red lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s2">
                                    <img src={logo} alt="" className="circle responsive-img"></img>
                                </div>
                                <div className="col s12">
                                <span className="black-text">
                                    <h5>{props.text}</h5>
                                </span>
                                </div>
                                </div>
                        </div>
                    </div>
        );
    } else {
        return (

            <div className="col s12">
                <div className="card panel grey lighten-5 z-depth-1">
                    <div className="card-content">
                          <span className="black-text">
                              
                            <h5>{props.text}</h5>
                          </span>

                    </div>
                </div>
            </div>
    
        );
    };
    
    }

    
    
export default Message;