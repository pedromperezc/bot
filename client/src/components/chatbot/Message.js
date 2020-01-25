import React from 'react';
import logo from './logo.jpg';

const Message = (props) => {
    return (

        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    {props.speaks==='bot' &&
                    <div className="col s2">
                        <img src={logo} alt="" className="circle responsive-img"></img>
                    </div>
                    }
                    <div className="col s10">
                      <span className="black-text">
                        <h5>{props.text}</h5>
                      </span>
                    </div>
                    {props.speaks==='user' &&
                    <div className="col s2">
                        <img src={logo} alt="" className="circle responsive-img"></img>
                    </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Message;