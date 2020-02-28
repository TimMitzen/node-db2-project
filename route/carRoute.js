const express = require('express');

const router = express.Router();
const db = require('../data/config')

router.get('/', async(req, res, next)=>{
      try{
         const car = await db.select('*').from('cars-dealer')
         res.json(car)
      }
      catch(error){
         next(error)
      }
})

module.exports= router;