const mongoose = require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        min:5,
        max:50
    },
    email:{
        type:String,
        min:5,
        max:50,
        required:true,
    },
    password:{
        type:String,
        min:8,
        max:20,
        required:true,
    },
    profilePicture:{
        type:String,
        default:'',
    },
    coverPicture:{
        type:String,
        default:'',
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    desc:{
        type:String,
        max:50,
        default:"N/A"
    },
    city:{
        type:String,
        max:50,
        default:"N/A"

    },
    from:{
        type:String,
        max:50,
        default:"N/A"

    },
    relationShip:{
        type:Number,
        enum:[1,2,3],
        default:"N/A"

    }

},{timestamps:true})

module.exports = mongoose.model('User',userSchema)