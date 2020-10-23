import mongoose from 'mongoose'

import  INote  from '../interfaces/INote'

const NoteSchema: mongoose.Schema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    }
}, { timestamps: true }
)



const model = mongoose.model<INote>('Note', NoteSchema);

export default  model;
