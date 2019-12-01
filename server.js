const { createServer } = require('http')
const cors = require('cors')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const fetch = require('node-fetch')

// app.set("port", process.env.PORT || 3001);
const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 3001)

const app = express()
const URL = `https://api.imgflip.com/get_memes`

app.use(cors())
// const dev = app.get("env") !== "production";
const dev = false

console.log(`working...`)

if (!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  console.log(`working...`)

  app.use(express.static(path.resolve(__dirname, 'build')))

  app.get('/api', (req, res) => {
    const URL = `https://api.imgflip.com/get_memes`

    fetch(URL)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log('the data: ', data)
        // const data = require(URL)
        // const URL = "https://api.github.com/users/milleriishaun";
        res.header('Content-Type', 'application/json')
        res.send(JSON.stringify(data))
      })
      .catch(function (e) {
        console.log('error catch block response fetch')
        console.log(e)
      })
  })
  //   let newPost = {
  //     memes: [
  //       {
  //         id: '188390779',
  //         name: 'Woman Yelling At Cat',
  //         url: 'https://i.imgflip.com/345v97.jpg',
  //         width: 680,
  //         height: 438,
  //         box_count: 2
  //       }
  //     ]
  //   }

  //   fetch(URL, {
  //     method: 'post',
  //     body: JSON.stringify(newPost)
  //   })
  //     .then(function (response) {
  //       return response.json()
  //     })
  //     .then(function (data) {
  //       console.log('post request response data: ', data)
  //     })
  //     .catch(function (e) {
  //       console.log('error catch block response fetch')
  //       console.log(e)
  //     })
  // })

  app.get('*', (req, res) => {
    console.log('citiesSelectedByName[0].coord.lonIDK')
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

if (dev) {
  app.use(morgan('dev'))
}

// const server = createServer(app);
// server.listen
app.listen(PORT, err => {
  if (err) throw err
  console.log(`Server started and listening on ${PORT}`)
})
