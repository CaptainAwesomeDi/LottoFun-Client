import React, {Component,Fragment} from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Fragment>
                <NavLink to="/lottomax">Lotto Max</NavLink>
                <NavLink to="/lotto649">6/49</NavLink>
            </Fragment>
        );
    }

}

export default NavBar;