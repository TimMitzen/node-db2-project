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
router.get('/:id', async(req,res,next)=>{
   try{
      const car = await db.first('*').from('cars-dealer').where('id',req.params.id)
      res.json(car)
   }
   catch(error){
      next(error)
   }
})
router.post("/", async (req,res,next)=>{
   const car ={
      vin: req.body.vin,
      make:req.body.make, 
      model:req.body.model,
      transType: req.body.transType,
      statOfTitle: req.body.statOfTitle

   }
   try{
      const [id] = await db("cars-dealer").insert(car);
      const newCar = await db('cars-dealer').where('id',id).first();
      res.json(newCar)
   }
   catch(error){
      next(error)
   }
})
router.put('/:id', async (req,res,next)=>{
  const car ={
      vin: req.body.vin,
      make:req.body.make, 
      model:req.body.model,
      transType: req.body.transType,
      statOfTitle: req.body.statOfTitle
};
   try{
      await db("cars-dealer").where("id",req.params.id).update(car);
      const oldCar = await db("cars-dealer").where('id',req.params.id).first();
      res.json(oldCar);
   }
   catch(error){
      next(error)
   }
})

router.delete('/:id', async(req,res,next)=>{
   try{
      await db('cars-dealer').where('id', req.params.id).del()
      res.status(204).end()
   }
   catch(error){
      next(error)
   }
})
module.exports= router;