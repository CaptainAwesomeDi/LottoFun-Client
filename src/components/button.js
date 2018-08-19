import React, {PureComponent} from 'react';

class Button extends PureComponent {
    constructor (props) {
        super(props);
    }
    render(){
        const onClick = this.props.onClick;
        const text = this.props.text;
        return (<button className="btn btn-primary" onClick={onClick} href={text}>{text}</button>);
    }
}

export default Button