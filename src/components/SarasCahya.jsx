import React, { useState } from 'react';
const SarasCahya = () => {
    const [is_dark, setIsDark] = useState(false);

    const containerStyle = {
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: is_dark ? "#000" : "#1378f0",
    };

    const buttonStyle = {
        padding: "8px",
        background: "white",
        borderRadius: "8px",
    }

    function toogleMode() {
        setIsDark(!is_dark);
    }

    return (<div style={containerStyle}>
        <h2>Saraswati Cahyati</h2>
        <small>I'm Female Developer</small>
        <hr></hr>
        <button style={buttonStyle} onClick={toogleMode}>{
            is_dark ? "github.com/sarascahya" : "facebook.com/saraswati.cahyati" 
        }</button>
    </div>)
}

export default SarasCahya;