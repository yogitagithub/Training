const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const mongoDB = require('mongodb');

const { MongoClient, ServerApiVersion, MongoRuntimeError } = require('mongodb');

const password = encodeURIComponent('Y0git@mongodb');

const uri = `mongodb+srv://yv161993:${password}@cluster0.xfzig.mongodb.net/Training?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors())

const port = 3001;


app.get('/', (req, res) => {
    res.send('API Called')
})

app.get('/data', async (req, res) => {

    const collection = client.db("Training").collection("teachers");
    const result = await collection.find({}).toArray()
    console.log(result)
    res.send(result)
})

app.get('/first', async (req, res) => {

    const collection = client.db("Training").collection("teachers");
    const second = await collection.distinct('country')
    console.log(second)
    res.send(second)
})

app.get('/diary', async (req, res) => {

    const collection = client.db("Training").collection("teachers");
    const sheet = await collection.distinct('age')
    console.log(sheet)
    res.send(sheet)
})

app.get('/paper', async (req, res) => {

    const collection = client.db("Training").collection("teachers");
    const cloth = await collection.distinct('subjects')
    console.log(cloth)
    res.send(cloth)
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

