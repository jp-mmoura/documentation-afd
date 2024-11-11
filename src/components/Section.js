import React from 'react';
import { FaBook, FaCogs, FaQuestionCircle, FaInfoCircle, FaDownload } from 'react-icons/fa';

const getIcon = (id) => {
    switch(id) {
        case 'introducao':
            return <FaBook />;
        case 'funcionalidades':
            return <FaCogs />;
        case 'como-funciona':
            return <FaQuestionCircle />;
        case 'sobre-projeto':
            return <FaInfoCircle />;
        case 'download':
            return <FaDownload />;
        default:
            return null;
    }
};

const Section = ({ id, title, content }) => (
    <section id={id}>
        <div className="section-icon">
            {getIcon(id)}
        </div>
        <h2>{title}</h2>
        {typeof content === 'string' ? (
            <p>{content}</p>
        ) : (
            content
        )}
    </section>
);

export default Section;
