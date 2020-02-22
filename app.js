const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateBullshit = require('./generate_bullshit')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const expression = generateBullshit(option.job)
  let checkedItem = {}

  // 依據 req 裡的職業選項，產出對應的 checkedItem 物件
  if (option.job === 'engineer') {
    checkedItem = { engineer: 'true' }
  } else if (option.job === 'designer') {
    checkedItem = { designer: 'true' }
  } else if (option.job === 'entrepreneur') {
    checkedItem = { entrepreneur: 'true' }
  }

  // 回傳產生出的幹話 (expression)
  // 回傳 checkedItem 物件，用來讓選項維持在勾選狀態
  res.render('index', { expression: expression, checkedItem: checkedItem })
})

app.listen(port, () => {
  console.log(`Server running (URL: http://localhost:${port})`)
})

