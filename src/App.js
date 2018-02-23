import React, {Component} from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import PhoneField from "./components/PhoneField";

import "./App.css";

import bel from "./img/belarus_l.png";

class App extends Component {
    constructor() {
        super();

        this.state = {
            jobSelectedOption: "",
            countrySelectedOption: { value: "bel", pic: bel }
        };

        this.handleJobSelectChange = this.handleJobSelectChange.bind(this);
        this.handleCountrySelectChange = this.handleCountrySelectChange.bind(this);
    }

    handleJobSelectChange(jobSelectedOption) {
        this.setState({jobSelectedOption});
    }

    handleCountrySelectChange(countrySelectedOption) {
        this.setState({ countrySelectedOption });
    }

    render() {
        const { jobSelectedOption } = this.state;
        const jobValue = jobSelectedOption && jobSelectedOption.value;

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
                            <div className="form-group">
                                <label htmlFor="job">Профессия</label>
                                <Select
                                    id="job"
                                    className="form__job"
                                    name="form-field-name"
                                    placeholder="Выберите профессию"
                                    value={jobValue}
                                    onChange={this.handleJobSelectChange}
                                    options={[
                                        {value: "парикмахер", label: "Парикмахер"},
                                        {value: "парикмахер-визажист", label: "Парикмахер-визажист"},
                                        {value: "веб-программист", label: "Веб-программист"},
                                        {value: "btl-менеджер", label: "BTL-менеджер"},
                                        {value: "erp-программист", label: "ERP-программист"},
                                        {value: "html-верстальщик", label: "HTML-верстальщик"},
                                        {value: "pr-специалист", label: "PR-специалист"},
                                        {value: "seo-специалист", label: "SEO-специалист"},
                                        {value: "web-дизайнер", label: "Web-дизайнер"},
                                        {value: "авиадиспетчер", label: "Авиадиспетчер"},
                                        {value: "авиаиненер", label: "Авиаиненер"},
                                        {value: "автомеханик", label: "Автомеханик"},
                                        {value: "автослесарь", label: "Автослесарь"},
                                        {value: "агент по туризму", label: "Агент по туризму"},
                                        {value: "грузчик", label: "Грузчик"},
                                        {value: "брокер", label: "Брокер"},
                                        {value: "бухгалтер", label: "Бухгалтер"},
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <PhoneField
                                countrySelectedOption={ this.state.countrySelectedOption }
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
