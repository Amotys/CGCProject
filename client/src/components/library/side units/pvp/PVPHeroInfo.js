import React from "react";

const nameStyle = {
    textAlign: 'center',
    fontFamily: 'KaiTi',
    fontWeight: 'bold',
    fontSize: '2rem',
    background: `linear-gradient(to right, transparent 0%, #265024 25%, #265024 75%, transparent 100%)`,
    borderTop: '0.1rem solid #8F9A4D',
    borderBottom: '0.1rem solid #8F9A4D',
    color: '#E3F6AF',
    width: '50%',
}
const subtitleStyle = {
    fontFamily: 'KaiTi',
    fontSize: '1.25rem',
    fontWeight: 'bold',
}

const abilityTitleStyle = {
    textAlign: 'center',
    fontFamily: 'KaiTi',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    background: `linear-gradient(to right, transparent 0%, rgba(38, 80, 36, 0.75) 25%, rgba(38, 80, 36, 0.75) 75%, transparent 100%)`,
    borderTop: '0.1rem solid #8F9A4D',
    borderBottom: '0.1rem solid #8F9A4D',
    color: '#E3F6AF',
    width: '100%',
}

const PVPUnitInfo = ({ unit }) => {
    const titleStyle = { fontWeight: 'bold', border: '0.05rem solid darkgreen', padding: '0.5rem', width: '20%', }
    const contentStyle = { border: '0.05rem solid darkgreen', padding: '0.5rem' }
    const createTr = (title, value, key) => {
        return (
            Array.isArray(value) ?
                <tr key={key}>
                    <td style={{ ...titleStyle, minWidth: '7.5rem' }}>{title}</td>
                    {value.map((element, index) => (
                        title.includes('健康值') ?
                            <td key={`pvp hero ${unit.name} ${title} ${index}`}
                                style={contentStyle}
                            >{`${element} (+${unit.healthRegenerate[index]})`}</td> : (
                                title.includes('魔法值') ?
                                    <td key={`pvp hero ${unit.name} ${title} ${index}`}
                                        style={contentStyle}
                                    >{`${element} (+${unit.manaRegenerate[index]})`}</td> :
                                    <td key={`pvp hero ${unit.name} ${title} ${index}`}
                                        style={contentStyle}
                                    >{element}</td>
                            )
                    ))}
                </tr> :
                <tr key={key}>
                    <td style={{ ...titleStyle, minWidth: '7.5rem' }}>{title}：</td>
                    <td style={contentStyle}
                        colSpan={4}
                    >{value}</td>
                </tr>
        )
    }
    return (
        <div className="container">

            {/* 标题部分 */}
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '2rem',
                }}>
                    <div style={nameStyle}>
                        {unit.name}
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div style={subtitleStyle}>
                        {unit.subtitle}
                    </div>
                </div>
            </div>

            {/* 图标和属性部分 */}
            <div className="container flex flex-row">
                <div style={{ width: '50%' }}>
                    <div style={{ padding: '2rem' }}>
                        <img style={{ borderRadius: '2rem' }} src={unit.imageUrl[0]} alt={unit.name} />
                    </div>
                </div>
                <div style={{ width: '50%' }}>
                    <div style={{ padding: '2rem', height: '100%' }}>
                        <table style={{ width: '100%', height: '100%', textAlign: 'center', }}>
                            <tbody>
                                <tr>
                                    <td style={{
                                        ...titleStyle,
                                    }}></td>
                                    <td style={titleStyle}>初始状态</td>
                                    <td style={titleStyle}>一次强化</td>
                                    <td style={titleStyle}>二次强化</td>
                                    <td style={titleStyle}>最终强化</td>
                                </tr>
                                {createTr('健康值', unit.health, 'pvp info hero hp')}
                                {createTr('魔法值', unit.mana, 'pvp info hero mp')}
                                {createTr('攻击力', unit.atk, 'pvp info hero atk')}
                                {createTr('防御力', unit.def, 'pvp info hero def')}
                                {createTr('伤害值', unit.dmg, 'pvp info hero dmg')}
                                {createTr('移动力', unit.mov, 'pvp info hero mov')}
                                {createTr('先攻值', unit.init, 'pvp info hero init')}
                                {createTr('士气值', unit.mor, 'pvp info hero mor')}
                                {createTr('暴击值', unit.cri, 'pvp info hero cri')}
                                {createTr('体型', unit.size, 'pvp info hero size')}
                            </tbody>
                        </table>
                    </div>
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
                        {Object.entries(unit.abilities).map(([key, value], index) => (
                            <table style={{ width: '100%' }} key={`pvp hero abili table ${index}`}>
                                <tbody>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{
                                                display:'flex',
                                                justifyContent:'center',
                                                paddingTop:'2rem',
                                            }}>
                                                <div style={{...abilityTitleStyle,}}>
                                                {index === 0 ? `第一技能` : (index === 1 ? '第二技能' : (index === 2 ? '第三技能' : '终极技能'))}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {createTr(key, value, `pvp info ability ${unit.name} ${index}`)}
                                </tbody>
                            </table>
                        ))}
                    </div>}
            </div>
        </div>
    )
}

export default PVPUnitInfo