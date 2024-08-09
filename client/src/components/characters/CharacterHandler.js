// 角色加载模块
import React, { useState, useEffect } from 'react';
import AllCharacterComponents from '../../static/characters/AllCharacterComponents';
import ClickableCharacterCard from './ClickableCharacterCard';
import CharactersPaginator from './CharactersPaginator';
import EmptyPagintor from '../EmptyPaginator';

const CharacterHandler = ({ side, setCurrentCharacterPage, setCharacterActiveButton }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchOption, setSearchOption] = useState('title');
    const [searchedCharacterArray, setSearchedCharacterArray] = useState([]);
    const handleSearchInputChange = (event) => { setSearchTerm(event.target.value) };
    const handleSearchOptionChange = (event) => { setSearchOption(event.target.value) };

    const buttonClick = (label) => {
        setCurrentCharacterPage(label);
        setCharacterActiveButton(label);
    }
    const createCharacterCard = (element) => {
        return (
            <ClickableCharacterCard
                self={element}
                imageUrl={element.imageUrl}
                text={element.shortDescription}
                title={element.name}
                buttonClick={() => buttonClick(`characters_${element.idName}`)}
                layoutReversed={false}
            />
        )
    };

    useEffect(() => {
        let filteredCharacterElements = [];
        if (side === '默认') { filteredCharacterElements = Object.values(AllCharacterComponents).filter((element) => element.name) }
        else { filteredCharacterElements = Object.values(AllCharacterComponents).filter((element) => element.name && element.side.includes(side)) }
        let searchedElements = [];
        if (searchTerm === '') { searchedElements = JSON.parse(JSON.stringify(filteredCharacterElements)) }
        else {
            searchedElements = filteredCharacterElements.filter((element) => (
                searchOption === 'title' ?
                    element.fullname.includes(searchTerm) :
                    (element.shortDescription.includes(searchTerm) ||
                        element.story.some(str => str.includes(searchTerm)))
            ))
        }
        const searchedCharacterCardsArray = searchedElements.map(createCharacterCard);
        setSearchedCharacterArray(searchedCharacterCardsArray);
    }, [side, searchTerm, searchOption]); // eslint-disable-line react-hooks/exhaustive-deps

    const characterSearchBoxStyle = {
        padding: '0.5rem',
        width: '100%',
        border: '0.2rem solid darkgreen',
        borderRadius: '0.5rem',
        backgroundColor: '#e9ffe0',
    }
    const characterSearchSelectionStyle = {
        padding: '0.5rem',
        width: '100%',
        border: '0.2rem solid darkgreen',
        borderRadius: '0.5rem',
        backgroundColor: '#c8e6bc',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'darkgreen',
    }

    return (
        <div className='container'>
            {/* 搜索框 */}
            <div className='container flex' style={{ paddingTop: '0.5rem', }}>
                <div className='container flex flex-row' style={{
                    padding: '1rem',
                }}>
                    <div className='container flex flex-row' style={{
                        width: '70%',
                    }}>
                        <div style={{ width: '10%', }}></div>
                        <div style={{ width: '80%', }}>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchInputChange}
                                placeholder="输入搜索关键词"
                                style={characterSearchBoxStyle}
                            />
                        </div>
                        <div style={{ width: '10%', }}></div>
                    </div>
                    <div className='container flex flex-row' style={{
                        width: '30%',
                    }}>
                        <div style={{ width: '10%', }}></div>
                        <div style={{ width: '70%', }}>
                            <select
                                value={searchOption}
                                onChange={handleSearchOptionChange}
                                style={characterSearchSelectionStyle}
                            >
                                <option value="title">角色名</option>
                                <option value="content">角色描述和背景</option>
                            </select>
                        </div>
                        <div style={{ width: '20%', }}></div>
                    </div>
                </div>
            </div>

            <div className='container flex flex-row'>

                {/* 角色展示页 */}
                <div style={{
                    padding: '1rem',
                }}>
                    {searchedCharacterArray.length === 0 ? (
                        searchTerm === '' ? (
                            <>
                                <EmptyPagintor itemsArray={[`该阵营分类（${side}）下没有任何角色！`]} itemsPerPage={1} />
                            </>
                        ) : (
                            <>
                                <EmptyPagintor itemsArray={[`该阵营分类（${side}）下搜索不到${searchOption === 'title' ? '角色名' : '角色描述和背景'}为${searchTerm}的角色！`]} itemsPerPage={1} />
                            </>
                        )
                    ) : (
                        <>
                            <CharactersPaginator itemsArray={searchedCharacterArray} itemsPerPage={8} />
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}

export default CharacterHandler;