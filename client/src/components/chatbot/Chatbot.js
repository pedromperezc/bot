import React, { Component } from 'react';
import axios from "axios/index";
import Message from './Message';
import Cookies from 'universal-cookie';
import {v4 as uuid} from 'uuid';
const cookies = new Cookies();

class Chatbot extends Component {
    constructor(props) {
        
        super(props);
        
        // This binding is necessary to make `this` work in the callback
        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this.state = {
            messages: []
        };

        if (cookies.get ('userID') === undefined){
            cookies.set('userID', uuid(), {path : '/'});
         
        }
        
    }

    async df_text_query (queryText) {
        let says = {
            speaks: 'user',
            msg: {
                text : {
                    text: queryText
                }
            }
        }
        this.setState({ messages: [...this.state.messages, says]});
        const res = await axios.post('/api/df_text_query',  {text: queryText, userID:cookies.get ('userID')});
        for (let msg of res.data.fulfillmentMessages) {
            console.log(JSON.stringify(msg));
            says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    };
    async df_event_query(eventName) {
        const res = await axios.post('/api/df_event_query',  {event: eventName, userID:cookies.get ('userID')});
        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    };
    

    componentDid() {
        this.df_event_query('Welcome');
    }

    componentDidUpdate() {
        this.chatbot.scrollIntoView({ behavior: "smooth" });
        
    }




    componentDidMount() {
        this.df_event_query('Welcome');
        this.imputTxt.focus();
    }
    renderMessages(returnedMessages) {
        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                
                if (message.msg && message.msg.text && message.msg.text.text){
                    return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
                } else {
                        return null;
                }
                    
                }
            );
        }
           
            
    
    }
    

    _handleInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }
    }
    handlescrollRef = (el) => {
        this.chatbot = el;
    }


    handlefocusRef = (el) => {
        this.imputTxt = el;
    }


    render() {
        return (
            <div className="col s12">
                <div className="card large">
                        <div id="chatbot" style={{height: '100%', width: '100%', overflow: 'auto'}}>
                            <h2>               </h2>
                            {this.renderMessages(this.state.messages)}
                            <div ref={this.handlescrollRef}>
                            </div>
                                                      
                        </div>
                </div>
                <div id="imputTxt" className="input-field col s12">
                    <input placeholder="Ingrese un consulta aquí" id="first_name" type="text" className="validate" onKeyPress={this._handleInputKeyPress} ></input>
                    <div ref={this.handlefocusRef}>
                    
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
export default Chatbot;