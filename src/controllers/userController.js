import * as userOperations from '../models/userOperations.js';
import validator from 'validator';

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ "erro": "Preencha corretamente os campos para o cadastro." });
        };

        if (username.length < 3 || username.length > 20) {
            return res.status(400).json({ "erro": "O nome de usuário deve ter entre 3 a 20 caracteres." });
        };

        if (!validator.isEmail(email)) {
            return res.status(400).json({ "erro": "Formato de e-mail inválido." });
        };

        if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
            return res.status(400).json({ msg: "A senha deve ter no mínimo 8 caracteres, pelo menos uma letra maiúscula e um número." });
        };
        
        const reg = await userOperations.createUser(username, email, password);

        if (reg?.erro) {
            return res.status(400).json(reg);
        } else if (reg?.msg) {
            return res.status(201).json(reg);
        }
    } catch (err) {
        return res.status(500).json({ erro: `Erro inesperado: ${err}` }); 
    }
};


const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ erro: "Preencha os campos de usuário e senha!" });
        }

        const confirmUser = await userOperations.login(username, password);

        if (confirmUser?.erro) {
            return res.status(401).json(confirmUser);
        } else if (confirmUser?.msg) {
            return res.status(200).json(confirmUser);
        }
    } catch (err) {
        return res.status(500).json({ erro: `Erro inesperado ${err}`});
    }
};


const updateUser = async (req, res) => {
    try {
        const { currentUsername, newUsername, password } = req.body;

        if (!currentUsername || !newUsername || !password) {
            return res.status(400).json({ erro: "Preencha corretamente os campos." });
        }

        if (newUsername.length < 3 || newUsername.length > 20) {
            return res.status(400).json({ erro: "O novo nome de usuário deve ter entre 3 a 20 caracteres." });
        };

        const result = await userOperations.updateUsername(currentUsername, newUsername, password);

        if (result?.erro) {
            return res.status(400).json(result);
        }

        return res.status(200).json(result);

    } catch (err) {
        return res.status(500).json({ erro: `Erro inesperado: ${err}` });
    }

};


const newPassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, email } = req.body;
        
        if (!currentPassword || !newPassword || !email) {
            return res.status(400).json({ erro: "Preencha corretamente os campos." });
        }
        
        if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
            return res.status(400).json({ erro: "A nova senha deve ter no mínimo 8 caracteres, pelo menos uma letra maiúscula e um número." });
        }

        const result = await userOperations.updatePassword(currentPassword, newPassword, email);
        
        if (result?.erro) {
            return res.status(400).json(result);
        }

        return res.status(200).json(result);

    } catch (err) {
        return res.status(500).json({ erro: `Erro inesperado: ${err}` });
    }
};


const delUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ erro: "Preencha corretamente os campos." });
        }

        const result = await userOperations.deleteUser(email, password);

        if (result?.erro) {
            return res.status(400).json(result);
        }

        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({ erro: `Erro inesperado: ${err}` });
    }
};


export { registerUser, loginUser, updateUser, newPassword, delUser };