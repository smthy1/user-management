import express from 'express';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import usersTable from './models/userModel.js';

await usersTable();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);




const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});