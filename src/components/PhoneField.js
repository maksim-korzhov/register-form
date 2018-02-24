import React, { Component } from "react";
import InputMask from 'react-input-mask';

class PhoneField extends Component {
    render() {
        const { code } = this.props;

        return (
            <div className="form-control">
                <span className="form_phone-prefix">{ code }</span>
                <InputMask
                    placeholder={` 495 123-11-11`}
                    mask={` 999 999-99-99`}
                    required="required"
                    className="form_phone-field"
                />
            </div>
        );
    };
}

export default PhoneField;