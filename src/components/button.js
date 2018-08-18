import React, {PureComponent} from 'react';

class Button extends PureComponent {
    constructor (props) {
        super(props);
    }
    render(){
        const onClick = this.props.onClick;
        const text = this.props.text;
        return (<a onClick={onClick} href={text}>{text}</a>);
    }
}

export default Button