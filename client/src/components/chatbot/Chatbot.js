import React, { Component } from 'react';
import axios from "axios/index";
import Message from './Message';
import 'materialize-css/dist/css/materialize.min.css';


 


class Chatbot extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            messages: []
        };
    }

    async df_text_query (text){
        let says ={
            speaks: 'me',
            msg: {
                text:text
            }
        }
        
        this.setState ({messages: [...this.state.messages,says] });
        const res = await axios.post('/api/df_text_query',{text});

        for (let msg of res.data.fulfillmentMessages){
            says={
                speaks: 'bot',
                msg: msg
            }
            this.setState ({messages: [...this.state.messages,says] });
        }


    };

    async df_event_query(eventName) {
        const res = await axios.post('/api/df_event_query',  {event: eventName});
        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    };
 
    
    componentDidMount (){
        this.df_event_query('Welcome');
    }

    renderMessages(returnedMessages) {
        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                    return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
                }
            )
        } else {
            return null;
        }
    };

    

    render() {
        return (
            <div className="card large z-depth-1">
                    
                        <div className="col s12 m8">
                            <nav>
                                <div class="nav-wrapper">
                                <a href="#" class="brand-logo left">Chat</a>
                                <ul id="nav-mobile" class="right hide-on-med-and-down">
                                    
                                </ul>
                                </div>
                            </nav>
                            <div className="row">
                            <div class="col s12 m8"><p>         </p></div>
                            <div className="col s12 m8">
                                {this.renderMessages(this.state.messages)}
 
                            </div> 
                            </div> 
                            <footer class="page-footer">
                                <div class="container">
                                    <div class="row">
                                        <div class="col s12 m8">
                                            <input type="text"/> 
                                        </div>
                                    </div>
                                </div>
                            </footer> 
                        </div>
            </div>
          
            
        );
    }
}

export default Chatbot; 

