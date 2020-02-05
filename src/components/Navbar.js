import React from 'react';
import { Link, NavLink } from 'react-router-dom';


//href recharge la page affichée du serveur

/*Si on veut éviter que sa charge a chaque fois
On remplace href par link 'REACT ALORS INTERCEPTE LA REQUETE ET RENVOIE
LE COMPONENT VALIDE*/

/*NavLink est pareil que Link sauf qu'il ajoute une classe "active" 
CAPEUT ETRE INTERESSANT CHI MERAT*/

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <a className="brand-logo left">:)</a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
