// 角色页面显示的角色列表
import React from 'react';
import Paginator from '../Paginator';
import '../../App.css';
import '../../index.css';

const toolsPaginatorStyles = {
    mainContainerStyle: {
        borderRadius: '2rem',
        padding: '0.5rem',
        backgroundColor: 'rgba(244, 255, 150, 0.7)',
        backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, #b0e13d 50%, transparent 80%)',
        backgroundSize: '100% 0.3rem', /* 控制虚线的宽度和高度 */
        backgroundRepeat: 'repeat-y',
        border: '0.3rem solid #43880f',
    },
    containerStyle: {
        padding: '0rem',
        width: '25%',
    },
    elementStyle: {
        padding: '0.5rem',
    },
    listButtonStyle: {},
}

const CharactersPaginator = ({ itemsArray, itemsPerPage }) => {
    return (
        <Paginator
            pageKeyName={'toolspagintor'}
            itemsArray={itemsArray}
            itemsPerPage={itemsPerPage}
            mainContainerStyle={toolsPaginatorStyles.mainContainerStyle}
            containerStyle={toolsPaginatorStyles.containerStyle}
            elementStyle={toolsPaginatorStyles.elementStyle}
            listButtonStyle={toolsPaginatorStyles.listButtonStyle}
            mainContainerFlexDirection={'flex flex-row flex-wrap'}
        />
    );
}

export default CharactersPaginator;