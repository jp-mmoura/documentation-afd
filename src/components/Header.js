import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [activeSection, setActiveSection] = useState('introducao');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const headerOffset = 150;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'introducao', label: 'Introdução' },
        { id: 'funcionalidades', label: 'Funcionalidades' },
        { id: 'como-funciona', label: 'Como Usar' },
        { id: 'sobre-projeto', label: 'Sobre' },
        { id: 'download', label: 'Download' }
    ];

    return (
        <header>
            <div className="header-container">
                <h1>Identificador de Famílias de Escrita - DOCS</h1>
                <button 
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <nav className={isMenuOpen ? 'nav-open' : ''}>
                    <ul>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <button 
                                    onClick={() => scrollToSection(item.id)}
                                    style={{
                                        background: activeSection === item.id ? 'var(--accent-color)' : 'transparent',
                                        color: activeSection === item.id ? 'white' : 'var(--text-primary)'
                                    }}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
