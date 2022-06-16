const express = require('express');
const app = express()
const cors = require('cors');
const port = 3001;
app.use(cors())

app.get('/', (req, res) => {
    res.send('API Called')
})

app.get('/metrics', async(req, res) => {

    var metric = req.query.metric;
    var object = req.query.object;
    var radius = req.query.radius;

    const value = (3.14 * radius * radius);
    console.log("area :", value)
    res.send(`${metric} of ${object} is ${value}`);
})

async function run() {



}

app.listen(port, async() => {
    
    run().catch(console.dir);
    console.log(`APP is running on ${port}`)

})
