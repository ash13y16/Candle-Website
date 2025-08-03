import './styles.css';
import {Link} from "react-router-dom";
import React from 'react';

function Header() {
    return (
        <div className="Header">
            <div>
                <Link to="/">
                    <h2 style={{textAlign: 'left', width: '100px'}}>Candles</h2>
                </Link>
            </div>
            <div className={'center'}>
                <h1>Ash & Flame</h1>
            </div>
            <div>
                <Link to="/order">
                    <h2 style={{textAlign: 'right', width: '100px'}}>Order</h2>
                </Link>
            </div>
        </div>
    );
}

export default Header;
