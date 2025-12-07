import { useState } from 'react';

function Home() {
    return (
        <div>
            <section className='home'>
                <div className='home-div container'>
                    <div>
                        <img className='img-home' src="https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/07/053-imagem-post-alt.png" alt="" />
                    </div>
                </div>
                <div className='home-div container'>
                    <h1>Desenvolvedor</h1>
                    <h1>Front-End</h1>
                    <p></p>
                    <a href="" className='b-curriculo'>Baixar Curriculo</a>
                </div>
            </section>
        </div>
    );
}

export default Home;