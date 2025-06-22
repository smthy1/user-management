import client from "./connectionModel.js";

async function createTask(description, user_id) {
    const query = `INSERT INTO tasks (description, user_id) VALUES ($1, $2)`;

    await client.query(query, [description, user_id]);
};


async function getTasksById(user_id) {
    const query = `SELECT * FROM tasks WHERE user_id = $1`;
    const result = await client.query(query, [user_id]);

    return result.rows;
};


async function completeTask(user_id, description) {
    try {
        const query = `
            UPDATE tasks
            SET status = $1
            WHERE user_id = $2 AND description = $3
        `;

        await client.query(query, ["TRUE", user_id, description]);
        return { msg: "Tarefa marcada como concluída." }
    } catch (err) {
        return { erro: "Erro insesperado:" + err };
    }
};


async function deleteTask(description, user_id) {
    try {
        const query = `
            DELETE from tasks
            WHERE description = $1 AND user_id = $2
        `;

        await client.query(query, [description, user_id]);
        return { msg: "Tarefa excluída." };
    } catch (err) {
        return { erro: "Erro inesperado:" + err };
    }
};


export { createTask, getTasksById, completeTask, deleteTask };