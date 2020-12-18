import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link itemProp="url" to="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link itemProp="url" to="/dashboard">
                        DASHBOARD
                    </Link>
                </li>
                <li>
                    <Link itemProp="url" to="/login">
                        LOGIN
                    </Link>
                </li>
                <li>
                    <Link itemProp="url" to="/signup">
                        SIGN UP
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
