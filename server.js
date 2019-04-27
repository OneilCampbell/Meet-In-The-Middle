const express = require("express");
const app = express();
const PORT = process.env.PORT || 4567;

const path = require("path");
app.use(express.static(__dirname + "/"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());


















if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join('build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));