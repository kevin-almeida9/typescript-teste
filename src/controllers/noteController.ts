import {Request,Response} from 'express';
import Note from '../models/Note';

class noteController{
    store(req:Request,res:Response){
        const note = new Note(req.body);
        res.send(note);

    }


}



export default new noteController();