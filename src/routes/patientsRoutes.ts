import express from 'express';
import Services from '../services/servicesHandlers';
const router = express.Router();

router.get('/', (_req, res) => {
    const data = Services.getPatientData();
    if(data){
        res.status(200).json(data);
    }else {
        throw new Error('invalid request');
    }
    
});

router.post('/', (req, res) => {
    
    const savedData = Services.newPatientEntry(req.body);
    if (!savedData){
        throw new Error('request failed');
    }
    res.status(200).json(savedData);
});

export default router;