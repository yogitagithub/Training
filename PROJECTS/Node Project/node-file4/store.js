const express = require('express');
const app = express()
const port = 3000;

const fs = require("fs");
const values = require("./values");

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const diode = {
    "result": "Success"
}

app.get('/', (req, res) => {
    res.send('API Called')
})

app.post('/student/add', async(req, res) => {
    const days = req.body;
    values.push(days);
    console.log(days);
    res.send(diode);

    fs.writeFile("values.json", JSON.stringify(values), err => {
        if (err) throw err;
    });
})

app.get('/student/getDetails', async(req, res) => {
   res.header("Content-Type", 'application/json');
   res.sendFile(path.join(__dirname, 'values.json'));
})

async function run() {



}

app.listen(port, async() => {
    
    run().catch(console.dir);
    console.log(`APP is running on ${port}`)

})
