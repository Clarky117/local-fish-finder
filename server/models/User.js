const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const SaleFish = require('./SaleFish');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    // image: {
    //     type: 
    // },
    description: {
        type: String,
        trim: true,
    },
    // unsure
    fishesForSale: [
        {
            type: Schema.Types.ObjectId,
            ref: SaleFish,
        },
    ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const hackerProof = 10;
      this.password = await bcrypt.hash(this.password, hackerProof);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;