import {Request,Response} from 'express';

class noteController{
    store(req:Request,res:Response){
        console.log('hello world')
        res.send({message:'hello World'})
    }


}



export default new noteController();