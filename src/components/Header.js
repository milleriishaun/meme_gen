import React from 'react';

function Header(){
    const styleText= {
        fontFamily: "Helvetica",
        fontWeight: "bold",
        fontSize: "72px"
    }
    return (
        <div className="header">
            <h1 style={styleText}>Meme Generator</h1>
        </div>
    )
}

export default Header;