// 翻页器
import React, { useState, useEffect } from 'react';

const pageButtonMinWidth = '2%'

const paginatorSize = 7 // 必须是奇数！

const Paginator = ({
    pageKeyName,
    itemsArray,
    itemsPerPage,
    mainContainerStyle,
    containerStyle,
    elementStyle,
    listButtonStyle,
    mainContainerFlexDirection,
}) => {
    const totalItemsCount = itemsArray.length;
    const totalPages = Math.ceil(totalItemsCount / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageItems, setPageItems] = useState([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalItemsCount);
        setPageItems(itemsArray.slice(startIndex, endIndex));
    }, [currentPage, itemsPerPage, itemsArray]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //const itemClick = (label) => {}

    return (
        <div className='container'>
            {/* 显示当前页的对象 */}
            <div className={`container ${mainContainerFlexDirection}`} style={mainContainerStyle}>
                {pageItems.map((item, index) => (
                    <div key={`${pageKeyName} + ${index}`} style={containerStyle}>
                        <div style={elementStyle}>{item}</div>
                    </div>
                ))}
            </div>

            {/* 显示页码 */}
            <div style={{
                paddingTop: '1rem',
            }}>
                <div style={{
                    paddingTop: '0.25rem',
                    paddingBottom: '0.25rem',
                    borderTop: '0.1rem solid darkgreen',
                    borderBottom: '0.1rem solid darkgreen',
                    background: `linear-gradient(to right, transparent 0%, #c5e09b 25%, #c5e09b 75%, transparent 100%)`,
                    textAlign: 'center',
                    fontSize: '1.25rem',
                    color: 'darkgreen',
                }}>
                    <button style={{
                        minWidth: pageButtonMinWidth,
                    }} onClick={() => handleClick(1)}>
                        {'<'}
                    </button>
                    {/* {currentPage - Math.floor(paginatorSize / 2) >= 2 ? <span>...</span> : <></>} */}
                    {
                        (currentPage >= Math.ceil(paginatorSize / 2) && currentPage <= totalPages - Math.ceil(paginatorSize / 2) &&
                            currentPage - Math.floor(paginatorSize / 2) >= 2) ||
                            (currentPage > totalPages - Math.ceil(paginatorSize / 2) && totalPages > paginatorSize) ? <span>...</span> : <></>
                    }
                    {Array.from({ length: totalPages }, (_, index) => (
                        (currentPage >= Math.ceil(paginatorSize / 2) && currentPage <= totalPages - Math.ceil(paginatorSize / 2) &&
                            index + 1 >= currentPage - Math.floor(paginatorSize / 2) && index + 1 <= currentPage + Math.floor(paginatorSize / 2)) ||
                            (currentPage < Math.ceil(paginatorSize / 2) && index + 1 <= paginatorSize) ||
                            (currentPage > totalPages - Math.ceil(paginatorSize / 2) && index + 1 >= totalPages - paginatorSize + 1) ?
                            <button style={
                                currentPage === index + 1 ?
                                    {
                                        minWidth: pageButtonMinWidth,
                                        fontWeight: 'bold',
                                    } :
                                    {
                                        minWidth: pageButtonMinWidth,
                                    }
                            } key={`paginator index ${index}`} onClick={() => handleClick(index + 1)}>
                                {index + 1}
                            </button>
                            :
                            <></>
                    ))}
                    {/* {currentPage + Math.floor(paginatorSize / 2) <= totalPages - 1 ? <span>...</span> : <></>} */}
                    {
                        (currentPage >= Math.ceil(paginatorSize / 2) && currentPage <= totalPages - Math.ceil(paginatorSize / 2) &&
                            currentPage + Math.floor(paginatorSize / 2) <= totalPages - 1) ||
                            (currentPage < Math.ceil(paginatorSize / 2) && totalPages > paginatorSize) ? <span>...</span> : <></>
                    }
                    <button style={{
                        minWidth: pageButtonMinWidth,
                    }} onClick={() => handleClick(totalPages)}>
                        {'>'}
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Paginator;