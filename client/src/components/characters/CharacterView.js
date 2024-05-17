// 角色详细信息
import React from 'react';
import AllCharacterComponents from '../../static/characters/AllCharacterComponents';
import CharacterViewSkillsPart from './CharacterViewSkillsPart';
import CharacterViewBasicStatus from './CharacterViewBasicStatus';
import CharacterViewAdvancedStatus from './CharacterViewAdvancedStatus';
import CharacterViewMagicPart from './CharacterViewMagicPart';

const CharacterView = ({ name, setCurrentPage, setActiveButton }) => {
    // 选出要渲染的角色
    const character = Object.values(AllCharacterComponents).find(element => element.name === name);

    return (
        <div className='container'>
            <div className='container' style={{
                padding: '1rem',
            }}>
                <div className='container flex flex-col' style={{
                    padding: '3rem',
                    backgroundColor: 'rgba(225,240,135,0.7)',
                    borderRadius: '3rem',
                    border: '0.3rem solid #485812',
                    color: '#08331b',
                }}>

                    {/* 角色的图片和基本描述部分，上侧 */}
                    <CharacterViewBasicStatus character={character} />

                    {/* 角色的详细信息部分，中上侧 */}
                    <CharacterViewAdvancedStatus character={character} />

                    {/* 角色的点数技能，中侧 */}
                    <CharacterViewSkillsPart character={character} />

                    {/* 角色的技能和魔法部分，中下侧 */}
                    <CharacterViewMagicPart character={character} setCurrentPage={setCurrentPage} setActiveButton={setActiveButton} />

                    {/* 角色的常驻BUFF和物品部分，下侧 */}

                </div>



                {/* 返回角色总页面的按钮 */}
            </div>
        </div>

    );

}

export default CharacterView;