import React from "react";

const iconStyleDouble = {
    borderRadius: '2rem',
    border: '0.25rem solid darkgreen',
    width: '40%',
}

const iconStyleSingle = {
    borderRadius: '2rem',
    border: '0.25rem solid darkgreen',
    width: '20%',
}

const CGBasicInfoPartRaceIntro = ({ imageUrls, introInfos, data }) => {
    return (
        <div className="container flex flex-col">
            <div style={{
                padding: '2rem',
                fontSize: '2.5rem',
                fontFamily: 'KaiTi',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '0rem',
            }}>{data['racePart']}</div>
            {
                <div className="container">
                    <div className="container" style={{
                        padding: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <img src={imageUrls[0]} alt={`${data['racePart']}`} style={iconStyleSingle}></img>
                    </div>
                </div>
            }
            <div className="container" style={{
                borderBottom: '0.01rem solid darkgreen',
                paddingBottom: '2rem',
            }}>
                <table style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <tbody>
                        {introInfos.map((element, index) => (
                            <tr key={`character generator basic info part intro ${index}`}>
                                <td colSpan={2}>{element}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CGBasicInfoPartRaceIntro;