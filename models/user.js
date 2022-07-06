var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var userSchema = new Schema({
    first_name:    {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: false
    },
    phone_number: {
        type: String,
        require: true
    },
    email_id: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    issue: {
        type: String,
        require: true
    }
})

/*userSchema.pre('save',function (next){
    var user = this;
    if (this.isModified('password') || this.isNew){
        bcrypt.genSalt(10, function (err,salt){
            if (err) {
                return next(err)
            }
            bcrypt.hash(user.password,salt,function(err, hash){
                if (err) {
                    return next(err)
                }
                user.password = hash;
                next()
            })
        })
    }
    else {
        return next()
    }
})*/

module.exports = mongoose.model('User',userSchema)