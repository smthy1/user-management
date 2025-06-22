import express from "express";
import * as taskController from "../controllers/taskController.js";
import authToken from "../middlewares/auth.js";

const router = express.Router();

router.post('/task', authToken, taskController.newTask);
router.get('/tasks', authToken, taskController.getTasks);
router.patch('/task', authToken, taskController.markComplete);
router.delete('/task', authToken, taskController.delTask);



export default router;