import axios from 'axios'

const PATIENT_REST_API_URL = 'http://localhost:8080/patients'

class PatientServices{

    getPatients(){
        return axios.get(PATIENT_REST_API_URL);
    }

    createPatient(patient){
        return axios.post(PATIENT_REST_API_URL, patient);
    }

    getPatientById(patientId){
        return axios.get(PATIENT_REST_API_URL + '/' + patientId);
    }

}
export default new PatientServices();