import client from "./connectionModel.js";

async function verifyUsername(username) {
    try {
        const query = `
            SELECT * FROM users
            WHERE username = $1
        `;

        const result = await client.query(query, [username]);
        if (result.rows.length > 0){
            return { "erro": "Username indisponível" };
        } else {
            return { "msg": "Username disponível" };
        }
    } catch (err) {
        console.error('Erro:', err);
    }
};


async function verifyEmail(email) {
    try {
        const query = `
            SELECT * FROM users
            WHERE email = $1
        `;

        const result = await client.query(query, [email]);
        if (result.rows.length > 0) {
            return { erro: "E-mail já cadastrado" };
        } else {
            return { msg: "E-mail não cadastrado" };
        }
    } catch (err) {
        return { Erro: err };
    }
};


async function getInfos(username) {
    try {
        const query = `
            SELECT * FROM users
            WHERE username = $1
        `;

        const user = await client.query(query, [username]);

        return { userId: user.rows[0].id, username: user.rows[0].username };
    } catch (err) {
        return { err };
    }
};


export { verifyUsername, verifyEmail, getInfos };