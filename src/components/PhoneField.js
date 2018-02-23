import React, { Component } from "react";
import Cleave from "cleave.js/react";
import Select from "react-select";

import { CountryFlag } from "./CountryFlag";
import CountryFlagOption from "./CountryFlagOption";

import bel from "../img/belarus_l.png";
import ind from "../img/british_indian_ocean_territory_l.png";
import bul from "../img/bulgaria_l.png";
import rus from "../img/russia_l.png";
import ukr from "../img/ukraine_l.png";

class PhoneField extends Component {
    render() {
        const { countrySelectedOption } = this.props;
        const countryValue = countrySelectedOption && countrySelectedOption.value;

        return (
            <div>
                <label htmlFor="phone">Телефон</label>
                <div id="phone" className="input-group mb-3 form__phone">
                    <div className="input-group-prepend">
                        <Select
                            id="phone"
                            name="form-field-name"
                            value={ countryValue }
                            onChange={ this.handleCountrySelectChange }
                            valueComponent={ CountryFlag }
                            optionComponent={ CountryFlagOption }
                            options={[
                                {value: "bel", pic: bel},
                                {value: "bul", pic: bul},
                                {value: "ind", pic: ind},
                                {value: "rus", pic: rus},
                                {value: "ukr", pic: ukr}
                            ]}
                        />

                    </div>
                    <Cleave placeholder="+7 495 456-11-11"
                            options={{
                                prefix: "+7",
                                delimiters: [" ", " ", "-", "-"],
                                blocks: [2, 3, 3, 2, 2],
                                numericOnly: true
                            }}
                            className="form-control"
                    />
                </div>
            </div>
        );
    };
}

export default PhoneField;