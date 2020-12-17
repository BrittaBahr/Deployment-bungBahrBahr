const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const appInsights = require('applicationinsights');
appInsights.setup('973b1381-913d-4f9f-b8a0-9ca04e2085ca').start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})