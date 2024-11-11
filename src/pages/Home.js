import React from 'react';
import Header from '../components/Header'; 
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../styles/Documentation.css';
import { FaDownload, FaGithub, FaWindows, FaLinux, FaApple } from 'react-icons/fa';

const Home = () => (
    <>
        <Header />
        
        <Section
            id="introducao"
            title="Introdução"
            content="O simulador de AFD (Autômato Finito Determinístico) desenvolvido tem como objetivo a identificação de cadeias de caracteres e a determinação de sua categoria, tanto em linguagens naturais como em linguagens de programação. O sistema é capaz de analisar e classificar textos, identificando a família alfabética das linguagens naturais (como cirílico, latino, árabe, entre outros) e a linguagem de programação de trechos de código (como Java, Python, JavaScript, Assembly). Este projeto foi criado utilizando a linguagem Python e a biblioteca ttkbootstrap para a interface gráfica."
        />

        <Section
            id="funcionalidades"
            title="Funcionalidades"
            content={
                <ul>
                    <li><strong>Identificação de Linguagens Naturais:</strong> O AFD é capaz de analisar cadeias de caracteres e determinar a qual família alfabética a palavra pertence, incluindo Latino, Cirílico, CJK (Chinês, Japonês, Coreano), Árabe e Grego.</li>
                    <li><strong>Identificação de Linguagens de Programação:</strong> O AFD também é projetado para identificar a qual linguagem de programação o trecho de códigos pertence, reconhecendo Assembly, Java, JavaScript e Python.</li>
                </ul>
            }
        />
        
        <Section
            id="como-funciona"
            title="Como Funciona"
            content={
                <>
                    <h4>1. Entrada de Dados</h4>
                    <p>O usuário pode inserir uma cadeia de caracteres ou um trecho de código na interface do sistema. O AFD então processa essa entrada e faz a classificação com base nas regras definidas para cada tipo de análise (alfabético ou código).</p>
                    
                    <h4>2. Processamento da Cadeia</h4>
                    <p>O autômato percorre a cadeia de caracteres, passando por seus estados de acordo com o conjunto de regras que foi configurado para cada tipo de análise (alfabético ou código). O sistema utiliza uma tabela de transições que define como o autômato deve se mover de estado para estado até chegar a um estado final, determinando assim a classe ou tipo da cadeia de caracteres.</p>
                    
                    <h4>3. Saída do Sistema</h4>
                    <p>O sistema retorna para o usuário a classificação da cadeia inserida, indicando se é uma palavra de uma determinada linguagem natural ou se o trecho de código pertence a uma linguagem de programação específica.</p>
                </>
            }
        />
        <Section
            id="sobre-projeto"
            title="Sobre o Projeto"
            content={
                <p>
                    O Identificador de Famílias de Escrita é um AFD desenvolvido para a disciplina de Linguagens Formais e Autômatos do Sexto Período de Engenharia de Computação da UNIFIPMoc, desenvolvido pelos alunos: João Pedro Machado Moura, Anthony Sá Reis, João Paulo Maia Nobre Aguiar e Brenno Santhiago Pimentel Alves. O objetivo dele é demonstrar o funcionamento de um AFD e explorar suas capacidades e limitações, assim como prover um sistema útil para validação de cadeias de caracteres.
                </p>
            }
        />

        <Section
            id="download"
            title="Faça o Download do nosso AFD!"
            content={
                <div className="download-section">
                    <h4>Download e Instalação</h4>
                    
                    <div className="windows-download">
                        <h5><FaWindows /> Windows</h5>
                        <p>Baixe o executável diretamente:</p>
                        <a href="/identificador_gui.exe" download>
                            <button className="github-btn">
                                <FaDownload /> Baixar para Windows
                            </button>
                        </a>
                    </div>

                    <div className="other-platforms">
                        <h5><FaLinux /> Linux & <FaApple /> macOS</h5>
                        <p>Para Linux e macOS, você pode executar o projeto seguindo as instruções no nosso repositório:</p>
                        <a 
                            href="https://github.com/jp-mmoura/afd_linguagensFormaisEAutomatos#readme" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <button className="github-btn">
                                <FaGithub /> Ver no GitHub
                            </button>
                        </a>
                    </div>
                </div>
            }
        />

        <Footer />
    </>
);

export default Home;
