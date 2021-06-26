import express from 'express';
import getter from '../services/servicesHandlers';

const router = express.Router();

router.get('/', (_req, res) => {
    const data = getter.getDiagnosesData();
    try{
        res.status(200).json(data);
    }catch{
        throw new Error('invalid reqeust');
    }
});

export default router;