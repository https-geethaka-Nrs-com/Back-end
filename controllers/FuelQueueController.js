const FuelQueue = require("../Models/FuelQueue")
const { response } = require('express')

/*Create a new fuel queue when a user arrives at the fuel station*/
const addFuelQueue = async (req, res) => {
    let fuelQueue = req.body
    fuelQueue.arrivalTime = new Date()

    const newFuelQueue = new FuelQueue(fuelQueue)
    try {
        await newFuelQueue.save()
        res.status(200).json(newFuelQueue)
        console.log("succuss")
    } catch (error) {
        console.log("exception")
        res.status(409).json({ message: error.message })
    }

}

const exitBeforePump = async (req, res) => {
    let name = req.body.name;
    departTime = new Date();

    try {
        updatedQueue = await FuelQueue.findOneAndUpdate(
            { userName: name },
            { departTime, status: "notPumped" }
        );
        res.status(200).json(updatedQueue)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};

const exitAfterPump = async (req, res) => {
    let name = req.body.name
    departTime = new Date()

    try {
        updatedQueue = await FuelQueue.findOneAndUpdate(
            { userName: name },
            { departTime, status: "pumped" }
        );
        res.status(200).json(updatedQueue)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

/*Update the queue when a user leaves the fuel station */
const updateFuelQueueStatusByUserName = async (req, res) => {
    const userName = req.query.userName
    const status = req.query.status
    const departTime = req.query.departTime
    try {
        const fuelQueue = await FuelQueue.findOneAndUpdate(
            { userName: userName },
            { status: status, departTime: departTime },
            { new: true }
        );
        res.status(200).json(fuelQueue)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    addFuelQueue, exitBeforePump, exitAfterPump, updateFuelQueueStatusByUserName
}
