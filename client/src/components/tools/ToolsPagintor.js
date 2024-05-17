// 工具页面显示的工具列表
import React from 'react';
import Paginator from '../Paginator';
import '../../App.css';
import '../../index.css';

const toolsPagintorStyles = {
    mainContainerStyle: {
        borderRadius: '2rem',
        padding: '1rem',
        backgroundColor: 'rgba(244, 255, 150, 0.7)',
        backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, #b0e13d 50%, transparent 80%)',
        backgroundSize: '100% 0.3rem', /* 控制虚线的宽度和高度 */
        backgroundRepeat: 'repeat-y',
        border: '0.3rem solid #43880f',
    },
    containerStyle: {
        padding: '0rem',
    },
    elementStyle: {
        padding: '2.5rem',
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
    },
    listButtonStyle: {},
}

const ToolsPagintor = ({ itemsArray, itemsPerPage }) => {
    return (
        <Paginator
            pageKeyName={'toolspagintor'}
            itemsArray={itemsArray}
            itemsPerPage={itemsPerPage}
            mainContainerStyle={toolsPagintorStyles.mainContainerStyle}
            containerStyle={toolsPagintorStyles.containerStyle}
            elementStyle={toolsPagintorStyles.elementStyle}
            listButtonStyle={toolsPagintorStyles.listButtonStyle}
        />
    );
}

export default ToolsPagintor;