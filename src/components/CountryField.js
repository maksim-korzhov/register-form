import React, { Component } from "react";
import Select from "react-select";

import { CountryFlag } from "./CountryFlag";
import CountryFlagOption from "./CountryFlagOption";
import PhoneField from "./PhoneField";

import bel from "../img/belarus_l.png";
import ind from "../img/british_indian_ocean_territory_l.png";
import bul from "../img/bulgaria_l.png";
import rus from "../img/russia_l.png";
import ukr from "../img/ukraine_l.png";

class CountryField extends Component {
    render() {
        const { countrySelectedOption } = this.props;
        const countryValue = countrySelectedOption && countrySelectedOption.value;
        const countryPhoneCode = countrySelectedOption && countrySelectedOption.code;

        return (
            <div>
                <label htmlFor="phone">Телефон</label>
                <div id="phone" className="input-group mb-3 form__phone">
                    <div className="input-group-prepend">
                        <Select
                            id="phone"
                            name="form-field-name"
                            value={ countryValue }
                            onChange={ this.props.handleCountrySelectChange }
                            valueComponent={ CountryFlag }
                            optionComponent={ CountryFlagOption }
                            options={[
                                {value: "bel", pic: bel, code: "+8"},
                                {value: "bul", pic: bul, code: "+11"},
                                {value: "ind", pic: ind, code: "+2"},
                                {value: "rus", pic: rus, code: "+7"},
                                {value: "ukr", pic: ukr, code: "+38"}
                            ]}
                        />
                    </div>
                    <PhoneField
                        code={ countryPhoneCode }
                    />
                </div>
            </div>
        );
    };
}

export default CountryField;