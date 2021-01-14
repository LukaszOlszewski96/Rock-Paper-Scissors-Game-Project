import React from 'react';
import './Category.css';
import {db} from '../Login/googleAuth';
import {auth} from '../Login/googleAuth';

function Category() {   
//dodac funkcje dodania kursu do bazy danych wedlug id

    
   // var courseID = db.collection('courses').doc(document.getElementById("courseID-value").)
    var courseID = null;

    const addCourse = () => {
        var currentUser =  auth().currentUser.uid;
        courseID = document.getElementById("button-course").value;

    
        db.collection('user').doc(currentUser).collection('courses-user').doc(courseID).set({
            dane:  courseID
        }).then(() => {
            alert("Course has been submitted")
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="category-screen">
             <h2 id="PLC" className="title-h2">Programowanie PLC</h2>
                <div className="course-conteiner">
                    <div id="courseID-value" className="PLC-box">
                        <img className="PLC-image" src="image/PLC.png" alt="PLC-image"></img>
                        <div className="text-course-box">
                            <p className="nazwa-kursu"> Podstawy programowania sterowników PLC</p>
                            <p className="text-pod-nazwa-kursu">Stworzony z myślą o osobach, które
                                                                nie wiedzą nic na temat programowania sterowników PLC.
                                                                <br/> Zostań ekspertem już dziś! </p>
                            <button onClick={addCourse} id="button-course" value="6DtbZCDRDgAzPPCZGlET"  className="button-dodaj-kurs">Dodaj kurs</button>
                        </div>
                    </div>
                    <div className="PLC-box">
                    <iframe width="200" height="200" src="https://www.youtube.com/embed/HasegXgnxdg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="text-course-box">
                            <p className="nazwa-kursu"> Programowanie Krok po Kroku</p>
                            <p className="text-pod-nazwa-kursu">Stworzony z myślą o osobach, które
                                                                nie wiedzą nic na temat programowania sterowników PLC.
                                                                <br/> Zostań ekspertem już dziś! </p>
                            <button  onClick={addCourse} id="button-course" value="6Hxqox0zWfmyJKEmvNAhd" className="button-dodaj-kurs">Dodaj kurs</button>
                        </div>
                    </div>
                </div>
             <h2 id="Przem" className="title-h2">Przemienniki Częstotliwości</h2>
             <div className="course-conteiner">
             <div className="PLC-box">
                        <img className="PLC-image" src="image/Przemiennik.png" alt="PLC-image"></img>
                        <div className="text-course-box">
                            <p className="nazwa-kursu"> Podstawy programowania Przemienników częstotliwości</p>
                            <p className="text-pod-nazwa-kursu">Stworzony z myślą o osobach, które
                                                                nie wiedzą nic na temat programowania przemienników.
                                                                <br/> Zostań ekspertem już dziś! </p>
                            <button  onClick={addCourse} id="button-course" value="jpMVcR7L1y8G7gTOSGAs" className="button-dodaj-kurs">Dodaj kurs</button>
                        </div>
                    </div>
             </div>
             <h2 id="Elek" className="title-h2">Elektryka</h2>
             <div className="course-conteiner">
             <div className="PLC-box">
                        <img className="PLC-image" src="image/Elektryka.png" alt="PLC-image"></img>
                        <div className="text-course-box">
                            <p className="nazwa-kursu"> Podstawy Elektryki</p>
                            <p className="text-pod-nazwa-kursu">Stworzony z myślą o osobach, które
                                                                nie wiedzą nic na Elektryki.
                                                                <br/> Zostań ekspertem już dziś! </p>
                            <button id="dodajKurs" className="button-dodaj-kurs">Dodaj kurs</button>
                        </div>
                    </div>
                
             </div>
             <h2 id="Naped" className="title-h2">Napędy elektryczne</h2>
             <div className="course-conteiner">
             <div className="PLC-box">
                        <img className="PLC-image" src="image/PLC.png" alt="PLC-image"></img>
                        <div className="text-course-box">
                            <p className="nazwa-kursu"> Podstawy Napędów Elektrycznych</p>
                            <p className="text-pod-nazwa-kursu">Stworzony z myślą o osobach, które
                                                                nie wiedzą nic na temat Napędów Elektrycznych.
                                                                <br/> Zostań ekspertem już dziś! </p>
                            <button id="dodajKurs" className="button-dodaj-kurs">Dodaj kurs</button>
                        </div>
                    </div>
             </div>
             <h2 id="Pneum" className="title-h2">Pneumatyka i Hydraulika</h2>
             <div className="course-conteiner">
             <div className="PLC-box">
                        <img className="PLC-image" src="image/PLC.png" alt="PLC-image"></img>
                        <div className="text-course-box">
                            <p className="nazwa-kursu"> Podstawy programowania Pneumatyki</p>
                            <p className="text-pod-nazwa-kursu">Stworzony z myślą o osobach, które
                                                                nie wiedzą nic na temat Pneumatyki.
                                                                <br/> Zostań ekspertem już dziś! </p>
                            <button id="dodajKurs" className="button-dodaj-kurs">Dodaj kurs</button>
                        </div>
                    </div>
             </div>
             <h2 id="Robot" className="title-h2">Robotyka</h2>
             <div className="course-conteiner">
             <div className="PLC-box">
                        <img className="PLC-image" src="image/PLC.png" alt="PLC-image"></img>
                        <div className="text-course-box">
                            <p className="nazwa-kursu"> Podstawy programowania Robotów Przemysłowych</p>
                            <p className="text-pod-nazwa-kursu">Stworzony z myślą o osobach, które
                                                                nie wiedzą nic na temat programowania Robotów.
                                                                <br/> Zostań ekspertem już dziś! </p>
                            <button id="dodajKurs" className="button-dodaj-kurs">Dodaj kurs</button>
                        </div>
                    </div>
             </div>
        </div>
    )
}

export default Category
