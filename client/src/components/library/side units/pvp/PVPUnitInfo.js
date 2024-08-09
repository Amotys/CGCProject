import React from "react";
import Crystal from '../../../../static/images/icons/Crystal.png'
import Wood from '../../../../static/images/icons/Wood.png'
import Food from '../../../../static/images/icons/Food.png'

const PVPUnitInfo = ({ unit }) => {
    const titleStyle = { fontWeight: 'bold', border: '0.05rem solid darkgreen', padding: '0.5rem' }
    const contentStyle = { border: '0.05rem solid darkgreen', padding: '0.5rem' }
    const createTr = (title, value, key) => {
        const iconStyle = { height: '1.5rem' }
        const spanStyle = { paddingRight: '0.5rem' }
        return (
            <tr key={key}>
                <td style={{ ...titleStyle, minWidth: '7.5rem' }}>{title}：</td>
                <td style={contentStyle}>{
                    title.includes('费用') ? (
                        <div className="flex flex-row">
                            <img src={Wood} alt='wood icon' style={iconStyle} />
                            <span style={spanStyle}>{value[0]}</span>
                            <img src={Food} alt='food icon' style={iconStyle} />
                            <span style={spanStyle}>{value[1]}</span>
                            <img src={Crystal} alt='crystal icon' style={iconStyle} />
                            <span style={spanStyle}>{value[2]}</span>
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
                <div style={{ width: '40%' }}>
                    <div style={{ padding: '2rem' }}>
                        <img style={{ borderRadius: '2rem' }} src={unit.imageUrl[0]} alt={unit.name} />
                    </div>
                </div>
                <div style={{ width: '60%' }}>
                    {/* 左右两个信息部分 */}
                    <div className="container flex flex-row" style={{ height: '100%' }}>
                        <div style={{ width: '50%', height: '100%' }}>
                            <div style={{ padding: '2rem', height: '100%' }}>
                                <table style={{ width: '100%', height: '100%' }}>
                                    <tbody>
                                        {createTr('单位名称', unit.name, 'pvp info unit name')}
                                        {createTr('训练费用', unit.costMaterial, 'pvp info cost 1')}
                                        {createTr('维护费用', unit.costMaintain, 'pvp info cost 2')}
                                        {createTr('训练时长', `${unit.costTime}回合`, 'pvp info cost 3')}
                                        {createTr('占用人口', unit.population, 'pvp info cost 4')}
                                        {unit.requirement.length !== 0 && createTr('建造需求', unit.requirement.join('、'), 'pvp info requirement')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div style={{ width: '50%', height: '100%' }}>
                            <div style={{ paddingLeft: '0', padding: '2rem', height: '100%' }}>
                                <table style={{ width: '100%', height: '100%' }}>
                                    <tbody>
                                        {unit.healthRegenerate === 0 ?
                                            createTr('健康值', `${unit.health}`, 'pvp info unit hp') :
                                            createTr('健康值', `${unit.health}（+${unit.healthRegenerate}/回合）`, 'pvp info unit hp')
                                        }
                                        {unit.manaRegenerate === 0 ?
                                            createTr('魔法值', `${unit.mana}`, 'pvp info unit mp') :
                                            createTr('魔法值', `${unit.mana}（+${unit.manaRegenerate}/回合）`, 'pvp info unit mp')
                                        }
                                        {createTr('攻击力', unit.atk, 'pvp info unit atk')}
                                        {createTr('防御力', unit.def, 'pvp info unit def')}
                                        {createTr('伤害值', unit.dmg, 'pvp info unit dmg')}
                                        {createTr('移动力', unit.mov, 'pvp info unit mov')}
                                        {createTr('先攻值', unit.init, 'pvp info unit init')}
                                        {createTr('士气值', unit.mor, 'pvp info unit mor')}
                                        {createTr('暴击值', unit.cri, 'pvp info unit cri')}
                                        {createTr('体型', unit.size, 'pvp info unit size')}
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
                {unit.attackMethod.length !== 0 &&
                    <div style={{ paddingBottom: '2rem' }}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                {unit.attackMethod.map((element, index) => (
                                    createTr(`攻击方式${index + 1}`,
                                        `${element[0]}攻击、${element[3]}伤害、${element[1] === element[2] ? `射程${element[1]}` : `最小射程${element[1]}、最大射程${element[2]}`}`,
                                        `pvp info attack method ${index} ${unit.name}`)
                                ))}
                            </tbody>
                        </table>
                    </div>}
                {Object.keys(unit.abilities).length !== 0 &&
                    <div style={{ paddingBottom: '2rem' }}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                {Object.entries(unit.abilities).map(([key, value], index) => (
                                    createTr(key, value, `pvp info ability ${unit.name} ${index}`)
                                ))}
                            </tbody>
                        </table>
                    </div>}
            </div>
        </div>
    )
}

export default PVPUnitInfo