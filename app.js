const http = require('http')
const express = require('express');
const app = express();
const host = '127.0.0.1'
const port = 7000

const server = http.createServer((req, res) => {
    switch (req.method) {
      case 'GET': {
        switch (req.url) {
          case '/home': {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end('Home page\n')
            break
          }
          case '/about': {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end('About page\n')
            break
          }
          default: {
            notFound(res)
            break
          }
        }
  
        break
      }
      case 'POST': {
        switch (req.url) {
          case '/api/admin': {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end('Create admin request\n')
            break
          }
          case '/api/user': {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
            res.end('Create user request\n')
            break
          }
          default: {
            notFound(res)
            break
          }
        }
        break
      }
      default: {
        notFound(res)
        break
      }
    }
  })
  
app.use(express.static(`${__dirname}/assets`));
app.use(
    '/photos',
    express.static(`${__dirname}/assets/img`)
  );
  app.use(
    '/styles',
    express.static(`${__dirname}/assets/css`)
  );
app.get('/home', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Home page')
})

app.get('/about', (req, res) => {
  res.status(200).type('text/plain')
  res.send('About page')
})

app.post('/api/admin', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Create admin request')
})

app.post('/api/user', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Create user request')
})

app.use((req, res, next) => {
  res.status(404).type('text/plain')
  res.send('Not found')
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
