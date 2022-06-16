const express = require('express');
const app = express()
const port = 3002;

// Used in first method
const fs = require("fs");


app.get('/', (req, res) => {
    res.send('API Called')
})

// By first method

app.get('/vegetables', async(req, res) => {
    fs.readFile("veggies.json", function(err, data) {
        if (err) throw err;
        const pen = JSON.parse(data);
        console.log(pen);
        res.send(pen);
    });
})

// By second method

app.get('/vegetables', async (req, res) => {
    const pencil = require("./veggies");
    console.log(pencil);
    res.send(pencil);
})

async function run() {



}

app.listen(port, async() => {
    
    run().catch(console.dir);
    console.log(`APP is running on ${port}`)

})