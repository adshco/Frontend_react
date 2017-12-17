import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (

            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo">ADSH</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="dashboard">Dashboard</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Header;

