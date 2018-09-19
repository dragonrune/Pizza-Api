const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/pizza-orders/:chain', (req, res) => res.send(`Here is your delicious pizza, ${req.query.name} from ${req.params.chain}.`))

app.post('/pizza-orders',(req, res) => {
    console.log(req.body)
    res.send (`You created an order for ${req.body.orderFor}`)
})

app.put('/pizza-orders',(req, res) => res.send ('You updated your order'))

app.delete('/pizza-orders',(req, res) => res.send ('You cancelled your order'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
