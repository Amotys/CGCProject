import React from 'react';

const characterFaith = [
    { 1: '极端邪恶', 2: '邪恶倾向', 3: '中立', 4: '善良倾向', 5: '极端善良' },
    { 1: '极端混乱', 2: '混乱倾向', 3: '中立', 4: '守序倾向', 5: '极端守序' },
    { 1: '极端排外', 2: '排外倾向', 3: '中立', 4: '亲外倾向', 5: '极端亲外' },
    { 1: '极端战争', 2: '战争倾向', 3: '中立', 4: '和平倾向', 5: '极端和平' },
    { 1: '极端权威', 2: '权威倾向', 3: '中立', 4: '平等倾向', 5: '极端平等' },
    { 1: '极端唯物', 2: '唯物倾向', 3: '中立', 4: '唯心倾向', 5: '极端唯心' },
];

const attributeMap = {
    strength: '力量',
    constitution: '体质',
    agility: '灵巧',
    willpower: '意志',
    intelligence: '智慧',
    power: '魔力',
    appearance: '魅力',
    luck: '幸运',
    psychic: '灵能',
    health: '健康',
    magic: '魔法',
    attack: '攻击',
    defend: '防御',
    damage: '伤害',
    movement: '移动',
    initiative: '先攻',
    morale: '士气',
    critic: '暴击',
};

const intToRoman = (num) => {
    const romanNumerals = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i][0]) {
            result += romanNumerals[i][1];
            num -= romanNumerals[i][0];
        }
    }
    return result;
}

const CharacterViewAdvancedStatus = ({ character }) => {
    // 信仰部分生成内容使用
    const generateFaithTr = (label, faithIndex, faithValue) => {
        return (
            <tr>
                <td>{`${label}：`}</td>
                <td><b>{characterFaith[faithIndex][faithValue]}</b></td>
                <td></td>
            </tr>
        );
    }
    return (
        <>
            {/* 故事背景 */}
            <div style={{
                borderTop: '0.01rem solid darkgreen',
                borderBottom: '0.01rem solid darkgreen',
                paddingTop:'2rem',
                paddingBottom:'2rem',
                }}>
                {character.story.map((paragraph, index) => (
                    <div key={`story ${index}`}
                    style={{
                        padding:'0.5rem',
                        paddingLeft:'1rem',
                        paddingRight:'1rem',
                }}>{paragraph}</div>
                ))}
            </div>

            <div className='container flex flex-row' style={{
                padding: '1rem',
            }}>

                {/* 额外属性 */}
                <div className='container flex flex-1' style={{ padding: '1rem', }}>
                    <table style={{ width: '100%', }}>
                        <tbody>
                            <tr>
                                <td>等级：</td>
                                <td><b>{character.level}</b></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>阅历：</td>
                                <td><b>{character.experience}</b></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>体型：</td>
                                <td><b>{`${character.size[0]}格`}</b></td>
                                <td><b>{character.size[0] === character.size[1] ? '' : `（${character.size[1]}格）`}</b></td>
                            </tr>
                            {generateFaithTr('善恶信仰', 0, character.faith.morality)}
                            {generateFaithTr('秩序信仰', 1, character.faith.orderliness)}
                            {generateFaithTr('种族信仰', 2, character.faith.extroversion)}
                            {generateFaithTr('武力信仰', 3, character.faith.peacefulness)}
                            {generateFaithTr('阶级信仰', 4, character.faith.equality)}
                            {generateFaithTr('认知信仰', 5, character.faith.idealism)}
                        </tbody>
                    </table>
                </div>

                {/* 基础属性 */}
                <div className='container flex flex-1' style={{ padding: '1rem' }}>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            {Object.entries(character.status).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{`${attributeMap[key]}：`}</td>
                                    {key === 'psychic' ? (
                                        <>
                                            <td><b>{value === 0 ? '无' : intToRoman(value)}</b></td>
                                            <td></td>
                                        </>
                                    ) : (
                                        <>
                                            <td><b>{value[0]}</b></td>
                                            <td><b>{value[1] === 0 ? '' : `(${value[0] + value[1]})`}</b></td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* 进阶属性 */}
                <div className='container flex flex-1' style={{ padding: '1rem' }}>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            {Object.entries(character.property).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{`${attributeMap[key]}：`}</td>
                                    {key === 'psychic' ? (
                                        <>
                                            <td><b>{value === 0 ? '无' : intToRoman(value)}</b></td>
                                            <td></td>
                                        </>
                                    ) : (
                                        <>
                                            <td><b>{value[0]}</b></td>
                                            <td><b>{value[1] === 0 ? '' : `(${value[0] + value[1]})`}</b></td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default CharacterViewAdvancedStatus;