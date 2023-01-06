const mongoose = require("mongoose")
const Schema = mongoose.Schema

const fuelStationSchema = new Schema({
    name: {
        type: String,
        trim: true,
      },
      dealer: {
        type: String,
        trim: true,
      },
      location: {
        type: String,
        trim: true,
      },
      petrolStatus: {
        type: String,
        trim: true,
      },
      petrolArrivalTime: {
        type: Date,
        trim: true,
      },
      petrolFinishedTime: {
        type: Date,
        trim: true,
      },
      dieselStatus: {
        type: String,
        trim: true,
      },
      dieselArrivalTime: {
        type: Date,
        trim: true,
      },
      dieselFinishedTime: {
        type: Date,
        trim: true,
      },
},{timestamps:true})

const FuelStation = mongoose.model('FuelStatus',fuelStationSchema)
module.exports = FuelStation
