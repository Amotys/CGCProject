import React, { useState, useEffect } from "react";
import PVPSideInfo from './PVPSideInfo';
import PVPUnitAndBuildingInfo from './PVPUnitAndBuildingInfo';
import AllPVPUnits from '../../../../static/characters/monsters/pvp/AllPVPUnits'
import AllPVPBuildings from '../../../../static/characters/monsters/pvp/AllPVPBuildings'
import AllPVPHeros from '../../../../static/characters/monsters/pvp/AllPVPHeros'

const sideNames = {
    Court: '朝廷',
    Inari: '伊纳利三足联盟',
    Fortaleza: '昆吉斯塔军团',
}

const PVPSideUnitsList = ({ side }) => {
    const scrollToThisTop = (givenID) => {
        // 获取当前组件的DOM节点
        const componentNode = document.getElementById(givenID);
        if (componentNode) {
            // 滚动至当前组件的顶部
            componentNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    const titleStyle = {
        textAlign: 'center',
        fontFamily: 'KaiTi',
        fontWeight: 'bold',
        fontSize: '2rem',
        background: `linear-gradient(to right, transparent 0%, #E3F6AF 25%, #E3F6AF 75%, transparent 100%)`,
        borderTop: '0.1rem solid #8F9A4D',
        borderBottom: '0.1rem solid #8F9A4D',
        color: '#265024',
    }
    const [unit, setUnit] = useState(null)
    const createSelectableUnit = (unit, index, type) => (
        <div style={{ width: '10%' }} key={`pvp side unit ${index}`}>
            <div style={{
                padding: '0.5rem',
            }}>
                <img style={{
                    borderRadius: '50%',
                    border: '0.2rem solid darkgreen',
                    cursor: 'pointer',
                }} src={unit.imageUrl[1] ? unit.imageUrl[1] : unit.imageUrl[0]} alt={unit.name}
                    onClick={() => {
                        setUnit([unit, type])
                        scrollToThisTop('unit_details_pvp')
                    }} />
            </div>
        </div>
    )
    useEffect(() => {
        setUnit(null)
    }, [side])
    return (
        <div>
            {/* 单位详情 */}
            <div>
                <div style={{
                    padding: '2rem',
                    paddingBottom: '0rem',
                    paddingTop: '0.5rem',
                }}>
                    <div style={titleStyle} id='unit_details_pvp'>
                        {unit ? (unit[1] === 'unit' ? '单位详情' : (unit[1] === 'building' ? '建筑详情' : '特殊角色详情')) : (sideNames[side] ? sideNames[side] : 'PVP玩法')}
                    </div>
                    <div>
                        {unit ? <PVPUnitAndBuildingInfo unit={unit} /> : (sideNames[side] ? <PVPSideInfo side={side} /> : <PVPSideInfo side={'default'} />)}
                    </div>
                </div>
            </div>

            {/* 建筑列表 */}
            <div className="container">
                <div style={{
                    padding: '2rem',
                    paddingBottom: '0rem',
                }}>
                    {!side ?
                        <div></div> :
                        <div>
                            <div style={titleStyle}>
                                阵营建筑
                            </div>
                            <div className="flex flex-row" style={{ display: 'flex', flexWrap: 'wrap', }}>
                                {AllPVPBuildings[side] && Object.values(AllPVPBuildings[side]).map((unit, index) => (
                                    createSelectableUnit(unit, index, 'building')
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>

            {/* 单位列表 */}
            <div className="container">
                <div style={{
                    padding: '2rem',
                }}>
                    {!side ?
                        <div></div> :
                        <div>
                            <div style={titleStyle}>
                                阵营单位
                            </div>
                            <div className="flex flex-row" style={{ display: 'flex', flexWrap: 'wrap', }}>
                                {AllPVPUnits[side] && Object.values(AllPVPUnits[side]).map((unit, index) => (
                                    createSelectableUnit(unit, index, 'unit')
                                ))}
                            </div>
                        </div>
                    }

                </div>
            </div>

            {/* 英雄列表 */}
            <div className="container">
                <div style={{
                    padding: '2rem',
                }}>
                    {!side ?
                        <div></div> :
                        <div>
                            <div style={titleStyle}>
                                阵营特殊角色
                            </div>
                            <div className="flex flex-row" style={{ display: 'flex', flexWrap: 'wrap', }}>
                                {AllPVPHeros[side] && Object.values(AllPVPHeros[side]).map((unit, index) => (
                                    createSelectableUnit(unit, index, 'hero')
                                ))}
                            </div>
                        </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default PVPSideUnitsList