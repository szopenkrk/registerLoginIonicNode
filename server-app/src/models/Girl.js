var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    GirlSchema = new mongoose.Schema({
        name: {type: String, unique: false, required: true},
        username: {type: String, unique: true, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        cash: {type: String, required: true },
        description: {type: String, required: false },
        thumbnail: {type: String, required: true }
    });


GirlSchema.pre('save', function (callback) {
    var user = this;

    if (!user.isModified('password')) {
        return callback();
    }
    bcrypt.genSalt(5, function (err, salt) {
        if (err) {
            return callback(err)
        }

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                return callback(err)
            }
            user.password = hash;
            callback();
        })

    })
});


module.exports = mongoose.model('Girl', GirlSchema);