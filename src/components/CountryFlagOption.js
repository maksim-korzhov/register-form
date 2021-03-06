import React, {Component} from "react";

class CountryFlagOption extends Component {
    constructor(props) {
        super(props);

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseDown (event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSelect(this.props.option, event);
    }

    handleMouseEnter (event) {
        this.props.onFocus(this.props.option, event);
    }

    handleMouseMove (event) {
        if (this.props.isFocused) return;
        this.props.onFocus(this.props.option, event);
    }

    render() {
        return (
            <div className={ this.props.className }
                 onMouseDown={ this.handleMouseDown }
                 onMouseEnter={ this.handleMouseEnter }
                 onMouseMove={ this.handleMouseMove }
            >
                <span>
                    <img style={{ width: "25px", height: "15px" }} src={ this.props.option.pic } alt=""/>
                </span>
            </div>
        );
    }
}

export default CountryFlagOption;