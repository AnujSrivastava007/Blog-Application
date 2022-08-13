import express from 'express';
import { addBlog, getAllBlogs, updateBlog,getById,deleteBlog, getByUserId } from '../controllers/blog-controller.js';
const routerblog = express.Router();


routerblog.get('/',getAllBlogs);
routerblog.post('/add',addBlog);
routerblog.put('/update/:id',updateBlog);
routerblog.get('/:id',getById);
routerblog.delete('/:id',deleteBlog);
routerblog.get('/user/:id',getByUserId);

export default routerblog;