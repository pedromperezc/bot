import React, { Component } from 'react';
import axios from "axios/index";
import Message from './Message';
import {InputText} from 'primereact/inputtext';

class Chatbot extends Component {

    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this.state = {
            messages: []
        };
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
        const res = await axios.post('/api/df_text_query',  {text: queryText});
        for (let msg of res.data.fulfillmentMessages) {
            says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
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
    componentDidMount() {
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
    }

    _handleInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="col s12 m8">
                <div class="card large">
                        <div id="chatbot" style={{height: '100%', width: '100%', overflow: 'auto'}}>
                            <h2>               </h2>
                            {this.renderMessages(this.state.messages)}
                        </div>
                </div>
                <span className="p-float-label">
                    <InputText id="float-input" type="text" size="30" onKeyPress={this._handleInputKeyPress} />
                    <label htmlFor="float-input">Ingrese su texto aquí</label>
                </span>

            </div>
        );
    }
}
export default Chatbot;