import React from "react";

export const CountryFlag = (props) => {
    return (
        <div className="Select-value">
				<span className="Select-value-label">
                    <div>
                        <img style={{ width: "30px", height: "15px" }} src={ props.value.pic } alt=""/>
                    </div>
				</span>
        </div>
    );
};