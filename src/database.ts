  
import mongoose from 'mongoose'


mongoose.connect("mongodb+srv://robertvitoriano:oe1Vm3E0pNNvcacJ@cluster0.btwq6.mongodb.net/TYPESCRIPT?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
},()=>{console.log('Im connected to mongodb')});