const express = require("express");
const app = express();
const PORT = process.env.PORT || 4567;

const path = require("path");
app.use(express.static(__dirname + "/"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const { User, Venue, Session } = require("./models/models");


app.get("/users", async (req, res) => {
    try {
        const allUsers = await User.findAll();
        res.json({allUsers})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/users/id/:id", async (req, res) => {
    try {
        const thisUser = await User.findByPk(req.params.id);
        res.json({thisUser})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/venues", async (req, res) => {
    try {
        const allVenues = await Venue.findAll();
        res.json({allVenues})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/venues/name/:name", async (req, res) => {
    try {
        const venueByName = await Venue.findAll({where:{name: req.params.name} });
        res.json({venueByName})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/venues/city/:city", async (req, res) => {
    try {
        const venueByCity = await Venue.findAll({where:{city: req.params.city} });
        res.json({venueByCity})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/venues/zip/:zip", async (req, res) => {
    try {
        const venueByZip = await Venue.findAll({where:{zip_code: req.params.zip} });
        res.json({venueByZip})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/venues/state/:state", async (req, res) => {
    try {
        const venueByState = await Venue.findAll({where:{state: req.params.state} });
        res.json({venueByState})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/sessions", async (req, res) => {
    try {
        const allSessions = await Session.findAll();
        res.json({allSessions})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/sessions/id/:id", async (req, res) => {
    try {
        const thisSession = await Session.findByPk(req.params.id);
        res.json({thisSession})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/sessions/name/:name", async (req, res) => {
    try {
        const thisSession = await Session.findAll({where:{name: req.params.name}});
        res.json({thisSession})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})

app.get("/sessions/organizerId/:organizerId", async (req, res) => {
    try {
        const sessionByOrganizer = await Session.findAll({where:{organizer_id: req.params.organizer_id}});
        res.json({sessionByOrganizer})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join('build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));