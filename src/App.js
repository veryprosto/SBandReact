import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import PatientComponents from "./components/PatientComponents";
import CreatePatientComponent from "./components/CreatePatientComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<PatientComponents/>}/>
                        <Route path="/patients" element={<PatientComponents/>}/>
                  {/*      <Route path="/patients/:filtername" element={<PatientComponents/>}/>*/}
                        <Route path="/add-patient/:id" element={<CreatePatientComponent/>}/>
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;