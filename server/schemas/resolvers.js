const { AuthenticationError } = require('apollo-server-express');
const { User, SaleFish } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        // TODO: change populate
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('fishesForSale')
        },
        users: async () => {
            return User.find().populate('fishesForSale')
        },
        // userFishSales: async (parent, { username }) => {
        //     const params = username ? { username } : {};
        //     return SaleFish.find(params).sort({ createdAt: -1 })
        // },
        // not sure on fishId
        // salefish: async (parent, { fishId }) => {
        //     return SaleFish.findOne({ _id: fishId })
        // },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('fishesForSale');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        allfish: async () => {
            return SaleFish.find().populate()
        }
    },


    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        // add description
        addDescription: async (parent, { description }, context) => {
            // help
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    // unsure
                    {
                        description,
                    },
                    { new: true }

                )
            }
            throw new AuthenticationError('You need to be logged in!');

        },

        // sale fish mutations
        addFish: async (parent, { fishName, price, size, quantity, location }, context) => {
            if (context.user) {
                const fish = await SaleFish.create({
                    // bit lost on what goes here?

                    fishName,
                    price,
                    size,
                    quantity,
                    location,

                    // fishOwnerUsername: context.user.username,

                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { userFishSales: SaleFish._id }, }, { new: true }
                );

                return fish;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeFish: async (parent, { fishId }, context) => {
            if (context.user) {
                const fish = await SaleFish.findOneAndDelete({
                    _id: fishId,
                    fishOwnerUsername: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { userFishSales: fish._id } },
                    { new: true }
                );

                return fish;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

    }





}
