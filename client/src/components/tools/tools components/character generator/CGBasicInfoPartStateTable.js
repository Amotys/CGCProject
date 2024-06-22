import React from "react";

const tableTdPadding = '0.6rem'

const tableTitleStyle = {
    border: '0.01rem solid darkgreen',
    padding: tableTdPadding,
    width: '25%',
    fontWeight: 'bold',
}

const tableContentStyle = {
    border: '0.01rem solid darkgreen',
    padding: tableTdPadding,
    width: '25%',
}

const tableTrStyle = {
    width: '100%',
}

const CGBasicInfoPartStateTable = ({ statesInfos }) => {
    const createLeftTable = (width) => (
        <div style={{ width: width, }}>
            <div style={{
                padding: '1rem',
                height: '100%',
                width: '100%',
            }}>
                <table style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <tbody>
                        <tr style={tableTrStyle}>
                            <td style={tableTitleStyle}>属性总点数：</td>
                            <td style={tableContentStyle}>{statesInfos[0][0]}</td>
                            <td style={tableTitleStyle}>寿命/死门：</td>
                            <td style={tableContentStyle}>{statesInfos[0][1]}</td>
                        </tr>
                        <tr style={tableTrStyle}>
                            <td style={tableTitleStyle}>体积指数范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][2]}</td>
                            <td style={tableTitleStyle}>具有源力：</td>
                            <td style={tableContentStyle}>{
                                statesInfos[0][3] == 0 ?
                                    '否' : statesInfos[0][3] == 1 ?
                                        '是' : '自定义'}</td>
                        </tr>
                        <tr style={tableTrStyle}>
                            <td style={tableTitleStyle}>力量范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][4]}</td>
                            <td style={tableTitleStyle}>体质范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][5]}</td>
                        </tr>
                        <tr style={tableTrStyle}>
                            <td style={tableTitleStyle}>灵巧范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][6]}</td>
                            <td style={tableTitleStyle}>意志范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][7]}</td>
                        </tr>
                        <tr style={tableTrStyle}>
                            <td style={tableTitleStyle}>智慧范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][8]}</td>
                            <td style={tableTitleStyle}>魔力范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][9]}</td>
                        </tr>
                        <tr style={tableTrStyle}>
                            <td style={tableTitleStyle}>魅力范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][10]}</td>
                            <td style={tableTitleStyle}>幸运范围：</td>
                            <td style={tableContentStyle}>{statesInfos[0][11]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
    const createRightTable = (width) => (
        <div style={{ width: width, }}>
            <div style={{
                padding: '1rem',
                height: '100%',
                width: '100%',
            }}>
                <table style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <tbody>
                        {statesInfos[1].map((element, index) => (
                            index == 0 ?
                                <tr style={tableTrStyle} rowSpan={statesInfos[1].length} key={`character generator basic info part states infos ${index}`}>
                                    <td style={{ ...tableTitleStyle, width: '20%', }}>{element[0]}</td>
                                    <td style={{ ...tableContentStyle, width: '80%', }}>{element[1]}</td>
                                </tr> :
                                <tr style={tableTrStyle} key={`character generator basic info part states infos ${index}`}>
                                    <td style={{ ...tableTitleStyle, width: '20%', }}>{element[0]}</td>
                                    <td style={{ ...tableContentStyle, width: '80%', }}>{element[1]}</td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
    return (
        <div className="container flex flex-row">
            {statesInfos[1].length === 0 ?
                <>
                    {createLeftTable('100%')}
                </> :
                <>
                    {createLeftTable('50%')}
                    {createRightTable('50%')}
                </>
            }
        </div>
    )
}

export default CGBasicInfoPartStateTable;