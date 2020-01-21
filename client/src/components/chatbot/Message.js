import React from 'react';
import logo from './logo.jpg';

const Message = (props) => {
    return (       
        
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            
                    <div className="row valign-wrapper">
                        
                            {props.speaks==='bot' &&
                            <div className="col s3">
                                <img src={logo} alt="" className="circle responsive-img">
                                </img>
                            </div>
                            }
                            {props.speaks==='bot' &&
                            <div className="col s10">
                                <p class="flow-text">
                                     {props.text}
                                </p>
                             
                            </div>
                            }
                            {props.speaks==='user' &&
                            <div className="col s4">
                            <p class="flow-text">
                                     {props.text}
                            </p>
                        </div>
                            }
                    </div>
                
        </div>   
      
       

        

    );
};

export default Message;
