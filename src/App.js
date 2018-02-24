import React, {Component} from "react";

import CountryField from "./components/CountryField";
import JobField from "./components/JobField";

import "react-select/dist/react-select.css";
import "./App.css";

import bel from "./img/belarus_l.png";

class App extends Component {
    constructor() {
        super();

        this.state = {
            jobSelectedOption: "",
            countrySelectedOption: { value: "bel", pic: bel, code: "+8" }
        };

        this.handleJobSelectChange = this.handleJobSelectChange.bind(this);
        this.handleCountrySelectChange = this.handleCountrySelectChange.bind(this);
    }

    handleJobSelectChange( jobSelectedOption ) {
        this.setState({ jobSelectedOption });
    }

    handleCountrySelectChange( countrySelectedOption ) {
        this.setState({ countrySelectedOption });
    }

    render() {
        return (
            <div className="app">
                <form>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input type="text" className="form-control form__name" id="name" placeholder="Введите имя"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="sirname">Фамилия</label>
                                <input type="text" className="form-control form__sirname" id="sirname" placeholder="Введите фамилию"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <JobField
                                jobSelectedOption={ this.state.jobSelectedOption }
                                handleJobSelectChange={ this.handleJobSelectChange }
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <CountryField
                                countrySelectedOption={ this.state.countrySelectedOption }
                                handleCountrySelectChange={ this.handleCountrySelectChange }
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
