import React, { useState, useEffect } from "react";
import AllCharacterComponents from '../../../../static/characters/AllCharacterComponents';
import FightIcon from '../../../../static/images/tools/battleCalculator/FightIcon.png';
import NamelessUrl from '../../../../static/characters/Nameless.png';
import Button from "../../../Button";

const buttonStyle = {
    buttonStyle: {
        padding: '0.25rem',
        border: '0.1rem solid darkgreen',
        borderRadius: '1rem',
        minWidth: '8rem',
        fontWeight: 'bold',
        color: '#08331b',
    },
    buttonStyleActive: {
        backgroundImage: 'linear-gradient(to bottom, #00994c, #66ff66)',
    },
    buttonStyleInactive: {
        backgroundImage: 'linear-gradient(to top, #00994c, #66ff66)',
    },
    buttonHoverStyleActive: {
        backgroundImage: 'linear-gradient(to bottom, #0bbb63, #8bff8b)',
        color: '#021b0d',
    },
    buttonHoverStyleInactive: {
        backgroundImage: 'linear-gradient(to top, #0bbb63, #8bff8b)',
        color: '#021b0d',
    },
}

const loadMessageStyle = {
    textAlign: 'center',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    background: `linear-gradient(to right, transparent 0%, #c5e09b 25%, #c5e09b 75%, transparent 100%)`,
}

const inputStyle = {
    borderRadius: '0.5rem',
    padding: '0.1rem',
    textAlign: 'center',
    border: '0.1rem solid darkgreen',
    color: 'darkgreen',
    fontWeight: 'bold',
}

const imageStyle = {
    borderRadius: '50%',
    border: '0.1rem solid darkgreen',
}

