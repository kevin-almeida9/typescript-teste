import mongoose from 'mongoose'

import  INote  from '../interfaces/INote'

const { ObjectId } = mongoose.Types

const NoteObject = {
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    }
}

const NoteSchema: mongoose.Schema = new mongoose.Schema(
  NoteObject, { timestamps: true }
)


export default mongoose.model<INote>('Note', NoteSchema)