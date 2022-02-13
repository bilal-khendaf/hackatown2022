const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/request.js");

const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.urlencoded({extended: false}))


app.post("/ajouterCompte", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let user = {
        "lastName": req.body.lastName,
        "firstName": req.body.firstName,
        "username": req.body.username,
        "email": req.body.email,
        "password": req.body.password,
    }
    try {
        await db.ajouterCompte(user)
        return res.status(200).json({
            "success": true
        })
    } catch (err) {
        return res.status(500).json({
            "success": false,
            "error": err
        })
    }
})

app.post("/connexion", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        let loginInfo = {
            "username": req.body.username,
            "password": req.body.password
        }
        console.log('ici')
        let data = await db.getUserInfo(loginInfo);

        if (data !== null) {
            delete data.password
            return res.status(200).json({
                "success": true,
                "data": data
            })
        } else {
            return res.status(500).json({
                "success": false,
                "error": 'Utilisateur ou mot de passe incorrecte'
            })
        }

    } catch (err) {
        return res.status(500).json({
            "success": false,
            "error": err.message
        })
    }
});

app.listen(PORT, () => {
    console.log(`Mon application roule sur http://localhost:${PORT}`);
})
