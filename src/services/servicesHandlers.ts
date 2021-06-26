import { v1 as uuid } from "uuid";
import { patientData } from "../data/patientsData";
import { diagnosesData } from "../data/diagnosesData";
import { Diagnoses, PatientEntry } from "./types";

type RequiredPatientData = Omit<PatientEntry, "ssn">;
type newInputedData = Omit<PatientEntry, "id">;


const getPatientData = (): Array<RequiredPatientData> => {
    return Array.from(patientData, ({ id, name, dateOfBirth, gender, occupation }) => ({
        id, 
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const getDiagnosesData = (): Array<Diagnoses> => {
    return diagnosesData;
};

const newPatientEntry = (obj: newInputedData): PatientEntry => {
    const newPatient: PatientEntry = {
        id: uuid(),
       ...obj
    };
    patientData.push(newPatient);
    return newPatient;
};
export default {
    getPatientData,
    getDiagnosesData,
    newPatientEntry
};