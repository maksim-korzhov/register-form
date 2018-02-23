import React, { Component } from "react";
import Cleave from "cleave.js/react";

class PhoneField extends Component {
    render() {
        const { code } = this.props;

        return (
            <Cleave placeholder={`${ code } 495 456-11-11`}
                    options={{
                        //prefix: code,
                        delimiters: [" ", " ", "-", "-"],
                        blocks: [2, 3, 3, 2, 2],
                        numericOnly: true
                    }}
                    className="form-control"
            />
        );
    };
}

export default PhoneField;