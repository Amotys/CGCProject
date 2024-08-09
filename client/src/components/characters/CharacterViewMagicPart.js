import React from "react";
import AllMagics from '../../static/magics/AllMagics';
import MagicColors from '../../static/magics/MagicColors';

const magicTableTitleTdStyle = {
    fontWeight: 'bold',
}

const magicTableTdStyle = {
    padding: '0.5rem',
    border: '0.05rem solid darkgreen',
    textAlign: 'center',
}

const CharacterViewMagicPart = ({ character, setCurrentPage, setActiveButton }) => {
    // 调整页面位置的函数，跳转魔法页面时使用
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 使用平滑滚动效果
        });
    }

    const buttonClick = (label) => {
        scrollToTop();
        setCurrentPage(label);
        setActiveButton('app_library');
    }

    const characterMagics = character.magics.map(magicName => AllMagics[magicName]);
    return (
        <div className="container">
            <div className="container" style={{ padding: '2rem', paddingTop: '0', }}>
                <table>
                    <tbody >
                        {characterMagics.length >= 1 ? (
                            <>
                                <tr>
                                    <td colSpan={6} style={{
                                        ...magicTableTdStyle,
                                        ...magicTableTitleTdStyle,
                                        fontSize: '1.5rem',
                                        backgroundColor: 'rgba(70,120,35,0.25)',
                                    }}>魔法列表</td>
                                </tr>
                                <tr>
                                    <td style={{ ...magicTableTdStyle, ...magicTableTitleTdStyle }}>名称</td>
                                    <td style={{ ...magicTableTdStyle, ...magicTableTitleTdStyle }}>位阶</td>
                                    <td style={{ ...magicTableTdStyle, ...magicTableTitleTdStyle }}>消耗</td>
                                    <td style={{ ...magicTableTdStyle, ...magicTableTitleTdStyle }}>咏唱</td>
                                    <td style={{ ...magicTableTdStyle, ...magicTableTitleTdStyle }}>类别</td>
                                    <td style={{ ...magicTableTdStyle, ...magicTableTitleTdStyle }}>效果</td>
                                </tr>
                            </>
                        ) : (
                            null
                        )}
                        {characterMagics.map((magic, index) => (
                            <tr key={`${magic.name} ${index}`}>
                                <td style={{ ...magicTableTdStyle, width: '16%' }}>
                                    <a onClick={() => buttonClick(`library_magics_${magic.idName}`)}
                                        href="#"
                                        style={{
                                            textDecoration: 'underline',
                                            color: MagicColors[magic.attributeCategory],
                                            cursor: 'pointer',
                                        }}
                                    >{magic.name}</a>
                                </td>
                                <td style={{ ...magicTableTdStyle, width: '8%' }}>{magic.level}</td>
                                <td style={{ ...magicTableTdStyle, width: '8%' }}>{magic.cost}</td>
                                <td style={{ ...magicTableTdStyle, width: '20%' }}>{
                                    `${magic.chantingRound}回合${!magic.needDeclaration ? '、无宣言' : ''}${magic.instantChanting ? '、瞬时' : ''}`
                                }</td>
                                <td style={{ ...magicTableTdStyle, width: '20%' }}>{`${magic.attributeCategory}-${magic.factionCategory}-${magic.functionCategory}`}</td>
                                <td style={{
                                    ...magicTableTdStyle
                                }}>{magic.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CharacterViewMagicPart;