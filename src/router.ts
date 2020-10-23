import express from 'express'
import noteController from './controllers/noteController';
const router = express.Router();


router.post('/create',noteController.store);
router.get('/list',noteController.list);






export{ router}