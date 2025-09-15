import { Router } from 'express';
import { createUserController } from '../modules/users/useCases/create-user';



const userRoutes = Router();

userRoutes.post('/users', createUserController.handle);

export { userRoutes };