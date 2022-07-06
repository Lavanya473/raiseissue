const express = require ('express')
const actions = require('../methods/actions.js')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Hello World')
});

router.get('/dashboard',(req,res)=>{
    res.send('Hello')
});

router.post('/adduser',  actions.addNew)

module.exports = router