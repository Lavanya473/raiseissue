const User = require('../models/user.js')
const jwt = require('jwt-simple')
const config = require ('../config/dbconfig.js')

var functions = {
    addNew: function (req,res) {
        if ((!req.body.first_name)|| (!req.body.phone_number) ||(!req.body.email_id) || (!req.body.subject) || (!req.body.issue)) {
            res.json({success: false, msg: 'Enter all field'})
        }
        else {
            var newUser = User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone_number: req.body.phone_number,
                email_id: req.body.email_id,
                subject: req.body.subject,
                issue: req.body.issue,
            });
            newUser.save(function (err,newUser){
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    }
}

module.exports=functions