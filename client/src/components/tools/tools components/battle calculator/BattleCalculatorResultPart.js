import React, { useState, useRef } from "react";
import MagicColors from '../../../../static/magics/MagicColors';
import BCResultPartOutcomes from './BCResultPartOutcomes';
import Button from "../../../Button";
import FightIcon from '../../../../static/images/tools/battleCalculator/FightIcon.png';

const defaultSelection = {
    attackType: '',
    defendType: '',
    damageType: '',
}
const defaultPercentage = {
    damageBonus: '',
    magicResist: '',
    meleePercentage: '',
    archeryPercentage: '',
    psychicPercentage: '',
    anemoPercentage: '',
    hydroPercentage: '',
    pyroPercentage: '',
    geoPercentage: '',
    luminoPercentage: '',
    umbrakinPercentage: '',
    magicPercentage: '',
}
const BattleButton = ({ label, onClick }) => {
    const buttonStyle = {
        buttonStyle: {
            padding: '0.25rem',
            border: '0.1rem solid darkgreen',
            borderRadius: '1rem',
            minWidth: '6rem',
            minHeight: '6rem',
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
    const [isHovered, setIsHovered] = useState(false)
    const [isMouseDown, setIsMouseDown] = useState(false)
    return (
        <Button
            label={label}
            onClick={onClick}
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

const BattleCalculatorResultPart = ({ validStates, leftData, rightData }) => {
    const calculationRef = useRef(null)
    const [checked, setChecked] = useState({
        useRapidFire: false,
        useAssistedBlock: false,
        severeInjuryLeft: false,
        severeInjuryRight: false,
        useLastStandLeft: false,
        useLastStandRight: false,
        useSevereInjury: true,
        useBackstab: false,
        keepFloat: false,
        skipToResult: true,
    })
    const [selectionLeft, setSelectionLeft] = useState({ ...defaultSelection, })
    const [selectionRight, setSelectionRight] = useState({ ...defaultSelection, })
    const [percentageLeft, setPercentageLeft] = useState({ ...defaultPercentage, })
    const [percentageRight, setPercentageRight] = useState({ ...defaultPercentage, })
    const [RBLeft, setRBLeft] = useState({ resist: '', bonus: '', })
    const [RBRight, setRBRight] = useState({ resist: '', bonus: '', })
    const createOptions = (idName, label, description) => {
        const optionInputStyle = {
            transform: 'scale(1.25)',
        }
        const optionTitleStyle = {
            padding: '0.5rem',
            paddingLeft: '1rem',
            fontWeight: 'bold',
            color: '#08331b',
            fontSize: '1.25rem',
        }
        const optionContentStyle = {
            padding: '0.5rem',
            paddingLeft: '2rem',
            color: '#08331b',
            fontSize: '1.25rem',
        }
        const handleCheckboxChange = (event) => {
            const name = event.target.name
            const newChecked = {
                ...checked,
                [name]: !checked[name],
            }
            setChecked(newChecked)
        }
        return (
            <tr key={`BC result part option ${idName}`}>
                <td>
                    <input
                        style={optionInputStyle}
                        type="checkbox"
                        name={idName}
                        id={idName}
                        checked={checked[idName]}
                        onChange={(event) => handleCheckboxChange(event)}
                    />
                </td>
                <td style={optionTitleStyle}>
                    <label htmlFor={idName}>
                        {label}
                    </label>
                </td>
                <td style={optionContentStyle}>
                    {description}
                </td>
            </tr>
        )
    }
    const createSelectionTable = (direct) => {
        const selectionTitleStyle = {
            padding: '1rem',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#08331b',
        }
        const selectionContentStyle = {
            border: '0.05rem solid darkgreen',
            borderRadius: '0.5rem',
            padding: '0.5rem',
            width: '100%',
            backgroundColor: '#fdffe0',
            fontSize: '1.1rem',
        }
        const handleSelectionChange = (event, direct) => {
            const { name, value } = event.target
            const selection = direct === 'left' ? selectionLeft : selectionRight
            const setSelection = direct === 'left' ? setSelectionLeft : setSelectionRight
            const newSelection = {
                ...selection,
                [name]: value,
            }
            setSelection(newSelection)
        }
        const createSelections = (direct, idName, label, itemArray, placeholder = '') => {
            const selection = direct === 'left' ? selectionLeft : selectionRight
            return (
                <tr key={`BC result part selection ${idName} ${direct}`}>
                    <td style={selectionTitleStyle}>
                        <label>
                            {label}
                        </label>
                    </td>
                    <td>
                        <select
                            style={selectionContentStyle}
                            name={idName}
                            value={selection[idName]}
                            onChange={(event) => handleSelectionChange(event, direct)}
                        >
                            {itemArray.map((item, index) => (
                                <option key={`BCR selection key ${idName} ${direct} ${index}`} value={item}>{item}</option>
                            ))}
                        </select>
                    </td>
                </tr>
            )
        }
        return (
            <div>
                <table>
                    <tbody>
                        {createSelections(direct, 'attackType', '攻击类型', ['徒手格斗', '近战武器', '盾牌格斗', '箭术', '投掷', '魔法或技能'])}
                        {createSelections(direct, 'defendType', '防御类型', ['闪避', '格挡反击', '精准防御', '无'])}
                        {createSelections(direct, 'damageType', '伤害类型', ['近战物理', '远程物理',
                            '气系魔法', '水系魔法', '火系魔法', '土系魔法', '光系魔法', '暗系魔法', '源力魔法',
                            '真实伤害', '灵能伤害'])}
                    </tbody>
                </table>
            </div>
        )
    }
    const createPercentageBox = (direct) => {
        const percentageTitleStyle = {
            fontSize: '0.9rem',
            fontWeight: 'bold',
            paddingRight: '0',
        }
        const percentageContentStyle = {
            border: '0.05rem solid darkgreen',
            borderRadius: '0.5rem',
            width: '3rem',
            backgroundColor: '#fdffe0',
            fontSize: '0.8rem',
        }
        const percentagePadding = {
            padding: '0.5rem',
        }
        const handlePercentageChange = (event, direct) => {
            const { name, value } = event.target
            let cleanedValue = value.replace(/[^0-9.]/g, '')
            if (!isNaN(cleanedValue)) {
                const percentage = direct === 'left' ? percentageLeft : percentageRight
                const setPercentage = direct === 'left' ? setPercentageLeft : setPercentageRight
                const newPercentage = {
                    ...percentage,
                    [name]: cleanedValue,
                }
                setPercentage(newPercentage)
            }
        }
        const createPercentages = (direct, idName, label) => {
            const titleColor = label === '近' ?
                '#636263' : label === '远' ?
                    '#636263' : label === '物' ?
                        '#636263' : label === '气' ?
                            MagicColors['气系'] : label === '水' ?
                                MagicColors['水系'] : label === '火' ?
                                    MagicColors['火系'] : label === '土' ?
                                        MagicColors['土系'] : label === '光' ?
                                            MagicColors['光系'] : label === '暗' ?
                                                MagicColors['暗系'] : MagicColors['源力']
            const percentage = direct === 'left' ? percentageLeft : percentageRight
            return (
                <>
                    <td style={{
                        ...percentagePadding,
                        ...percentageTitleStyle,
                        color: titleColor,
                        paddingTop: '1.5rem',
                        textShadow: '2px 2px 1px rgba(0, 0, 0, 0.25)',
                    }}>
                        <label htmlFor={idName}>
                            {label}
                        </label>
                    </td>
                    <td style={{
                        paddingTop: '1rem',
                    }}>
                        <input
                            style={{
                                ...percentagePadding,
                                ...percentageContentStyle,
                            }}
                            type='text' // 在handlePercentageChange函数中定义正则表达
                            name={idName}
                            id={idName}
                            value={percentage[idName]}
                            onChange={(event) => handlePercentageChange(event, direct)}
                        />
                    </td>
                    <td style={{
                        paddingTop: '1rem',
                        color: titleColor,
                        textShadow: '2px 2px 1px rgba(0, 0, 0, 0.25)',
                    }}>%</td>
                </>
            )
        }
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            {createPercentages(direct, 'meleePercentage', '近')}
                            {createPercentages(direct, 'archeryPercentage', '远')}
                            {createPercentages(direct, 'psychicPercentage', '物')}
                            {createPercentages(direct, 'anemoPercentage', '气')}
                            {createPercentages(direct, 'hydroPercentage', '水')}
                        </tr>
                        <tr>
                            {createPercentages(direct, 'pyroPercentage', '火')}
                            {createPercentages(direct, 'geoPercentage', '土')}
                            {createPercentages(direct, 'luminoPercentage', '光')}
                            {createPercentages(direct, 'umbrakinPercentage', '暗')}
                            {createPercentages(direct, 'magicPercentage', '魔')}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    const createResistAndBonus = (direct) => {
        const RBTitleStyle = {
            fontSize: '0.9rem',
            fontWeight: 'bold',
            paddingRight: '0',
        }
        const RBContentStyle = {
            border: '0.05rem solid darkgreen',
            borderRadius: '0.5rem',
            width: '3rem',
            backgroundColor: '#fdffe0',
            fontSize: '0.8rem',
        }
        const RBPadding = {
            padding: '0.5rem',
        }
        const textColor = {
            color: '#08331b',
        }
        const handleRBChange = (event, direct) => {
            const { name, value } = event.target
            let cleanedValue = value.replace(/[^0-9.]/g, '')
            if (!isNaN(cleanedValue)) {
                const RB = direct === 'left' ? RBLeft : RBRight
                const setRB = direct === 'left' ? setRBLeft : setRBRight
                const newRB = {
                    ...RB,
                    [name]: cleanedValue,
                }
                setRB(newRB)
            }
        }
        const createTd = (direct, idName, label) => {
            const RB = direct === 'left' ? RBLeft : RBRight
            return (
                <>
                    <td style={{
                        ...RBPadding,
                        ...RBTitleStyle,
                        ...textColor,
                    }}>
                        <label htmlFor={idName}>
                            {label}
                        </label>
                    </td>
                    <td>
                        <input
                            style={{
                                ...RBPadding,
                                ...RBContentStyle,
                                ...textColor,
                            }}
                            type='text'
                            name={idName}
                            id={idName}
                            value={RB[idName]}
                            onChange={(event) => handleRBChange(event, direct)}
                        />
                    </td>
                    <td style={{
                        ...RBPadding,
                        ...RBTitleStyle,
                        ...textColor,
                        paddingLeft: '0',
                    }}>%</td>
                </>
            )
        }
        return (
            <div className="container">
                <table style={{ width: '100%', }}>
                    <tbody style={{ width: '100%', }}>
                        <tr>
                            {createTd(direct, 'bonus', '造成伤害加成')}
                            <td style={{
                                width: '30%',
                                textAlign: 'center',
                                color: textColor,
                            }}>
                                （默认100%）
                            </td>
                            {createTd(direct, 'resist', '受到伤害抗性')}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    const createWholeSide = (direct) => {
        return (
            <div>
                {/* 可选其他功能：下拉选项篇 */}
                <div className="container" style={{
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div>
                        {createSelectionTable(direct)}
                    </div>
                </div>

                <div className="container" style={{
                    paddingTop: '2rem',
                    fontWeight: 'bold',
                    color: '#08331b',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div>
                        所受属性伤害百分比（默认100%）
                    </div>
                </div>

                {/* 可选其他功能：属性抗性篇 */}
                <div className="container" style={{
                    paddingTop: '0',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div>
                        {createPercentageBox(direct)}
                    </div>
                </div>

                {/* 可选其他功能：伤害加成和抗性篇 */}
                <div className="container" style={{
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <div className="container">
                        {createResistAndBonus(direct)}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container flex flex-col">
            {/* 可选其他功能：勾选项篇 */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div>
                    <table>
                        <tbody>
                            {createOptions('useSevereInjury', '启用一击重伤规则', '启用后：单次健康减值超过最大健康值的25%将造成重伤。（默认启用）')}
                            {createOptions('skipToResult', '直接跳转结果', '启用后：窗口将在计算完毕后，直接跳转至计算的结果部分。（默认启用，建议启用）')}
                            {createOptions('keepFloat', '保留浮点结果', '启用后：最终减值将保留三位小数点。')}
                            {createOptions('useBackstab', '攻击方启用背击伤害', '适用于：处于目标背后180°时对目标造成伤害。')}
                            {createOptions('useRapidFire', '攻击方启用快速射击', '适用于：①远程VS近战，并处于近战攻击范围内。②单个轮次中，多个移动宣言之间的箭术攻击宣言。')}
                            {createOptions('useAssistedBlock', '防御方启用援助格挡', '适用于：防御类型为格挡反击，且主动为区域封锁范围内的目标抵御物理类型伤害。')}
                            {createOptions('severeInjuryLeft', '左侧角色重伤状态', '适用于：左侧角色处于重伤状态。')}
                            {createOptions('severeInjuryRight', '右侧角色重伤状态', '适用于：右侧角色处于重伤状态。')}
                            {createOptions('useLastStandLeft', '左侧角色启用最后一搏',
                                `适用于：左侧角色当前健康值低于最大健康值的${(10 + parseInt(leftData.lastStand) * 0.005).toFixed(2)}%。`)}
                            {createOptions('useLastStandRight', '右侧角色启用最后一搏',
                                `适用于：右侧角色当前健康值低于最大健康值的${(10 + parseInt(rightData.lastStand) * 0.005).toFixed(2)}%。`)}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 中间部分 */}
            <div className="container flex flex-row">
                <div style={{ width: '35%' }}>
                    {createWholeSide('left')}
                </div>
                <div className="flex flex-row" style={{
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        width: '70%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div className="container flex flex-1" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div>
                                <BattleButton label={'发动攻击'} onClick={() => calculationRef.current.calculateResult('left', 'right')} />
                            </div>
                        </div>
                        <div className="container flex flex-1" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                width: '70%',
                            }}>
                                <img src={FightIcon} alt={'战斗'} />
                            </div>
                        </div>
                        <div className="container flex flex-1" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div>
                                <BattleButton label={'发动攻击'} onClick={() => calculationRef.current.calculateResult('right', 'left')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '35%' }}>
                    {createWholeSide('right')}
                </div>
            </div>

            {/* 结果部分 */}
            <BCResultPartOutcomes
                leftData={leftData}
                rightData={rightData}
                validStates={validStates}
                checked={checked}
                selectionLeft={selectionLeft}
                selectionRight={selectionRight}
                percentageLeft={percentageLeft}
                percentageRight={percentageRight}
                RBLeft={RBLeft}
                RBRight={RBRight}
                ref={calculationRef}
            />

        </div >
    )
}
export default BattleCalculatorResultPart