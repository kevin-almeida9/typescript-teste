import { Request, Response } from "express";
import Note from "../models/Note";

class noteController {
  store(req: Request, res: Response) {
    const note = new Note(req.body);
    note.save()
    res.send(note);

  }
  async list(req: Request, res: Response) {
      try{

        const notes = await Note.find();
        console.log(notes)

        res.send(notes);
      }catch(e){
          console.log(e)
      }
  }
}

export default new noteController();
