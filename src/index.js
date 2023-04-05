const app = require('./app.js')
require('dotenv').config()
const port = app.get('port')
app.listen(port,()=>{
  console.log(`Client listed to localhost:${port}`)
})