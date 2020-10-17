const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post('/autorizar', (req, res) => {
    console.log('Got body:', req.body);
    res.json({ return: 'Transaction Accepted.' })
    res.sendStatus(200);
})


app.listen(port, () => {
    console.log(`Autorizador app listening at http://localhost:${port}`)
})