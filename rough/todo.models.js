import mongoose from 'mongoose';


let todoSchema=new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        complete:{
            type:Boolean,
            default:false
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        subTodos:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"subTodos"
                
            }
        ]
},{timestamps:true})

export let todo=mongoose.model(`todo`,todoSchema);