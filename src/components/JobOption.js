import React, {Component} from "react";

class JobOption extends Component {
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

    highlighted (str, input = "") {
        let newStr = str;

        if( input.length > 0 ) {
            const reg = new RegExp(`(${input})`, "gi");
            newStr = str.replace(reg, "<strong>$1</strong>")
        }

        return newStr;
    }

    render() {
        const { inputValue } = this.props;
        const label = this.highlighted(this.props.option.label, inputValue);

        return (
            <div className={ this.props.className }
                 onMouseDown={ this.handleMouseDown }
                 onMouseEnter={ this.handleMouseEnter }
                 onMouseMove={ this.handleMouseMove }
            >
                <div dangerouslySetInnerHTML={{ __html: label }} />
            </div>
        );
    }
}

export default JobOption;