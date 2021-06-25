import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
    res.send('welcome to this stage of fullstack software development');
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});