// 工具展示页面
import React from "react";

const ToolView = ({ componentObject, setCurrentPage }) => {
    const Component = componentObject.self;
    return (
        <div className='container' style={{
            padding: '2rem',
        }}>
            <div style={{
                backgroundColor: 'rgba(225,240,135,0.7)',
                padding: '2rem',
                borderRadius: '3rem',
                border: '0.3rem solid #485812',
            }}>
        <Component
            setCurrentPage={setCurrentPage}
            imageUrl={componentObject.imageUrl}
            title={componentObject.title}
            text={componentObject.text}
        />
        </div>
        </div>
    );
}

export default ToolView;