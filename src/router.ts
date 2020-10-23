import express from 'express'
import noteController from './controllers/noteController';
const router = express.Router();


router.get('/',noteController.store)




export{ router}