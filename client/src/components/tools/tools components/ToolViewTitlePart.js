// 工具页面的标题部分
import React from 'react';

const ToolViewTitlePart = ({ imageUrl, title, text }) => {
    return (
        // 图片、标题和描述
        <div className='container flex flex-row' style={{
            paddingBottom: '2rem',
            borderBottom: '0.02rem solid green',
        }}>

            <div style={{
                width: '50%',
                justifyContent: 'center',
                display: 'flex',
            }}>
                <img src={imageUrl} alt={title} style={{
                    width: '75%',
                    borderRadius: '4rem',
                }} />
            </div>
            <div style={{
                width: '40%',
                color: '#08331b',
            }}>
                <div style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    fontFamily: 'KaiTi',
                    fontWeight: 'bold',
                    paddingBottom: '1rem',
                }} >{title}</div>
                <div style={{
                    textAlign: 'center',
                    fontFamily: 'KaiTi',
                    fontSize: '1.25rem',
                }} >{text}</div>
            </div>
        </div >
    );
}

export default ToolViewTitlePart;