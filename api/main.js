const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/add', (req, res) => {
  const { a, b } = req.body
  if (!a || !b) { return res.sendStatus(400) }
  try {
    return res.status(200).send({ ans: parseInt(a) + parseInt(b) })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
