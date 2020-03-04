
exports.up = async function(knex) {
  await knex.schema.createTable('cars-dealer', (table)=>{
     table.increments("id")
     table.float("vin").notNull().unique()
     table.text("make").notNull()
     table.text("model").notNull()
     table.text("transType")
     table.text("statOfTitle")

  })
};

exports.down = function(knex) {
  
};
