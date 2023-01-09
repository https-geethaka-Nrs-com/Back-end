const FuelStatus = require("../models/FuelStatus")
const { response } = require('express')

/*Create a new fuel status*/
const addFuelStatus = async (req, res) => {
    let fuelStatus = req.body
  
    const newFuelStatus = new FuelStatus(fuelStatus)
    try {
      await newFuelStatus.save()
      res.status(201).json(newFuelStatus)
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  }

const updateFuelStatusByName = async (req, res) => {
    let fuelStatus = req.body;
    try {
        const updatedFuelStatus = await FuelStatus.findOneAndUpdate(
        { fuelStation: fuelStatus.name },
        fuelStatus,
        { new: true }
        );
        res.status(200).json(updatedFuelStatus);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

module.exports = {
    addFuelStatus,updateFuelStatusByName
}

