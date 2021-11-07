import React, {Component} from 'react'
import PatientServices from "../services/PatientServices";
import {Link} from "react-router-dom";

class CreatePatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '_add',
            name: '',
            passport: '',
            birthday: '',
            male: false
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePassportHandler = this.changePassportHandler.bind(this);
        this.changeBirthdayHandler = this.changeBirthdayHandler.bind(this)
        this.changeSexHandler = this.changeSexHandler.bind(this)

        this.savePatient = this.savePatient.bind(this);
    }

    componentDidMount() {
    }

    savePatient = (e) => {
        e.preventDefault();
        let patient = {name: this.state.name, passport: this.state.passport, birthday: this.state.birthday, male: this.state.male};
        console.log('patient => ' + JSON.stringify(patient));

        PatientServices.createPatient(patient).then(res => {
        });
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changePassportHandler = (event) => {
        this.setState({passport: event.target.value});
    }

    changeBirthdayHandler = (event) => {
        this.setState({birthday: event.target.value});
    }

    changeSexHandler = (event) => {
        this.setState({male: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Patient</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Passport </label>
                                        <input placeholder="Passport" name="passport" className="form-control"
                                               value={this.state.passport} onChange={this.changePassportHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Birthday: </label>
                                        <input type="date" placeholder="Birthday" name="birthday"
                                               className="form-control"
                                               value={this.state.birthday} onChange={this.changeBirthdayHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="option1" name="option1"
                                                   className="custom-control-input"
                                                   value={true}
                                                   checked={this.state.male}
                                                   onChange={this.changeSexHandler}/>
                                                <label className="custom-control-label" htmlFor="option1">
                                                    пол мужской</label>
                                        </div>

                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="option2" name="option2"
                                                   className="custom-control-input"
                                                   value={false}
                                                   checked={!this.state.male}
                                                   onChange={this.changeSexHandler}/>
                                                <label className="custom-control-label" htmlFor="option2">
                                                    пол женский</label>
                                        </div>
                                    </div>

                                    <Link to={'/patients'}>
                                        <button className="btn btn-success" onClick={this.savePatient}>
                                            Сохранить
                                        </button>
                                    </Link>
                                    <Link to={'/patients'}>
                                        <button className="btn btn-danger" style={{marginLeft: "10px"}}>
                                            Закрыть
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePatientComponent