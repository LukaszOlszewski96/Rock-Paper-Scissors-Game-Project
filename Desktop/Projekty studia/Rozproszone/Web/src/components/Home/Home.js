import React from 'react';
import './Home.css';
 
function Home() {
    return (
        <div className="home-conteiner">
             <div className="billboard-conteiner-home">
                 <div className="billboard">
                    <h1 className="billboard-text"><b>Zastanawiasz się nad</b><br/><b> poziomem swojej</b><br/><b> wiedzy?</b></h1>
                    <p className="billboard-text paragraf">Nie czekaj, wykonaj test i sprawdź</p>
                    <a href="/" className="bilboard-test-button">TEST</a>
                    <div className="billboard-conteiner2"></div>
                    <img className="image-billboard" src="image/image Myslenie.png" alt="img"></img>
                 </div>
                </div>
                <img className="robot" src="image/robot1.png" alt="robot"></img>
                <h2 className="title-h2">Kategorie</h2>
                <div className="vertical-menu1">
                <div className="horizontal-menu1">
                    <div className="box">
                    <div className="image-small-box"></div>
                    <a className="category-box1" href="/">Programowanie PLC
                    </a>
                </div>
                    <div className="box">
                    <div className="image-small-box"></div>
                    <a className="category-box2" href="/">Przemienniki Częstotliwości
                    </a>
                </div>
                <div className="box">
                    <div className="image-small-box"></div>
                    <a className="category-box3" href="/">Elektryka
                    </a>
                </div>
                </div>
                
                <div className="horizontal-menu2">
                    <div className="box">
                    <div className="image-small-box"></div>
                    <a className="category-box4" href="/">Napędy elektryczne
                    </a>
                </div>
                    <div className="box">
                    <div className="image-small-box"></div>
                    <a className="category-box5" href="/">Pneumatyka i hydraulika
                    </a>
                </div>
                <div className="box">
                    <div className="image-small-box"></div>
                    <a className="category-box6" href="/">Robotyka
                    </a>
                </div>
                </div>
                </div>
                </div>
    )
}
export default Home
 
 
 
 

