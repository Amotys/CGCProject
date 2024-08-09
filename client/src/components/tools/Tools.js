// 工具

import React from 'react';
import ToolsComponents from './tools components/ToolsComponents';
import ToolsPagintor from './ToolsPagintor';
import ClickableTool from './ClickableTool';

const Tools = ({ setCurrentPage, setActiveButton }) => {
    const buttonClick = (label) => {
        setCurrentPage(label);
    }
    const allClickableTools = Object.values(ToolsComponents).map((element, index) => (
        <ClickableTool
            imageUrl={element.imageUrl}
            text={element.text}
            title={element.title}
            buttonClick={() => buttonClick(`tools_${element.onClickLabel}`)}
            layoutReversed={index % 2 === 1}
        />
    ));

    return (
        <div className='container flex flex-col'>

            {/* 工具展示页 */}
            <div style={{
                padding: '2rem',
            }}>
                <ToolsPagintor itemsArray={allClickableTools} itemsPerPage={3} />
            </div>

        </div>
    )
}

export default Tools;