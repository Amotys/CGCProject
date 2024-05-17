// 工具展示
import React from "react";
import ToolsComponents from './ToolsComponents';
import ToolView from './ToolView';

const ToolsHandler = ({ setCurrentPage, name }) => {
    const componentObject = Object.values(ToolsComponents).filter((toolObject) => (toolObject.title === name))[0];
    return <ToolView componentObject={componentObject} setCurrentPage={setCurrentPage} />;
};

export default ToolsHandler;