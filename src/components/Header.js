import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header className="masthead" data-history-state={this.props.location.pathname.slice(1)}>
                <b className="masthead__bg" aria-hidden="true"></b>
                <div className="group">
                    <Link to="/" className="icon-cssa-logo cssa-logo"></Link>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/departments" className="nav__link">部门</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/about" className="nav__link">关于我们</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;