// 空列表显示用
import React from 'react';
import Paginator from './Paginator';
import '../App.css';
import '../index.css';

const toolsPagintorStyles = {
    mainContainerStyle: {
        borderRadius: '2rem',
        padding: '0.5rem',
        backgroundColor: 'rgba(244, 255, 139, 0.9)',
        backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, #b0e13d 50%, transparent 80%)',
        backgroundSize: '100% 0.3rem', /* 控制虚线的宽度和高度 */
        backgroundRepeat: 'repeat-y',
        border: '0.3rem solid #43880f',
    },
    containerStyle: {
        padding: '0rem',
        width: '100%',
    },
    elementStyle: {
        fontSize: '1.5rem',
        padding: '0.5rem',
    },
    listButtonStyle: {},
}

const CharactersPagintor = ({ itemsArray, itemsPerPage }) => {
    return (
        <Paginator
            pageKeyName={'toolspagintor'}
            itemsArray={itemsArray}
            itemsPerPage={itemsPerPage}
            mainContainerStyle={toolsPagintorStyles.mainContainerStyle}
            containerStyle={toolsPagintorStyles.containerStyle}
            elementStyle={toolsPagintorStyles.elementStyle}
            listButtonStyle={toolsPagintorStyles.listButtonStyle}
            mainContainerFlexDirection={'flex flex-row'}
        />
    );
}

export default CharactersPagintor;