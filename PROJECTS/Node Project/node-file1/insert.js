const express = require('express');
const app = express()
const cors = require('cors');
const port = 3002;
app.use(cors())

app.get('/', (req, res) => {
    res.send('API Called')
})

app.get('/dose', async(req, res) => {

    var abc = req.query.year;
    var mno = req.query.month;
    var xyz = req.query.date;
    var pluto = req.query.hour;
    var house = req.query.minute;
    var hut = req.query.seconds;
    var jute = req.query.milliseconds;

    const presentDate = new Date()
    const newYear = presentDate.getFullYear()
    const age = (newYear - abc);

    const newMonth = presentDate.getMonth()
    const sun = (newMonth - mno);

    const newDate = presentDate.getDate()
    const moon = (newDate - xyz);

    const newHour = presentDate.getHours()
    const mercury = (newHour - pluto);

    const newMinute = presentDate.getMinutes()
    const venus = (newMinute - house);

    const newSeconds = presentDate.getSeconds()
    const earth = (newSeconds - hut);

    const newMilliseconds = presentDate.getMilliseconds()
    const mars = (newMilliseconds - jute);

    console.log("year :", newYear)
    console.log("month :", newMonth)
    console.log("date :", newDate)
    console.log("hour :", newHour)
    console.log("minute :", newMinute)
    console.log("seconds :", newSeconds)
    console.log("milliseconds :", newMilliseconds)
    
    console.log("yearAge :", age)
    console.log("monthAge :", sun)
    console.log("dateAge :", moon)
    console.log("hourAge :", mercury)
    console.log("minuteAge :", venus)
    console.log("secondsAge :", earth)
    console.log("millisecondsAge :", mars)

    res.send(`<p>You are currently ${age} years ${sun} months ${moon} days ${mercury} hours ${venus} minutes ${earth} seconds ${mars} milliseconds old</p>`);
})

async function run() {



}

app.listen(port, async() => {
    
    run().catch(console.dir);
    console.log(`APP is running on ${port}`)

})
