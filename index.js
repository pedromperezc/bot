const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/', (req, res) => {
   res.send({'hi': 'there'})
});

app.use(bodyParser.json());
require('./routes/dialogFlowRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); 
