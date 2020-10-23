import express from 'express'
import noteController from './controllers/noteController';
const router = express.Router();


router.post('/',noteController.store)




export{ router}