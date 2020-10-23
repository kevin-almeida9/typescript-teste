import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://robertvitoriano:1234@cluster0.btwq6.mongodb.net/typescript?retryWrites=true&w=majority',{ useUnifiedTopology: true },()=>{
    console.log('I"m connected');
});