const BattleCalculatorLoadPart = ({ leftCharacter, rightCharacter, setLeftCharacter, setRightCharacter, setLeftData, setRightData }) => {
    const [searchTermLeft, setSearchTermLeft] = useState('')
    const [searchTermRight, setSearchTermRight] = useState('')
    const handleInputChangeLeft = (event) => { setSearchTermLeft(event.target.value) }
    const handleInputChangeRight = (event) => { setSearchTermRight(event.target.value) }
    const [loadMessageLeft, setLoadMessageLeft] = useState('点击加载数据')
    const [loadMessageColorLeft, setLoadMessageColorLeft] = useState('green')
    const [loadMessageRight, setLoadMessageRight] = useState('点击加载数据')
    const [loadMessageColorRight, setLoadMessageColorRight] = useState('green')
    const loadCharacter = (direct) => {
        const character = direct === 'left' ? leftCharacter : rightCharacter;
        const setLoadMessage = direct === 'left' ? setLoadMessageLeft : setLoadMessageRight;
        const setLoadMessageColor = direct === 'left' ? setLoadMessageColorLeft : setLoadMessageColorRight;
        const setData = direct === 'left' ? setLeftData : setRightData;
        if (character === undefined) {
            const newData = {
                hp: '1500',
                atk: '50',
                dmg: '100',
                def: '50',
                mor: '20',
                cri: '10',

                str: '500',
                con: '500',
                agi: '500',
                wil: '500',
                int: '500',
                pow: '500',
                app: '500',
                luc: '500',

                // 攻击类型
                handToHandCombat: '200',
                meleeWeapons: '50',
                shieldCombat: '0',
                archery: '50',
                throwing: '100',

                // 防御类型
                evasion: '50',
                parryCounter: '0',
                precisionDefense: '0',

                // 被动计算
                criticalHit: '0',
                manaRegeneration: '0',
                augmentedFlux: '0',
                magicPenetration: '0',
                injuryExemption: '0',
                rapidHealing: '0',
                magicResistance: '0',
                lastStand: '0',

                // 特殊选项
                rapidFire: '0',
                assistedBlock: '0',
            }
            setData(newData);
            setLoadMessage('未找到角色');
            setLoadMessageColor('red');
        } else {
            const newData = {
                hp: (character.property.health[0] + character.property.health[1]).toString(),
                atk: (character.property.attack[0] + character.property.attack[1]).toString(),
                dmg: (character.property.damage[0] + character.property.damage[1]).toString(),
                def: (character.property.defend[0] + character.property.defend[1]).toString(),
                mor: (character.property.morale[0] + character.property.morale[1]).toString(),
                cri: (character.property.critic[0] + character.property.critic[1]).toString(),

                str: (character.status.strength[0] + character.status.strength[1]).toString(),
                con: (character.status.constitution[0] + character.status.constitution[1]).toString(),
                agi: (character.status.agility[0] + character.status.agility[1]).toString(),
                wil: (character.status.willpower[0] + character.status.willpower[1]).toString(),
                int: (character.status.intelligence[0] + character.status.intelligence[1]).toString(),
                pow: (character.status.power[0] + character.status.power[1]).toString(),
                app: (character.status.appearance[0] + character.status.appearance[1]).toString(),
                luc: (character.status.luck[0] + character.status.luck[1]).toString(),

                // 攻击类型
                handToHandCombat: (character.skills.normal.handToHandCombat[0] + character.skills.normal.handToHandCombat[1]).toString(),
                meleeWeapons: (character.skills.normal.meleeWeapons[0] + character.skills.normal.meleeWeapons[1]).toString(),
                shieldCombat: (character.skills.combat.shieldCombat[0] + character.skills.combat.shieldCombat[1]).toString(),
                archery: (character.skills.normal.archery[0] + character.skills.normal.archery[1]).toString(),
                throwing: (character.skills.normal.throwing[0] + character.skills.normal.throwing[1]).toString(),

                // 防御类型
                evasion: (character.skills.normal.evasion[0] + character.skills.normal.evasion[1]).toString(),
                parryCounter: (character.skills.combat.parryCounter[0] + character.skills.combat.parryCounter[1]).toString(),
                precisionDefense: (character.skills.adversitySurvival.precisionDefense[0] + character.skills.adversitySurvival.precisionDefense[1]).toString(),

                // 被动计算
                criticalHit: (character.skills.combat.criticalHit[0] + character.skills.combat.criticalHit[1]).toString(),
                manaRegeneration: (character.skills.magic.magicPenetration[0] + character.skills.magic.magicPenetration[1]).toString(),
                augmentedFlux: (character.skills.magic.magicPenetration[0] + character.skills.magic.magicPenetration[1]).toString(),
                magicPenetration: (character.skills.magic.magicPenetration[0] + character.skills.magic.magicPenetration[1]).toString(),
                injuryExemption: (character.skills.adversitySurvival.injuryExemption[0] + character.skills.adversitySurvival.injuryExemption[1]).toString(),
                rapidHealing: (character.skills.adversitySurvival.rapidHealing[0] + character.skills.adversitySurvival.rapidHealing[1]).toString(),
                magicResistance: (character.skills.adversitySurvival.magicResistance[0] + character.skills.adversitySurvival.magicResistance[1]).toString(),
                lastStand: (character.skills.adversitySurvival.lastStand[0] + character.skills.adversitySurvival.lastStand[1]).toString(),

                // 特殊选项
                rapidFire: (character.skills.normal.rapidFire[0] + character.skills.normal.rapidFire[1]).toString(),
                assistedBlock: (character.skills.combat.assistedBlock[0] + character.skills.combat.assistedBlock[1]).toString(),
            }
            setData(newData);
            setLoadMessage('角色载入完毕');
            setLoadMessageColor('green');
        }
    }

    const LoadButton = ({ direct }) => {
        const [isHovered, setIsHovered] = useState(false)
        const [isMouseDown, setIsMouseDown] = useState(false)
        return (
            <Button
                label={'载入角色'}
                onClick={() => loadCharacter(direct)}
                activeButton={isHovered && isMouseDown}
                buttonStyleActive={{
                    ...buttonStyle.buttonStyleActive,
                    ...buttonStyle.buttonStyle,
                    ...(isHovered && buttonStyle.buttonHoverStyleActive),
                }}
                buttonStyleInactive={{
                    ...buttonStyle.buttonStyleInactive,
                    ...buttonStyle.buttonStyle,
                    ...(isHovered && buttonStyle.buttonHoverStyleInactive),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsMouseDown(true)}
                onMouseUp={() => setIsMouseDown(false)}
                className={''}
            />
        )
    }

    useEffect(() => {
        let Character = undefined
        for (let key in AllCharacterComponents) {
            if (AllCharacterComponents[key].name === searchTermLeft) {
                Character = AllCharacterComponents[key]
                break
            }
        }
        setLeftCharacter(Character)
    }, [searchTermLeft])

    useEffect(() => {
        let Character = undefined
        for (let key in AllCharacterComponents) {
            if (AllCharacterComponents[key].name === searchTermRight) {
                Character = AllCharacterComponents[key]
                break
            }
        }
        setRightCharacter(Character)
    }, [searchTermRight])

    // 因为钩子会重新渲染组件导致焦点丢失，因此该组件废弃
    // const CharacterPart = ({ direct }) => {
    //     return (
    //         <div className='flex flex-col' style={{
    //             width: '50%',
    //             display: 'flex',
    //             justifyContent: 'center',
    //         }}>
    //             <input
    //                 type="text"
    //                 placeholder="请输入完美匹配的角色名"
    //                 value={direct === 'left' ? searchTermLeft : searchTermRight}
    //                 onChange={direct === 'left' ? (event) => handleInputChangeLeft(event) : (event) => handleInputChangeRight(event)}
    //                 key={`battle calculator input name ${direct}`}
    //                 style={{
    //                     textAlign: 'center',
    //                 }}
    //             />
    //             {direct === 'left' ?
    //                 leftCharacter === undefined ?
    //                     <img src={NamelessUrl} alt={'角色头像'} /> : <img src={leftCharacter.iconUrl} alt={'角色头像'} />
    //                 :
    //                 rightCharacter === undefined ?
    //                     <img src={NamelessUrl} alt={'角色头像'} /> : <img src={rightCharacter.iconUrl} alt={'角色头像'} />
    //             }
    //         </div>
    //     )
    // }

    return (
        <div className="container flex flex-row" style={{
            paddingTop: '2rem',
        }}>
            {/* 左侧角色 */}
            <div className="flex-1" style={{
                display: 'flex',
                justifyContent: 'right',
            }}>
                {/* <CharacterPart direct={'left'} /> */}
                <div className='flex flex-col' style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <input
                        type="text"
                        placeholder="请输入完美匹配的角色名"
                        value={searchTermLeft}
                        onChange={(event) => handleInputChangeLeft(event)}
                        style={inputStyle}
                    />
                    <div style={{
                        paddingTop: '1rem',
                        paddingBottom: '1rem',

                    }}>
                        {leftCharacter === undefined ?
                            <img style={imageStyle} src={NamelessUrl} alt={'角色头像'} /> : <img style={imageStyle} src={leftCharacter.iconUrl} alt={'角色头像'} />}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div>
                            <div style={{ paddingBottom: '0.5rem', }}>
                                <LoadButton direct={'left'} />
                            </div>
                            <div style={{
                                ...loadMessageStyle,
                                color: loadMessageColorLeft,
                            }}>{loadMessageLeft}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 中间图标 */}
            <div className="flex-1" style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img style={{
                        maxHeight: '40%',
                    }} src={FightIcon} alt={'对战'} />
                </div>
            </div>

            {/* 右侧角色 */}
            <div className="flex-1" style={{
                display: 'flex',
                justifyContent: 'left',
            }}>
                <div className='flex flex-col' style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <input
                        type="text"
                        placeholder="请输入完美匹配的角色名"
                        value={searchTermRight}
                        onChange={(event) => handleInputChangeRight(event)}
                        style={inputStyle}
                    />
                    <div style={{
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                    }}>
                        {rightCharacter === undefined ?
                            <img style={imageStyle} src={NamelessUrl} alt={'角色头像'} /> : <img style={imageStyle} src={rightCharacter.iconUrl} alt={'角色头像'} />}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div>
                            <div style={{ paddingBottom: '0.5rem', }}>
                                <LoadButton direct={'right'} />
                            </div>
                            <div style={{
                                ...loadMessageStyle,
                                color: loadMessageColorRight,
                            }}>{loadMessageRight}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BattleCalculatorLoadPart;