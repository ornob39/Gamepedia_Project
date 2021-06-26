const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./routes/api");
const PORT = 3000;
const path = require("path");
var morgan = require("morgan");
const app = express();
const http = require("http").createServer(app);
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE,PUT, OPTIONS"
    );
    next();
});

app.use("/api", api);
const HTML_DIR = path.join(__dirname, "/public/");
app.use(express.static(HTML_DIR));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
app.listen(3000, () => {
    console.log("App listening on port 3000!");
});
