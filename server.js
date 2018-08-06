const express = require('express');
const mongoose = require('mongoose');
const kural = express();

kural.use(express.static('src'));
kural.use(express.static('vendor'));

const bodyParser = require('body-parser');
kural.use(bodyParser.json());
kural.use(bodyParser.urlencoded({extended: false}));

//Connecting to MongoDB
const { mongoURI } = require('./config/keys');
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then( () => console.log("MongoDB connected"))
    .catch( err => console.log(err));
const db = mongoose.connection;

//View engine
kural.engine('hbs', require('exphbs'))
kural.set('view engine', 'hbs');
kural.set('views', __dirname + '/views');


//Defining the Routes
const loginRoute = require('./routes/login');
kural.use('/login', loginRoute);
const registerRoute = require('./routes/register');
kural.use('/register', registerRoute);

//Listen to port
const port = process.env.PORT || 5500;
kural.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
