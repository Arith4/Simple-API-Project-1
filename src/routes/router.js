const express = require("express");
const router = express.Router();

const carModel = require("../schema/carSchema");

router.use(express.json());

router.post("/cars", async(req,res) => {
    try{
    const fetchData = new carModel(req.body);
    const saveData = await fetchData.save();
    res.status(201).send(saveData);
    }
    catch(e){
    res.status(400).send(e);
    }
});

router.get("/cars", async(req,res) => {
    try{
    const getDatas = await carModel.find();
    res.send(getDatas);
    }
    catch(e){
    res.status(401).send(e);
    }
});

router.get("/cars/:id", async(req,res) =>{
    try{
    const _id = req.params.id;
    const getData = await carModel.findById(_id,req.body);
    res.send(getData);
    }
    catch(e){
    res.send(e);
    }
});

router.patch("/cars/:id", async(req,res) => {
    try{
    const _id = req.params.id;
    const updateData = await carModel.findByIdAndUpdate(_id,req.body);
    res.send(updateData);
    }
    catch(e){
    res.send(e);
    }
});

router.delete("/cars/:id",async(req,res) => {
    try{
    const _id = req.params.id;
    const deleteData = await carModel.findByIdAndDelete(_id,req.body);
    res.send(deleteData);
    }
    catch(e){
    res.send(e);
    }
});

module.exports = router;

