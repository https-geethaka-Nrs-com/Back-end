const mongoose = require ('mongoose')
const schema = mongoose.Schema

const dealerSchema = new schema({
    name: {
        type: String
    },
    id:{
        type: String
    },
    email:{
        type:String
    },
    phone:{
        type: String
    },

}, {timestamps:true})

const Dealer = mongoose.model('Dealer',dealerSchema)
module.exports = Dealer