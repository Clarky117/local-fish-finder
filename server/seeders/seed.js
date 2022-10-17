const db = require('../config/connection');
const { User, SaleFish } = require('../models');
const userSeeds = require('./userSeeds.json');
const salefishSeeds = require('./salefishSeeds.json');

db.once('open', async () => {
    await User.deleteMany({});
    await SaleFish.deleteMany({});

    
    
    await User.create(userSeeds);

    const createdSaleFishes = await SaleFish.create(salefishSeeds);

    console.log(createdSaleFishes)


    for (let index = 0; index < createdSaleFishes.length; index++) {
        const fish = createdSaleFishes[index];
        
        const owner = await  User.findOneAndUpdate({
            username: fish.fishOwnerUsername
        }, {
            $addToSet: {
                fishesForSale: fish._id
            }
        })

    }

    console.log('all done!');
    process.exit(0);
});