import React, {Component} from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            selectedOption: ''
        };

        this.handleSelectChange.bind(this);
    }

    handleSelectChange(selectedOption) {
        this.setState({selectedOption});
        console.log(`Selected: ${selectedOption.label}`);
    }

    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;

        return (
            <div className="app">
                <form>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input type="text" className="form-control" id="name" placeholder="Введите имя"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="sirname">Фамилия</label>
                                <input type="text" className="form-control" id="sirname" placeholder="Введите фамилию"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="job">Профессия</label>
                            <Select
                                id="job"
                                name="form-field-name"
                                value={value}
                                onChange={this.handleSelectChange}
                                options={[
                                    {value: 'one', label: 'One'},
                                    {value: 'two', label: 'Two'},
                                ]}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="phone">Телефон</label>
                            <div id="phone" className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <select className="form-control" id="job">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <input type="text" className="form-control" placeholder="+7 495 123-45-67"/>
                            </div>
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
