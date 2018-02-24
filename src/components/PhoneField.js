import React, { Component } from "react";
import InputMask from 'react-input-mask';

class PhoneField extends Component {
    render() {
        const { code } = this.props;

        return (
            <InputMask
                placeholder={`${ code } 495 123-11-11`}
                mask={`${ code } 999 999-99-99`}
                className="form-control"
            />
        );
    };
}

export default PhoneField;