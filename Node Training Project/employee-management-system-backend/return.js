const express = require('express');
const cors = require('cors');
const app = express();

const mongoDB = require('mongodb');

const { MongoClient, ServerApiVersion, MongoRuntimeError } = require('mongodb');

const bodyParser = require('body-parser');

const password = encodeURIComponent('Y0git@mongodb');

const uri = `mongodb+srv://yv161993:${password}@cluster0.xfzig.mongodb.net/Employee-Management-System?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors())
app.use(bodyParser.json())
const port = 3001;

app.get('/', (req, res) => {
    res.send('API Called')
})

app.post('/sun', async (req, res) => {
    console.log(req.body)

    const data = req.body;

    data.pincode = parseInt(data.pincode)
    data.mobile = parseInt(data.mobile)
    // data.dob = parseDate(data.dob)
    // data.doj = parseDate(data.doj)

    const collection = client.db("Employee-Management-System").collection("employee");
    const result = await collection.insertOne(data);

    res.send(result)
})

app.get('/sun', async (req, res) => {

    const collection = client.db("Employee-Management-System").collection("employee");
    const result = await collection.find({}).toArray()
    console.log(result)
    res.send(result)
})

app.post('/planets', async (req, res) => {
    console.log(req.body)

    const attack = req.body;

    attack.Id = parseInt(attack.Id)

    const collection = client.db("Employee-Management-System").collection("department");
    const push = await collection.insertOne(attack);

    res.send(push)
})

app.get('/planets', async (req, res) => {

    const collection = client.db("Employee-Management-System").collection("department");
    const push = await collection.find({}).toArray()
    console.log(push)
    res.send(push)
})

app.post('/solar', async (req, res) => {
    console.log(req.body)

    const kite = req.body;

    kite.basic = parseInt(kite.bonus)
    kite.DA = parseInt(kite.DA)
    kite.TA = parseInt(kite.TA)
    kite.HRA = parseInt(kite.HRA)
    kite.medical = parseInt(kite.medical)
    kite.bonus = parseInt(kite.bonus)
    kite.fund = parseInt(kite.fund)
    kite.tax = parseInt(kite.tax)

    const collection = client.db("Employee-Management-System").collection("grade");
    const pop = await collection.insertOne(kite);

    res.send(pop)
})

app.get('/solar', async (req, res) => {

    const collection = client.db("Employee-Management-System").collection("grade");
    const pop = await collection.find({}).toArray()
    console.log(pop)
    res.send(pop)
})

app.post('/sound', async (req, res) => {
    console.log(req.body)

    const knife = req.body;
    
    knife.year = parseInt(knife.year)
    knife.basic = parseInt(knife.basic)
    knife.HRA = parseInt(knife.HRA)
    knife.DA = parseInt(knife.DA)
    knife.TA = parseInt(knife.TA)
    knife.medical = parseInt(knife.medical)
    knife.bonus = parseInt(knife.bonus)
    knife.gross = parseInt(knife.gross)
    knife.fund = parseInt(knife.fund)
    knife.tax = parseInt(knife.tax)
    knife.salary = parseInt(knife.salary)

    const collection = client.db("Employee-Management-System").collection("salary");
    const pin = await collection.insertOne(knife);

    res.send(pin)
})

app.get('/sound', async (req, res) => {

    const collection = client.db("Employee-Management-System").collection("salary");
    const pin = await collection.find({}).toArray()
    console.log(pin)
    res.send(pin)
})

app.post('/hear', async (req, res) => {
    console.log(req.body)

    const value = req.body;
    
    const collection = client.db("Employee-Management-System").collection("report");
    const handle = await collection.insertOne(value);

    res.send(handle)
})

app.get('/hear', async (req, res) => {

    const collection = client.db("Employee-Management-System").collection("report");
    const handle = await collection.find({}).toArray()
    console.log(handle)
    res.send(handle)
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


