const { response } = require('express')
const Dealer = require('../models/Dealer')

//show the list of dealers
const index = (req, res, next) => {
    Dealer.find().then(response =>{
        res.json({
            response
        })
    })

    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    } )
}

//show single dealer
const show = (req, res, next)=>{
    let dealerID = req.body.dealerID
    Dealer.findById(dealerID).then(response =>{
        res.json({
            response
        })

    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })

}


//add new dealer
const store = (req,res,next)=>{
    let dealer = new Dealer({
        name: req.body.name,
        id : req.body.id,
        email : req.body.email,
        phone : req.body.phone
    })

    dealer.save()
    .then(response => {
        res.json({
            message: 'Dealer added succesfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//update a dealer
const update = (req, res, next)=>{
    let dealerID = req.body.dealerID

    let updatedData = {
        name: req.body.name,
        id: req.body.id,
        email: req.body.email,
        phone: req.body.phone
    }

    Dealer.findByIdAndUpdate(dealerID,{$set:updatedData})
    .then(()=>{
        res.json({
            message: 'Dealer updated successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}

//delete a dealer
const destroy = (req, res, next) =>{
    let dealerID = req.body.dealerID
    Dealer.findByIdAndRemove(dealerID)
    .then(()=>{
        res.json({
            message:'Dealer deleted succesfully!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
} 

module.exports = {
    index,show,store,update,destroy
}