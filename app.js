const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))


// Routes

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server running (URL: http://localhost:${port})`)
})

