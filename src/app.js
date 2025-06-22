import express from 'express';
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import cors from 'cors';
import usersTable from './models/userModel.js';
import taskTable from './models/taskModel.js';

await usersTable();
await taskTable();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);




const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});