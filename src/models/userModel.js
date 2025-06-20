import client from "./connectionModel.js";

async function usersTable() {
    try {
        const table = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                password VARCHAR(100) NOT NULL
            );
        `;

        await client.query(table);
        console.log('Tabela criada com sucesso.');
    } catch (err) {
        console.error('Erro ao criar tabela:', err);
    }
}

export default usersTable;