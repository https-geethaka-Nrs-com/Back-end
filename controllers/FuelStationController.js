const FuelStation = require("../models/FuelStation")
const { response } = require('express')

const addFuelStation = async (req, res) => {
    const fuelStation = req.body
    const newFuelStation = new FuelStation(fuelStation)
    try {
        await newFuelStation.save()
        res.status(201).json(newFuelStation)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const getFuelStationByDealer = async (req, res) => {
    const dealer = req.query.dealer
    try {
        const fuelStation = await FuelStation.find({ dealer: dealer })
        res.status(200).json(fuelStation)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const addFuelStatusToFuelStation = async (req, res) => {
    const _id = req.params.id
    const body = req.body
    const stationObj = body

    try {
        console.log(stationObj)
        const newFuelStatus = await FuelStation.findByIdAndUpdate(
            { _id },
            stationObj
        )
        console.log("success")
        res.status(201).json(newFuelStatus)
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message })
    }
}

const getAllFuelStations = async (req, res) => {
    try {
        const fuelStation = await FuelStation.find()
        res.status(200).json(fuelStation)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

function convertToJsDate(javaDate) {
    const dateArr = javaDate.split(" ")
    const convertedDate = "20" + dateArr[0] + "T" + dateArr[1]
    return convertedDate
}

const getFuelStation = async (req, res) => {
    try {
        const name = req.params.name
        const fuelStation = await FuelStation.find({ name: name })
        res.status(200).json(fuelStation)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

module.exports = {
    addFuelStation, getFuelStationByDealer, addFuelStatusToFuelStation, getAllFuelStations, getFuelStation
}