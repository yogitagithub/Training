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

const port = 3002;


app.get('/', (req, res) => {
    res.send('API Called')
})

app.get('/users', async (req, res) => {

    // For query string parameters
    //  console.log(req.query)
    
    const collection = client.db("Training").collection("users");
    const result = await collection.find({"$and": [{age: { $lte:35}}, {age: { $gt: 28}}]}).limit(1).toArray()
    console.log(result)
    res.send(result)
})

app.get('/data', async (req, res) => {
    const collection = client.db("Training").collection("users");

        const get = [
        {username: 'Yogita', city: 'Udaipur', age: 25},
        {username: 'Mamta', city: 'Tirupati', age: 24},
        {username: 'Seema', city: 'Bhilai', age: 26}
     ]
    const tree = await collection.insertMany(get);

    const query = {age: {$lte: 26 }}
    const things = await collection.deleteMany(query);


     console.log(tree)
    res.send(tree)
})

app.get('/pencil', async (req, res) => {
    const collection = client.db("Training").collection("users");

    const query = {age: {$lte: 26 }}
    const things = await collection.deleteMany(query);

    console.log(things)
    res.send(things)
})

app.get('/pen', async (req, res) => {
    const collection = client.db("Training").collection("users");

    const swing = {age: {$lte: 26}}
    const newValues = {$set: {address: 'India'}}

    const twist = await collection.updateMany(swing, newValues);

    console.log(twist)
    res.send(twist)
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
