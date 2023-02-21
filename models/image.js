const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    name:{
        type: String,
        required:false
    },
    image:{
        type: Array,
        required:true
    }
})


module.exports = mongoose.model('image', imageSchema)

