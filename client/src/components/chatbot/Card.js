import React from 'react';


const Cards = (props) => {
    return (
        
        <div class="row">
            <div class="col s12 m7">
            <div className="row valign-wrapper"> 
               
                <div className="card large">
                    <div class="card-image" style={{width:240}}>
                        <img alt={props.payload.fields.header.stringValue} src={props.payload.fields.Image.stringValue}></img>
                        
                    </div>
                    <div className="card-content">
                        <span class="flow-text">{props.payload.fields.description.stringValue}</span>
                        
                        <h5>{props.payload.fields.price.stringValue}</h5>
                    </div>
                    <div className="card-action">
                    <a target="_blank" rel = "noopener noreferrer" href={props.payload.fields.link.stringValue}>Accede ahora</a>
                    </div>
                </div>
            </div>
            </div>    
        </div>
        
        
    );
    
}

export default Cards;