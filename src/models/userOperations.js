import client from "./connectionModel.js";
import { verifyUsername, verifyEmail } from "./verifyCredentials.js";
import bcrypt from 'bcrypt';


async function createUser(username, email, password) {
    try {
        // Verify if username and email already exist
        const existingUsername = await verifyUsername(username);
        const existingEmail = await verifyEmail(email);

        if (existingUsername?.erro && existingEmail?.erro) {
            return { erro: "Nome de usuário e e-mail já cadastrados." };
        } else if (existingUsername?.erro) {
            return { erro: "Nome de usuário já cadastrado." };
        } else if (existingEmail?.erro) {
            return { erro: "E-mail já cadastrado." }
        }

        const query = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
        `;
        const hashedPassword = await bcrypt.hash(password, 10);
        await client.query(query, [username, email, hashedPassword]);

        return { msg: "Usuário registrado com sucesso." };
    } catch (err) {
        return { erro: `Erro inesperado: ${err}` };
    }
};


async function login(username, password) {
    try {
        const query = `
            SELECT * FROM users
            WHERE username = $1
        `;

        const resultQuery = await client.query(query, [username]);
        const user = resultQuery.rows[0];

        if (!user) {
            return { erro: "Credenciais inválidas" }
        }

        const comparedPassword = await bcrypt.compare(password, user.password);

        if (comparedPassword === true) {
            return { msg: `Logado como ${user.username }` };
        } else {
            return { erro: "Nome de usuário e/ou senha inválidos." };
        }
    } catch (err) {
        return { erro: `Erro inesperado ${err}` };
    }
};


async function updateUsername(currentUsername, newUsername, password) {
    try {
        // Verify if the user exist
        const test = await login(currentUsername, password)

        if (test?.erro){
            return { erro: "Credenciais inválidas." };
        }

        const query = `
            UPDATE users
            SET username = $1
            WHERE username = $2;
        `;

        await client.query(query, [newUsername, currentUsername]);
        return { msg: "Nome de usuário atualizado." };
    } catch (err) {
        return{ erro: `Erro inesperado: ${err}`};
    }
};


async function updatePassword(currentPassword, newPassword, email) {
    try {
        //verify credentials
        const queryCredentials = `
            SELECT * FROM users
            WHERE email = $1
        `;
        const resultQuery = await client.query(queryCredentials, [email]);
        const user = resultQuery.rows[0];

        if (!user) {
            return { erro: "E-mail não cadastrado." };
        }

        const comparedPassword = await bcrypt.compare(currentPassword, user.password);

        if (comparedPassword === true) {
            const query = `
                UPDATE users
                SET password = $1
                WHERE email = $2 AND password = $3
            `;
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);
            await client.query(query, [hashedNewPassword, email, user.password]);
            
            return { msg: "Senha atualizada com sucesso." };
        } else {
            return { erro: "Erro: Senha incorreta." };
        }
 
    } catch (err) {
        return { erro: `Erro inesperado: ${err}` };
    }
};


async function deleteUser(email, password) {
    try {
        const query = `
            SELECT * FROM users
            WHERE email = $1
        `;
        const resultQuery = await client.query(query, [email]);
        const user = resultQuery.rows[0];

        if (!user){
            return { erro: "E-mail não cadastrado." }
        }
        const comparedPassword = await bcrypt.compare(password, user.password);
        
        if (comparedPassword === true) {
            const queryDelete = `
                DELETE FROM users
                WHERE email = $1 AND password = $2
            `;
            await client.query(queryDelete, [email, user.password]);
            return { msg: "Usuário deletado com sucesso." };

        } else {
            return { erro: "Erro: senha incorreta." };
        }
    } catch (err) {
        return { erro: `Erro inesperado: ${err}` };
    }
};


export { createUser, login, updateUsername, updatePassword, deleteUser };