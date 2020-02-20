const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateBullshit = require('./generate_bullshit')
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
  const option = req.body
  const expression = generateBullshit(option.job)
  let checkedItem = {}

  if (option.job === 'engineer') {
    checkedItem = { engineer: 'true' }
  } else if (option.job === 'designer') {
    checkedItem = { designer: 'true' }
  } else {
    checkedItem = { entrepreneur: 'true' }
  }

  console.log('checkedItem', checkedItem)
  res.render('index', { expression: expression, checkedItem: checkedItem })
})

app.listen(port, () => {
  console.log(`Server running (URL: http://localhost:${port})`)
})

