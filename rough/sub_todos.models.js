import mongoose from 'mongoose';

let subTodosSchema=new mongoose.schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
},{timestamps:true})

export let subTodos=mongoose.model(`subTodos`,subTodosSchema);