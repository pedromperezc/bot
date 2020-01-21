import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Chatbot from './chatbot/Chatbot';

const App = () => (
    <div>
       <BrowserRouter>
       <div className="col s12 m8">
            <div className="container">
            
            <nav>
                <div className="nav-wrapper">
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

/* elimine el header
<Header />
               <Route exact path="/" component={Landing} />
               <Route exact path="/about" component={About} />
               <Route exact path="/shop" component={Shop} />

*/