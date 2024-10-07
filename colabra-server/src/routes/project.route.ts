import express from 'express';
import { CreateProject } from '../controllers/project/project.controller';
import { Authenticate } from '../middlewares/Authenticate';

const router = express.Router();

router.post('/create',Authenticate, CreateProject);

export default router;
