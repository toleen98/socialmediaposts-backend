const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `)});