const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/api/users', (req, res) => {
    let friends = ['Johnny', 'David', 'Moira', 'Alexis', 'Roland'];
    res.status(200).send(friends);
})

app.get('/weather/:temperature', (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(phrase)
})












app.listen(4000, () => console.log('We\'re in business boys: port 4000'))