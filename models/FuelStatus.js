const mongoose = require("mongoose")
const Schema = mongoose.Schema

const fuelStatusSchema = new Schema({
  fuelStation: {
    type: Schema.Types.ObjectId,
    ref: "FuelStation",
  },
  fuelTypeName: {
    type: String,
    trim: true,
    required: true,
  },
  arrivalTime: {
    type: Date,
    trim: true,
    required: true,
  },
  finishedTime: {
    type: Date,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    default: false,
  },
}, { timestamps: true })

const FuelStatus = mongoose.model('FuelStatus', fuelStatusSchema)
module.exports = FuelStatus
