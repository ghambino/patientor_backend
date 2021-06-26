
// type Gender = "male"| "female" | "others";

export interface PatientEntry {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string
}

export interface Diagnoses {
    code: string,
    name: string,
    latin?: string
}

