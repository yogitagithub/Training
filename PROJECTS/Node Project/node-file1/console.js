const express = require('express');
const app = express()
const cors = require('cors');
const port = 3002;
app.use(cors())

app.get('/', (req, res) => {
    res.send('API Called')
})

app.get('/diary', async(req, res) => {

    // console.log(req.query);
    // res.send(req.query);

    var name = req.query.name;
    var year = req.query.year;
    const currentDate = new Date()
    const newYear = currentDate.getFullYear()
    
    const age = (newYear - year);
    console.log("year :", newYear)
    console.log("age :", age)

    res.send(`
    <p>Hello ${name}</p>
    <p>You are currently ${age} years old</p>`);
})

async function run() {



}

app.listen(port, async() => {
    
    run().catch(console.dir);
    console.log(`APP is running on ${port}`)

})
