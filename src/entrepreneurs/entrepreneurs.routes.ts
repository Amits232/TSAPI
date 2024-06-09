import { Router } from 'express';
import * as entrepreneurController from './entrepreneurs.controller';

const entrepreneurRouter = Router();

entrepreneurRouter
    .get('/getConstructors', entrepreneurController.getAllConstructors)
    .get('/getConstructorById/:id', entrepreneurController.getConstructorById)
    .post('/rateConstructor', entrepreneurController.rateConstructor)
    .get('/getProjectsByEntrepaneur/:id', entrepreneurController.getProjectsByEntrepaneur)
    .get('/getBidByEntrepaneur/:id', entrepreneurController.getBidByEntrepaneur)



export default entrepreneurRouter;

