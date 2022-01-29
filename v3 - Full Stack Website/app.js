// npm i express morgan lokijs ejs --save

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')


// Configure Database, Clears database each time server restarts
const loki = require('lokijs');
var db = new loki('example.db');
var jokes = db.addCollection('jokes');


// Configure Express Application
var app = express() 

// Where to store frontend assets
app.use(express.static('public'));

// Logging (Optional)
app.use(morgan('dev'));

// Allow for req.body to be utilized in '/upvote-joke'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');


app.post('/upvote-joke', (req, res) => {
    // console.log(req.body)

    // Taken from upvote_joke() function in jokes HTML
    var id = req.body.id
    var joke = req.body.joke

    // See if joke exists in database ()
    var current_joke = jokes.findOne({ id });

    if(!current_joke) {
        // Joke not found. Add to database and give 1 upvote
        jokes.insert({joke, id, 'upvotes': 1});
    } else {
        // Joke found. Add 1 upvote
        current_joke.upvotes += 1

        // Save Joke 
        jokes.update(current_joke)
    }

    // Send 'ok' status back
    res.sendStatus(200)
})

app.get('/', (req, res) => {
    res.render('leaderboard', {
        data: jokes.chain().find({}).simplesort('upvotes').data().reverse()
    })
})

app.listen(3000, () => {
    console.log("Server is running")
})