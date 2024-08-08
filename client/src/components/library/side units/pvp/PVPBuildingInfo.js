import React from "react";
import Crystal from '../../../../static/images/icons/Crystal.png'
import Wood from '../../../../static/images/icons/Wood.png'
import Food from '../../../../static/images/icons/Food.png'

const PVPBuildingInfo = ({ unit }) => {
    const titleStyle = { fontWeight: 'bold', border: '0.05rem solid darkgreen', padding: '0.5rem' }
    const contentStyle = { border: '0.05rem solid darkgreen', padding: '0.5rem' }
    const iconStyle = { height: '1.5rem' }
    const spanStyle = { paddingRight: '0.5rem' }
    const createTr = (title, value, key) => {
        return (
            <tr key={key}>
                <td style={{ ...titleStyle, minWidth: '7.5rem' }}>{title}：</td>
                <td style={contentStyle}>{
                    title.includes('费用') ? (
                        <div className="flex flex-row">
                            <img src={Wood} style={iconStyle} />
                            <span style={spanStyle}>{value[0]}</span>
                            <img src={Food} style={iconStyle} />
                            <span style={spanStyle}>{value[1]}</span>
                            <img src={Crystal} style={iconStyle} />
                            <span style={spanStyle}>{value[2]}</span>
                            {title.includes('维修费用') && <span>{`/${value[3]}健康值`}</span>}
                        </div>
                    )
                        : value
                }</td>
            </tr>
        )
    }
    return (
        <div className="container">

            {/* 图标和建造信息部分 */}
            <div className="container flex flex-row">
                <div style={{ width: '30%' }}>
                    <div style={{ padding: '2rem' }}>
                        <img style={{ borderRadius: '2rem' }} src={unit.imageUrl[0]} alt={unit.name} />
                    </div>
                </div>
                <div style={{ width: '70%' }}>
                    {/* 左右两个信息部分 */}
                    <div className="container flex flex-row" style={{ height: '100%' }}>
                        <div style={{ width: '60%', height: '100%' }}>
                            <div style={{ padding: '2rem', height: '100%' }}>
                                <table style={{ width: '100%', height: '100%' }}>
                                    <tbody>
                                        {createTr('建筑名称', unit.name, 'pvp info building name')}
                                        {createTr('建造费用', unit.costMaterial, 'pvp info building cost 1')}
                                        {createTr('维修费用', unit.costRepair, 'pvp info building cost 2')}
                                        {createTr('建造时长', `${unit.costBuildTime}回合`, 'pvp info building cost 3')}
                                        {(unit.population[0] != 0 || unit.population[1] != 0) && createTr(unit.population[1] != 0 ? '提供人口' : '占用人口',
                                            unit.population[1] != 0 ? unit.population[1] : unit.population[0], 'pvp info building cost 4')}
                                        {unit.requirement.length != 0 && createTr('建造需求', unit.requirement.join('、'), 'pvp info building requirement')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div style={{ width: '40%', height: '100%' }}>
                            <div style={{ paddingLeft: '0', padding: '2rem', height: '100%' }}>
                                <table style={{ width: '100%', height: '100%' }}>
                                    <tbody>
                                        {unit.healthRegenerate == 0 ?
                                            createTr('健康值', `${unit.health}`, 'pvp info building hp') :
                                            createTr('健康值', `${unit.health}（+${unit.healthRegenerate}/回合）`, 'pvp info building hp')
                                        }
                                        {unit.manaRegenerate == 0 ?
                                            createTr('魔法值', `${unit.mana}`, 'pvp info building mp') :
                                            createTr('魔法值', `${unit.mana}（+${unit.manaRegenerate}/回合）`, 'pvp info building mp')
                                        }
                                        {unit.atk != 0 && createTr('攻击力', unit.atk, 'pvp info building atk')}
                                        {createTr('防御力', unit.def, 'pvp info building def')}
                                        {unit.dmg != 0 && createTr('伤害值', unit.dmg, 'pvp info building dmg')}
                                        {createTr('建筑面积', unit.size, 'pvp info building size')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* 下方描述部分 */}
                    <div className="container"></div>
                </div>
            </div>

            {/* 详细信息部分 */}
            <div>
                {unit.attackMethod.length != 0 &&
                    <div style={{ paddingBottom: '2rem' }}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                {unit.attackMethod.map((element, index) => (
                                    createTr(`攻击方式${index + 1}`, `${element[0]}攻击、${element[3]}伤害、最小射程${element[1]}、最大射程${element[2]}`, `pvp info attack method ${index} ${unit.name}`)
                                ))}
                            </tbody>
                        </table>
                    </div>}
                {Object.keys(unit.abilities).length != 0 &&
                    <div style={{ paddingBottom: '2rem' }}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                {Object.entries(unit.abilities).map(([key, value], index) => (
                                    createTr(key, value, `pvp info ability ${unit.name} ${index}`)
                                ))}
                            </tbody>
                        </table>
                    </div>}
                {Object.keys(unit.technologies).length != 0 &&
                    <div style={{ paddingBottom: '2rem' }}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                {Object.entries(unit.technologies).map(([key, value], index) => (
                                    <tr key={key}>
                                        <td style={{ ...titleStyle, minWidth: '7.5rem' }}>{key}</td>
                                        <td style={{ ...contentStyle, minWidth: '12rem' }}>
                                            <div className="flex flex-row">
                                                <img src={Wood} style={iconStyle} />
                                                <span style={spanStyle}>{value[0]}</span>
                                                <img src={Food} style={iconStyle} />
                                                <span style={spanStyle}>{value[1]}</span>
                                                <img src={Crystal} style={iconStyle} />
                                                <span style={spanStyle}>{value[2]}</span>
                                            </div>
                                        </td>
                                        <td style={{ ...contentStyle, minWidth: '5rem' }}>
                                            {`${value[3]}回合`}
                                        </td>
                                        <td style={{ ...contentStyle, minWidth: '9rem' }}>
                                            {
                                                '需求：' + (value[4].length == 0 ? '无' : value[4].join('、'))
                                            }
                                        </td>
                                        <td style={contentStyle}>{value[5]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>}
            </div>
        </div>
    )
}

export default PVPBuildingInfo