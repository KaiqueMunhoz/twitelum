import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navMenu.css';

class NavMenu extends Component {

    render() {
        return (
            <nav className="navMenu">
                <ul className="navMenu__list">
                <li className="navMenu__item">
                    <a className="navMenu__link">
                        Welcome: <br />
                        <strong>{ this.props.user }</strong>
                    </a>
                </li>
                <li className="navMenu__item">
                    <a className="navMenu__link" href="">Home</a>
                </li>
                <li className="navMenu__item">
                    <a className="navMenu__link">Hashtags</a>
                </li>
                <li className="navMenu__item">
                    <Link className="navMenu__link" onClick={() => localStorage.removeItem('TOKEN')} to={"/login"}>Logout</Link>
                </li>
                </ul>
            </nav>
        )
    }
}

export default NavMenu;