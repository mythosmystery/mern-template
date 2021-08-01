const db = require('../config/connection');
const { User } = require('../models');
const seeds = require('./seeds.json');

db.once('open', async () => {
   try {
      console.log('all done!');
      process.exit(0);
   } catch (err) {
      throw err;
   }
});
