const express = require('express')
const app = express()
const port = 3000

app.get('/pizza-orders', (req, res) => res.send('Here is your delicious pizza'))

app.post('/pizza-orders',(req, res) => res.send ('You created an order'))

app.put('/pizza-orders',(req, res) => res.send ('You updated your order'))

app.delete('/pizza-orders',(req, res) => res.send ('You cancelled your order'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
