const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const mongoDB = require('mongodb');

const { MongoClient, ServerApiVersion, MongoRuntimeError } = require('mongodb');

const bodyParser = require('body-parser');

const password = encodeURIComponent('Y0git@mongodb');

const uri = `mongodb+srv://yv161993:${password}@cluster0.xfzig.mongodb.net/Training?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors())

app.use(bodyParser.json())

const port = 3001;



app.get('/', (req, res) => {
    res.send('API Called')
})

app.post('/users', async (req, res) => {
    console.log(req.body)

    const data = req.body;

    if(!data.username) {
        throw new Error('Username is required')
    }
    if(!data.address) {
        throw new Error('Address is required')
    }
    if(!data.city) {
        throw new Error('City is required')
    }
    if(!data.state) {
        throw new Error('State is required')
    }
    if(!data.age) {
        throw new Error('Age is required')
    }

    data.age = parseInt(data.age)

    const collection = client.db("Training").collection("users");
    const result = await collection.insertOne(data);

    res.send(result)
})

app.get('/users', async (req, res) => {

    const collection = client.db("Training").collection("users");
    const result = await collection.find({}).toArray()
    console.log(result)
    res.send(result)
})

async function run() {





}

app.listen(port, async() => {
    run().catch(console.dir);

    console.log(`APP is running on ${port}`)

    client.connect(async err => {
        console.log(err);
        console.log("DB Connected")

    });
})
