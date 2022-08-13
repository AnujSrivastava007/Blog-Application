import express from 'express';
import { getAllUser, login, signup } from '../controllers/user-controller.js';

const routeruser = express.Router();

routeruser.get('/',getAllUser);
routeruser.post('/signup',signup);
routeruser.post('/login',login)

export default routeruser;