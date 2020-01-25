const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
        trim: true
    },
    phonenumber: {
        type: String,
        require: true,
        trim: true
    }
    ,
    tokens: [{

        token: {
            type: String,
            required: true
        }

    }]

});

userSchema.statics.checkCrediantialsDb = async (user22, pass11) => {
    const user1 = await User.findOne({ email: user22, password: pass11 })
    return user1;
}

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewtoken')
    // console.log(token);
    user.tokens = user.tokens.concat({ token: token })
    await user.save()
    return token
}

const User = mongoose.model('user', userSchema);

module.exports = User;