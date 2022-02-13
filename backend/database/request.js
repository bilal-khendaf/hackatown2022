const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./database/database.sqlite"
    },

    useNullAsDefault: false
})

function  ajouterCompte(user){
    return knex.insert(user)
        .into('Users')
}

async function getUserInfo(loginInfo) {
    let infoUser = await knex('Users')
        .first()
        .where('username', '=', loginInfo.username)
        .orWhere('email', '=', loginInfo.username)
    if ((infoUser !== undefined) && (infoUser.password === loginInfo.password))
        return infoUser
    else
        return null

}
module.exports = {
    ajouterCompte,getUserInfo
}
