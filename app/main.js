const axios = require('axios')

const form = document.getElementById('form')
const btn = document.getElementById('btn')
const ans = document.getElementById('ans')

btn.addEventListener('click', async (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const json = Object.fromEntries(data.entries())
  const res = await axios.post('http://localhost:5000/api/add', json, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  ans.innerText = res.data.ans
})
