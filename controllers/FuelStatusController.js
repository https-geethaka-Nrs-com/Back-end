const FuelStatus = require("../Models/FuelStatus");
const { response } = require('express')

/*Create a new fuel status*/
exports.addFuelStatus = async (req, res) => {
    let fuelStatus = req.body;
  
    const newFuelStatus = new FuelStatus(fuelStatus);
    try {
      await newFuelStatus.save();
      res.status(200).json(newFuelStatus);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };


  