const db = require('../entities')
const employee = db.Employee

const auth = async(req,res) =>{

    const name = req.body.username
    try{
        console.log("usernaem",name)
    }
    catch(err){
        console.log(err)
    }
}

module.exports ={
    auth
}