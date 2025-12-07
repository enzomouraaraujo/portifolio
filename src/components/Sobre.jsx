import { useState } from "react";
import Card from './Card'

function Sobre() {
    return (
        <div>
            <section className="d-flex justify-content-center Sobre">
                <div className="container">
                    <h4 className="titlle-sobre d-flex">
                        <span>Um pouco sobre mim</span>
                    </h4>
                    <h1 className="">Desnvolvedor Front-End</h1>
                    <Card />
                </div>
                <div className="container">
                    <p>
                        Meu nome é <strong>Enzo Moura</strong>.Sou desenvolvedor front-end apaixonado pelo que faço e sempre em busca de evoluir.Ainda como dev junior,estou em constante aprendizado para aprimorar minhas habilidades e entregar experiências cada vez melhores.
                    </p>
                    <div className="stats-container">
                        <div className="stat-box">
                            <h2>2<span>+</span></h2>
                            <p>Anos de experiência</p>
                        </div>
                        <div className="stat-box">
                            <h2>49<span>k+</span></h2>
                            <p>Xicaras de café</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sobre; 