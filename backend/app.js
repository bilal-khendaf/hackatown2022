const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/request.js");

const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log(`Mon application roule sur http://localhost:${PORT}`);
});
