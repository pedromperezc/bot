import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Chatbot from './chatbot/Chatbot';

const App = () => (
    <div>
       <BrowserRouter>
       <div className="col s12">
            <div className="container">

            <nav>
                <div className="nav-wrapper">
                    <h2>               </h2>
                    <a href="#" className="brand-logo left">Chat</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                  
                    </ul>
                </div>
            </nav>
               <Chatbot />
            </div>   
           </div>
       </BrowserRouter>
    </div>
)

export default App;

