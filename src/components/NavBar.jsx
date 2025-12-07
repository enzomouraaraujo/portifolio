import { useState } from "react";
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <header>
                <nav className="navbar fixed-bottom">
                    <div>minha logo</div>

                    <ul className="nav-links">
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">GitHub</a></li>
                    </ul>
                    <div>
                        <button className="btn btn-primary">Entre Em Contato</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;