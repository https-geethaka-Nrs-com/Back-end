const mongoose = require("mongoose")
const Schema = mongoose.Schema

const fuelQueueSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
      },
      arrivalTime: {
        type: Date,
        trim: true,
      },
      departTime: {
        type: Date,
        trim: true,
      },
      status: {
        type: String,
        trim: true,
        required: true,
      },
},{timestamps:true})

const FuelQueue = mongoose.model('FuelQueue',fuelQueueSchema)
module.exports = FuelQueue
