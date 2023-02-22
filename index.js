const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost/dummy"

const app = express()
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('database connection....')
})

app.use(express.json())
app.use('/uploads', express.static('uploads'))

const imageRoute=require('./routes/image')
app.use('/',imageRoute)



app.listen(1803, () => console.log('server connection...'))
