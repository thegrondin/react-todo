import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/user">user</Link>
            <Link to="/">todo</Link>
        </div>
    );
}

export default Header;