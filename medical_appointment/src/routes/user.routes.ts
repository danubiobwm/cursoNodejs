import { Router } from 'express';

import { CreateUserController } from '../useCases/create-user-controller';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/users', createUserController.handle);

export { userRoutes };