const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Boolean,
        required:true
    }
    
})



const User = mongoose.model('USER',userSchema);
module.exports=User;