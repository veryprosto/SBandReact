import React from 'react'
import moment from 'moment'
import PatientServices from "../services/PatientServices";
import {Link} from 'react-router-dom';


class PatientComponents extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            patients: [],
            filtername: '',
            filterpassport: ''
        }
    }

    filterHandler = (event) => {
        this.setState({filtername: event.target.value});
    }

    filterPatients(filtername, filterpassport) {
        if (filterpassport === null) {
            alert("sadfasfsdfsf")
        }
        this.setState({patients: this.state.patients.filter(patient => patient.name === filtername && patient.passport === filterpassport)});
    }

    componentDidMount() {
        if (this.state.filtername===""){
            PatientServices.getPatients().then((Response) => {
                this.setState({patients: Response.data})
            });
        } else{
            this.setState({patients: this.state.patients.filter(patient => patient.name === this.state.filtername)});
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group row mt-3 ms-5">
                        <label className="col-sm-1 col-form-label">ФИО:</label>
                        <div className="col-sm-4">
                            <input name="filtername" className="form-control"
                                   onChange={this.filterHandler}
                                   placeholder="Фамилия Имя Отчество"/>
                        </div>
                    </div>

                    <div className="form-group row ms-5">
                        <label className="col-sm-1 col-form-label">Паспорт:</label>
                        <div className="col-sm-4">
                            <input type="text" name="filterpassport" className="form-control"
                                   onChange={this.filterHandler}
                                   placeholder="Серия и номер паспорта"/>
                        </div>
                    </div>

                    <button className="btn btn-primary ms-5"
                            onClick={() => this.filterPatients(this.state.filtername, this.state.f)}>Поиск
                    </button>

                </form>

                <h2 className="text-center">Список пациентов</h2>
                <div className="row">
                    <Link to={'/add-patient/_add'}>
                        <button className="btn btn-primary">
                            Добавить пациента
                        </button>
                    </Link>
                </div>

                <div className="row mt-5">
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Паспорт</th>
                            <th>Дата рождения</th>
                            <th>Пол</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.patients.map(
                                patient =>
                                    <tr key={patient.id}>
                                        <td>{patient.name}</td>
                                        <td>{patient.passport}</td>
                                        <td>{moment(patient.birthday).format("DD.MM.yyyy")}</td>
                                        <td>
                                            {patient.male ? 'мужской' : 'женский'}
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default PatientComponents