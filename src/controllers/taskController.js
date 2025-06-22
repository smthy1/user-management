import * as taskOperations from "../models/taskOperations.js";

const newTask = async (req, res) => {
    const { description } = req.body;
    const userId = req.user.userId;

    try {
        await taskOperations.createTask(description, userId);
        return res.status(201).json({ msg: "Tarefa criada com sucesso." });
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao criar tarefa." + err });
    }
};

const getTasks = async (req, res) => {
    const userId = req.user.userId;

    try {
        const tasks = await taskOperations.getTasksById(userId);
        return res.status(200).json(tasks);
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao buscar tarefas" + err });
    }
};


const markComplete = async (req, res) => {
    const { description } = req.body;
    const userId = req.user.userId;

    try {
        const result = await taskOperations.completeTask(userId, description);
        
        if (result?.msg) {
            return res.status(200).json(result);
        }

        if (result?.erro) {
            return res.status(400).json(result);
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro inesperado:" + err });
    }
};


const delTask = async (req, res) => {
    const { description } = req.body;
    const userId = req.user.userId;

    try {
        const result = await taskOperations.deleteTask(description, userId);

        if (result?.msg) {
            return res.status(200).json(result);
        }

        if (result?.erro) {
            return res.status(400).json(result);
        }
    } catch (err) {
        return res.status(500).json({ erro: "Erro inesperado" + err });
    }
};


export { newTask, getTasks, markComplete, delTask };