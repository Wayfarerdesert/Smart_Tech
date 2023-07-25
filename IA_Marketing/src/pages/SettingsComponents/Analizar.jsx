// import React from 'react';
import React, { useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import './Astyle.css'; 


const Analizar = () => {

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    useEffect(() => {
    const AnalyzeButton = () => {
        
    setLoading(true);
    setStatusMessage("Leyendo...");

    setTimeout(() => {
        setStatusMessage("Analizando...");
    }, 1000);

    setTimeout(() => {
        setStatusMessage("Finalizado correctamente.");
        setLoading(false);
    }, 5000);
};
    AnalyzeButton();
    
    const script = document.createElement('script');
    script.src = 'Ascript.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
    }, []);

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'Ascript.js';
//         script.defer = true;
//         document.body.appendChild(script);
    
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);
// };

// Invocamos la función AnalyzeButton para que se ejecute cuando el componente se monta
    // useEffect(() => {
    //     AnalyzeButton();
    // }, []);


return (

    <>

    <div className="Analizar">

        <div id="container">
            <button className="btn-upload" id="btn_upload">
                <span>ANALIZAR</span>
                <div className="progress"></div>
                <div className="check">
                    <span></span>
                    <span></span>
                </div>
            </button>
            {/* <script src="Ascript.js" defer></script> */}
        </div>

    </div>
    </>

);
};

export default Analizar;