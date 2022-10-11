const db = require('../config/connection');
const { User, SaleFish } = require('../models');
const userSeeds = require('./userSeeds.json');
const salefishSeeds = require('./salefishSeeds.json');

db.once('open', async () => {
    await User.deleteMany({});
    await SaleFish.deleteMany({});

    await User.create(userSeeds);
    await SaleFish.create(salefishSeeds);

    console.log('all done!');
    process.exit(0);
})