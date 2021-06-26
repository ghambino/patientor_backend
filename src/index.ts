import express from 'express';
import cors from 'cors';
import patientRouter from './routes/patientsRoutes';
import diagnosesRouter from './routes/diagnosesRoutes';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
    res.send('welcome to this stage of fullstack software development');
});

app.use('/api/patients', patientRouter);
app.use('/api/diagnoses', diagnosesRouter);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});