// 角色

import React, { useState } from 'react';
import SideImage from '../../static/side/SideImage';
import CharacterSideButton from './CharacterSideButton';
import PageComponents from '../PageComponents';
import '../../App.css';
import '../../index.css';

const Characters = ({ setCurrentPage, setActiveButton }) => {
    const [characterActiveButton, setCharacterActiveButton] = useState('characters_default');
    const [currentCharacterPage, setCurrentCharacterPage] = useState('characters_default');
    // 调整页面位置的函数
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 使用平滑滚动效果
        });
    }
    const buttonClick = (label) => {
        setCharacterActiveButton(label);
        setCurrentCharacterPage(label);
        scrollToTop();
    }
    const createSideLabel = (imageUrl, desc, title, fontSize) => {
        return (
            <div className='flex flex-row'>
                {imageUrl && <img src={imageUrl} alt={desc} className='w-1/4' style={{
                    borderRadius: '50%',
                }} />}
                <div className='flex-grow' style={{
                    textAlign: 'center',
                    fontSize: fontSize,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}><div>{title}</div></div>
            </div>
        );
    }
    // 渲染次级页面
    const renderContent = () => {
        const DisplayPage = PageComponents[currentCharacterPage];
        if (DisplayPage) {
            return <DisplayPage
                setCurrentCharacterPage={setCurrentCharacterPage}
                setCharacterActiveButton={setCharacterActiveButton}
                setCurrentPage={setCurrentPage}
                setActiveButton={setActiveButton} />;
        } else {
            return <div>你要找的页面是{currentCharacterPage}，但该页面不存在！</div>;
        }
    };

    return (
        <div className='flex flex-row'>

            {/* 边栏阵营部分 */}
            <div className='flex flex-row' style={{ width: '16.5%', }}>

                {/* 阵营按钮 */}
                <div style={{
                    padding: '1rem',
                }}>
                    <div style={{
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        border: '0.2rem solid #1d5812',
                    }}>
                        <CharacterSideButton
                            label={createSideLabel(null, '全部角色', '全部角色', '1.5rem')}
                            characterActiveButton={characterActiveButton === 'characters_default'}
                            onClick={() => {
                                buttonClick('characters_default');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Templar, '圣堂', '圣堂', '1.5rem')}
                            characterActiveButton={characterActiveButton === 'characters_templar'}
                            onClick={() => {
                                buttonClick('characters_templar');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.RedStorm, '红风暴海盗团', '红风暴海盗团', '1rem')}
                            characterActiveButton={characterActiveButton === 'characters_red_storm'}
                            onClick={() => {
                                buttonClick('characters_red_storm');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Sapphire, '蓝宝石海盗团', '蓝宝石海盗团', '1rem')}
                            characterActiveButton={characterActiveButton === 'characters_sapphire'}
                            onClick={() => {
                                buttonClick('characters_sapphire');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Court, '朝廷', '朝廷', '1.5rem')}
                            characterActiveButton={characterActiveButton === 'characters_court'}
                            onClick={() => {
                                buttonClick('characters_court');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Henge, '姮娥宫', '姮娥宫', '1.5rem')}
                            characterActiveButton={characterActiveButton === 'characters_henge'}
                            onClick={() => {
                                buttonClick('characters_henge');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.BlackRose, '黑玫瑰义军', '黑玫瑰义军', '1.25rem')}
                            characterActiveButton={characterActiveButton === 'characters_black_rose'}
                            onClick={() => {
                                buttonClick('characters_black_rose');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Legion, '沙之军团', '沙之军团', '1.5rem')}
                            characterActiveButton={characterActiveButton === 'characters_legion'}
                            onClick={() => {
                                buttonClick('characters_legion');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Resistance, '波札那反抗军', '波札那反抗军', '1rem')}
                            characterActiveButton={characterActiveButton === 'characters_resistance'}
                            onClick={() => {
                                buttonClick('characters_resistance');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Semonster, '萨曼斯特联合军', '萨曼斯特联合军', '0.9rem')}
                            characterActiveButton={characterActiveButton === 'characters_semonster'}
                            onClick={() => {
                                buttonClick('characters_semonster');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Inari, '伊纳利三足联盟', '伊纳利三足联盟', '0.9rem')}
                            characterActiveButton={characterActiveButton === 'characters_inari'}
                            onClick={() => {
                                buttonClick('characters_inari');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Kenvali, '斯多尔特雷贤者会', '斯多尔特雷贤者会', '0.8rem')}
                            characterActiveButton={characterActiveButton === 'characters_kenvali'}
                            onClick={() => {
                                buttonClick('characters_kenvali');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Sophiel, '斯奥菲尔王庭', '斯奥菲尔王庭', '1rem')}
                            characterActiveButton={characterActiveButton === 'characters_sophiel'}
                            onClick={() => {
                                buttonClick('characters_sophiel');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Fortaleza, '昆吉斯塔军团', '昆吉斯塔军团', '1rem')}
                            characterActiveButton={characterActiveButton === 'characters_fortaleza'}
                            onClick={() => {
                                buttonClick('characters_fortaleza');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.TerraWanderer, '铁拉行者会', '铁拉行者会', '1.25rem')}
                            characterActiveButton={characterActiveButton === 'characters_terra_wanderer'}
                            onClick={() => {
                                buttonClick('characters_terra_wanderer');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.BDipper, '七峰塔', '七峰塔', '1.5rem')}
                            characterActiveButton={characterActiveButton === 'characters_b_dipper'}
                            onClick={() => {
                                buttonClick('characters_b_dipper');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Sericum, '赛利库姆皇室', '赛利库姆皇室', '1rem')}
                            characterActiveButton={characterActiveButton === 'characters_sericum'}
                            onClick={() => {
                                buttonClick('characters_sericum');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Apicem, '阿比琪姆贸易塔', '阿比琪姆贸易塔', '0.9rem')}
                            characterActiveButton={characterActiveButton === 'characters_apicem'}
                            onClick={() => {
                                buttonClick('characters_apicem');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(SideImage.Nebula, '十二星宫议会', '十二星宫议会', '1rem')}
                            characterActiveButton={characterActiveButton === 'characters_nebula'}
                            onClick={() => {
                                buttonClick('characters_nebula');
                            }} />
                        <CharacterSideButton
                            label={createSideLabel(null, '独立者', '独立者', '1.5rem')}
                            characterActiveButton={characterActiveButton === 'characters_others'}
                            onClick={() => {
                                buttonClick('characters_others');
                            }} />

                    </div>
                </div>

            </div>

            {/* 角色展示部分 */}
            <div style={{ width: '83.5%', }}>
                {renderContent()}
            </div>

        </div>
    )

}

export default Characters;