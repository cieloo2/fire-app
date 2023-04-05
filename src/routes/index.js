const { Router } = require('express');
const router = Router();
require('dotenv').config()
var admin = require('firebase-admin')

var serviceAcc = require(process.env.FIREBASE_PATH)
console.log(process.env.FIREBASE_PATH)
admin.initializeApp({
    credential: admin.credential.cert(serviceAcc),
    databaseURL: "https://fire-app-5c753-default-rtdb.firebaseio.com"
})

const db = admin.database();

router.get('/', (req, res) =>{
    db.ref('contactos').once('value', (snapshot) =>{
        const data = Object.keys(snapshot.val())
        const jsonResponse = JSON.stringify(snapshot.val())
        var mascots = [
            { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
            { name: 'Tux', organization: "Linux", birth_year: 1996},
            { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
          ];
          console.dir(snapshot.val())
        res.render('index', {
            data1: data, 
            respuesta: jsonResponse,
            mascots: mascots
        }) })
    })



module.exports = router;