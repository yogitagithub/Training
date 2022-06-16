const express = require('express');
const app = express()
const port = 3000;

const painting = {
      "results": [
          "Rajesh",
          "Ramesh",
          "Sayali",
          "Sanjana"
      ]
    }

app.get('/', (req, res) => {
    res.send('API Called')
})

app.get('/student/studentsLife', async(req, res) => {

   console.log(painting);
   res.send(painting);
   
})

async function run() {



}

app.listen(port, async() => {
    
    run().catch(console.dir);
    console.log(`APP is running on ${port}`)

})
