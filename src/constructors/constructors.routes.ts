import { Router } from 'express';
import * as constructorController from './constructors.controller';

const constructorRouter = Router();

constructorRouter
    .get('/getRatingsById/:id', constructorController.getRatingsById)
    .get('/getWIPProjectsByConstructor/:id', constructorController.getWIPProjectsByConstructor)
    .get('/getProfileById/:id', constructorController.getProfileById)
    .put('/updateProfileById', constructorController.updateProfileById)
    .get('/getBidsById/:id', constructorController.getBidsById)
    .post('/sendBidByProjId', constructorController.sendBidByProjId)

export default constructorRouter;