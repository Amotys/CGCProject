import React from "react";
import AllMagics from '../../../static/magics/AllMagics';

const tableTitleTdStyles = {
    backgroundColor: 'rgba(90,150,30,0.2)',
    width: '25%',
}

const tableTdStyles = {
    border: '0.01rem solid darkgreen',
    padding: '0.5rem',
    textAlign: 'center',
}

const MagicView = ({ name }) => {
    const magic = Object.values(AllMagics).find(magic => magic.name === name);

    return (
        <div className="container flex flex-col">
            <div className="container" style={{ padding: '2rem', }}>
                <div style={{
                    padding: '3rem',
                    backgroundColor: 'rgba(225,240,135,0.7)',
                    borderRadius: '3rem',
                    border: '0.3rem solid #485812',
                    color: '#08331b',
                }}>

                    {/* 图标和基础属性 */}
                    <div className="container flex flex-row" style={{
                        borderBottom: '0.01rem solid darkgreen',
                        paddingBottom: '2rem',
                    }}>

                        {/* 图标 */}
                        <div className="container" style={{
                            width: '45%',
                            display: 'flex',
                            justifyContent: 'right',
                        }}>
                            <div style={{
                                width: '25%',
                            }}>
                                <img src={magic.imageUrl} alt={magic.name} style={{
                                    borderRadius: '50%',
                                    border: '0.25rem solid #4c9f0c',
                                }} />
                            </div>
                        </div>

                        {/* 基础属性 */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'left',
                        }}>
                            <div className="container flex flex-col flex-grow" style={{
                                paddingLeft: '4rem',
                            }}>
                                <table style={{ textAlign: 'center', height: '100%', }}>
                                    <tbody>
                                        <tr>
                                            <td style={{
                                                fontFamily: 'Kaiti',
                                                fontWeight: 'bold',
                                                fontSize: '1.5rem',

                                            }}>{magic.name}</td>
                                        </tr>
                                        <tr>
                                            <td>{`${magic.level}阶 ${magic.cost}魔法值`}</td>
                                        </tr>
                                        <tr>
                                            <td>{`${magic.chantingRound}咏唱回合${!magic.needDeclaration ? '、无宣言' : ''}${magic.instantChanting ? '、瞬时' : ''}`}</td>
                                        </tr>
                                        <tr>
                                            <td>{`${magic.knowledgePool}知识量`}</td>
                                        </tr>
                                        <tr>
                                            <td>{`${magic.attributeCategory}-${magic.factionCategory}-${magic.functionCategory}`}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* 引用和故事还有表格 */}
                    <div>
                        <div style={{
                            padding: '2rem',
                            fontStyle: 'italic',
                            color: 'green',
                            textAlign: 'center',
                        }}>
                            {magic.quote}
                        </div>
                        <div style={{paddingBottom:'2rem',}}>
                            {magic.story.map((shortStory, index) => (
                                <div key={`magic short story ${index}`} style={{ 
                                    padding: '0.5rem', 
                                    paddingLeft: '2.5rem', 
                                    paddingRight: '2.5rem',
                                }}>{shortStory}</div>
                            ))}
                        </div>

                        {/* 表格部分 */}
                        <div className="flex flex-row" style={{
                            paddingTop: '2rem',
                            borderTop: '0.01rem solid darkgreen',
                            justifyContent: 'center',
                            }}>
                            <table style={{width:'50%',}}>
                                <tbody>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>魔法效果：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.description}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>魔法位阶：</td>
                                        <td style={{ ...tableTdStyles, }}>{`${magic.level}阶`}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>魔法消耗：</td>
                                        <td style={{ ...tableTdStyles, }}>{`${magic.cost}魔法值`}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>魔法知识量：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.knowledgePool}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>属性类别：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.attributeCategory}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>阵营类别：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.factionCategory}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>功能类别：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.functionCategory}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>咏唱回合：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.chantingRound}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>需要宣言：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.needDeclaration ? '是' : '否'}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>瞬时咏唱：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.instantChanting ? '是' : '否'}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ ...tableTdStyles, ...tableTitleTdStyles, }}>其他别称：</td>
                                        <td style={{ ...tableTdStyles, }}>{magic.otherNames.join('、')}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style={{width:'30%',}}>
                                <tbody>
                                    {magic.acquisitionMethods.map((method, index) => (
                                        index === 0 ? (
                                            <tr key={`acquisition methods ${index}`}>
                                                <td rowSpan={magic.acquisitionMethods.length}
                                                    style={{ ...tableTdStyles, ...tableTitleTdStyles, width:'35%',}}>获取途径：</td>
                                                <td style={{ ...tableTdStyles, }}>{method}</td>
                                            </tr>
                                        ) : (
                                            <tr key={`acquisition methods ${index}`}>
                                                <td style={{ ...tableTdStyles, }}>{method}</td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default MagicView;