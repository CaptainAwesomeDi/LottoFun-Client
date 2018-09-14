import React, { PureComponent, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends PureComponent {
	render() {
		return (
			<Fragment>
				<nav className="navbar navbar-dark bg-dark sticky-top">
							<NavLink className="btn nav-item nav-link" to="/lottomax">
								Lotto Max
							</NavLink>
							<NavLink className="btn nav-item nav-link" to="/lotto649">
								6/49
							</NavLink>

				</nav>
			</Fragment>
		);
	}
}

export default NavBar;
