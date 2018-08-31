import React, {PureComponent,Fragment} from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends PureComponent {

    render(){
        return(
            <Fragment>
                <div className="btn-group" role="group">
                    <NavLink className="btn btn-primary" to="/lottomax">Lotto Max</NavLink>
                    <NavLink className="btn btn-primary" to="/lotto649">6/49</NavLink>
                </div>
            </Fragment>
        );
    }

}

export default NavBar;