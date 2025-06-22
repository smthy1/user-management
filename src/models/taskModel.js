import client from "./connectionModel.js";

async function taskTable() {
    try {
        const table = `
            CREATE TABLE IF NOT EXISTS tasks (
                id SERIAL PRIMARY KEY,
                description VARCHAR(200) NOT NULL,
                status BOOLEAN DEFAULT FALSE,
                user_id INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `;
        await client.query(table);
        console.log('Tabela criada.');
    } catch (err) {
        console.log('Erro ao criar tabela:', err);
    }
};

export default taskTable;