import mongoose from 'mongoose';

let userSchema=new mongoose.Schema(
    {
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
} ,
{
    timestamps:true
}
)

export let User = mongoose.model("User", userSchema);