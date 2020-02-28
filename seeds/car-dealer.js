
exports.seed = async function(knex) {
 await knex("cars-dealer").insert([
  {vin:33333,make:'ford', model:'explorer'},
  {vin:333333,make:'chevy', model:'bronco'},
  {vin:3333322 ,make:'toyota', model:'rv4'},

 ])
  
};
