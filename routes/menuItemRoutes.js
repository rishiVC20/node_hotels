const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');



router.post('/', async(req,res)=>{
    try{
        //Request body
        const data = req.body;

        //Creation of new item using mongoose model
        const item = new MenuItem(data);

        //Save
        const response = await item.save(data);

        console.log('Data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await MenuItem.find(); 
        console.log('Data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports =router
