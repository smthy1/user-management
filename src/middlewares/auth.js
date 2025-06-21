import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ erro: "Token não fornecido" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ erro: "Token inválido ou expirado" });
    }
};

export default authToken;