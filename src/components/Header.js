import React from 'react';

const Header = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header>
            <div className="header-container">
                <h1>Identificador de Famílias de Escrita - DOCS</h1>
                <nav>
                    <ul>
                        <li><button onClick={() => scrollToSection('introducao')}>Introdução</button></li>
                        <li><button onClick={() => scrollToSection('funcionalidades')}>Funcionalidades</button></li>
                        <li><button onClick={() => scrollToSection('como-funciona')}>Como Usar</button></li>
                        <li><button onClick={() => scrollToSection('sobre-projeto')}>Sobre o Projeto</button></li>
                        <li><button onClick={() => scrollToSection('download')}>Download</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
