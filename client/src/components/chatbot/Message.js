import React from 'react';
import logo from './logo.jpg';

const Message = (props) => {
    return (       
        <div className="card medium z-depth-2">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            
                    <div className="row valign-wrapper">
                        
                            {props.speaks==='bot' &&
                            <div className="col s3">
                                <img src={logo} alt="" className="circle responsive-img">
                                </img>
                            </div>
                            }
                            <div className="col s10">
                                <span className="black-text">
                                    {props.text}
                                </span>
                            </div>

                            {props.speaks==='user' &&
                            <div className="col s2">
                                <a href="/" className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>
                             </div>
                            }
                    </div>
                
        </div>   
        </div>
       

        

    );
};

export default Message;


