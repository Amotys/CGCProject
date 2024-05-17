import React, { useEffect, useState } from "react";

const tableTdTitleStyle = {
    fontSize: '1rem',
    color: '#021b0d',
    textAlign: 'right',
}
const tableTdContentStyle = {
    fontSize: '1rem',
}
const tableInputStyle = {
    maxWidth: '6rem',
    font: '0.6rem',
    border: '0.05rem solid darkgreen',
    borderRadius: '0.4rem',
    padding: '0.2rem',
    backgroundColor: '#fdffe0',
}
const errorMessageStyle = {
    fontSize: '0.85rem',
    padding: '0.05rem',
    textAlign: 'center',
    paddingTop: '0.42rem',
    paddingBottom: '0.42rem',
}
const errorMessageStyleRed = {
    ...errorMessageStyle,
    color: 'red',
}
const errorMessageStyleGreen = {
    ...errorMessageStyle,
    color: 'green',
}


const BattleCalculatorStatesPart = ({ leftData, rightData, setLeftData, setRightData, validStates, setValidStates }) => {
    const [errorMessage, setErrorMessage] = useState({
        hp: '',
        atk: '',
        dmg: '',
        def: '',
        mor: '',
        cri: '',

        str: '',
        con: '',
        agi: '',
        wil: '',
        int: '',
        pow: '',
        app: '',
        luc: '',

        handToHandCombat: '',
        meleeWeapons: '',
        shieldCombat: '',
        archery: '',
        throwing: '',

        evasion: '',
        parryCounter: '',
        precisionDefense: '',

        criticalHit: '',
        manaRegeneration: '',
        augmentedFlux: '',
        magicPenetration: '',
        injuryExemption: '',
        rapidHealing: '',
        magicResistance: '',
        lastStand: '',

        rapidFire: '',
        assistedBlock: '',
    })
    const validateStates = () => {
        let currentMessage = {
            ...errorMessage
        }
        const validNotSmallerThan = (numString, number) => {
            return parseFloat(numString) >= number
        }
        const validPositiveFloat = (numString) => {
            return parseFloat(numString) > 0
        }
        const validNonNegativeFloat = (numString) => {
            return parseFloat(numString) >= 0
        }
        const isFloat = (numString) => {
            return parseFloat(parseInt(numString)) != parseFloat(numString)
        }
        const inRange = (numString, lower, upper) => {
            return lower <= parseFloat(numString) && parseFloat(numString) <= upper
        }
        if (!isFloat(leftData.hp) && validPositiveFloat(leftData.hp) && !isFloat(rightData.hp) && validPositiveFloat(rightData.hp)) {
            currentMessage.hp = '健康值验证通过'
        } else { currentMessage.hp = '健康值必须为正整数！' }
        if (validNotSmallerThan(leftData.atk, 40.0) && validNotSmallerThan(rightData.atk, 40.0)) { currentMessage.atk = '攻击力验证通过' }
        else { currentMessage.atk = '攻击力至少为40.0！' }
        if (validNotSmallerThan(leftData.dmg, 25.0) && validNotSmallerThan(rightData.dmg, 25.0)) { currentMessage.dmg = '伤害值验证通过' }
        else { currentMessage.dmg = '伤害值至少为25.0！' }
        if (validNotSmallerThan(leftData.def, 40.0) && validNotSmallerThan(rightData.def, 40.0)) { currentMessage.def = '防御力验证通过' }
        else { currentMessage.def = '防御力至少为40.0！' }
        if (!isFloat(leftData.mor) && inRange(leftData.mor, -100.0, 100.0) && !isFloat(rightData.mor) && inRange(rightData.mor, -100.0, 100.0)) {
            currentMessage.mor = '士气值验证通过'
        } else { currentMessage.mor = '士气值必须为-100~100的整数！' }
        if (!isFloat(leftData.cri) && inRange(leftData.cri, -100.0, 100.0) && !isFloat(rightData.cri) && inRange(rightData.cri, -100.0, 100.0)) {
            currentMessage.cri = '暴击值验证通过'
        } else { currentMessage.cri = '暴击值必须为-100~100的整数！' }
        if (validNonNegativeFloat(leftData.str) && !isFloat(leftData.str) && validNonNegativeFloat(rightData.str) && !isFloat(rightData.str)) {
            currentMessage.str = '力量验证通过'
        } else { currentMessage.str = '力量必须为非负整数！' }
        if (validNonNegativeFloat(leftData.con) && !isFloat(leftData.con) && validNonNegativeFloat(rightData.con) && !isFloat(rightData.con)) {
            currentMessage.con = '体质验证通过'
        } else { currentMessage.con = '体质必须为非负整数！' }
        if (validNonNegativeFloat(leftData.agi) && !isFloat(leftData.agi) && validNonNegativeFloat(rightData.agi) && !isFloat(rightData.agi)) {
            currentMessage.agi = '灵巧验证通过'
        } else { currentMessage.agi = '灵巧必须为非负整数！' }
        if (validNonNegativeFloat(leftData.wil) && !isFloat(leftData.wil) && validNonNegativeFloat(rightData.wil) && !isFloat(rightData.wil)) {
            currentMessage.wil = '意志验证通过'
        } else { currentMessage.wil = '意志必须为非负整数！' }
        if (validNonNegativeFloat(leftData.int) && !isFloat(leftData.int) && validNonNegativeFloat(rightData.int) && !isFloat(rightData.int)) {
            currentMessage.int = '智慧验证通过'
        } else { currentMessage.int = '智慧必须为非负整数！' }
        if (validNonNegativeFloat(leftData.pow) && !isFloat(leftData.pow) && validNonNegativeFloat(rightData.pow) && !isFloat(rightData.pow)) {
            currentMessage.pow = '魔力验证通过'
        } else { currentMessage.pow = '魔力必须为非负整数！' }
        if (validNonNegativeFloat(leftData.app) && !isFloat(leftData.app) && validNonNegativeFloat(rightData.app) && !isFloat(rightData.app)) {
            currentMessage.app = '魅力验证通过'
        } else { currentMessage.app = '魅力必须为非负整数！' }
        if (validNonNegativeFloat(leftData.luc) && !isFloat(leftData.luc) && validNonNegativeFloat(rightData.luc) && !isFloat(rightData.luc)) {
            currentMessage.luc = '幸运验证通过'
        } else { currentMessage.luc = '幸运必须为非负整数！' }
        if (validNonNegativeFloat(leftData.handToHandCombat) && !isFloat(leftData.handToHandCombat) &&
            validNonNegativeFloat(rightData.handToHandCombat) && !isFloat(rightData.handToHandCombat)) {
            currentMessage.handToHandCombat = '徒手格斗验证通过'
        } else { currentMessage.handToHandCombat = '徒手格斗必须为非负整数！' }
        if (validNonNegativeFloat(leftData.meleeWeapons) && !isFloat(leftData.meleeWeapons) &&
            validNonNegativeFloat(rightData.meleeWeapons) && !isFloat(rightData.meleeWeapons)) {
            currentMessage.meleeWeapons = '近战武器验证通过'
        } else { currentMessage.meleeWeapons = '近战武器必须为非负整数！' }
        if (validNonNegativeFloat(leftData.shieldCombat) && !isFloat(leftData.shieldCombat) &&
            validNonNegativeFloat(rightData.shieldCombat) && !isFloat(rightData.shieldCombat)) {
            currentMessage.shieldCombat = '盾牌格斗验证通过'
        } else { currentMessage.shieldCombat = '盾牌格斗必须为非负整数！' }
        if (validNonNegativeFloat(leftData.archery) && !isFloat(leftData.archery) &&
            validNonNegativeFloat(rightData.archery) && !isFloat(rightData.archery)) {
            currentMessage.archery = '箭术验证通过'
        } else { currentMessage.archery = '箭术必须为非负整数！' }
        if (validNonNegativeFloat(leftData.throwing) && !isFloat(leftData.throwing) &&
            validNonNegativeFloat(rightData.throwing) && !isFloat(rightData.throwing)) {
            currentMessage.throwing = '投掷验证通过'
        } else { currentMessage.throwing = '投掷必须为非负整数！' }
        if (validNonNegativeFloat(leftData.evasion) && !isFloat(leftData.evasion) &&
            validNonNegativeFloat(rightData.evasion) && !isFloat(rightData.evasion)) {
            currentMessage.evasion = '闪避验证通过'
        } else { currentMessage.evasion = '闪避必须为非负整数！' }
        if (validNonNegativeFloat(leftData.parryCounter) && !isFloat(leftData.parryCounter) &&
            validNonNegativeFloat(rightData.parryCounter) && !isFloat(rightData.parryCounter)) {
            currentMessage.parryCounter = '格挡反击验证通过'
        } else { currentMessage.parryCounter = '格挡反击必须为非负整数！' }
        if (validNonNegativeFloat(leftData.precisionDefense) && !isFloat(leftData.precisionDefense) &&
            validNonNegativeFloat(rightData.precisionDefense) && !isFloat(rightData.precisionDefense)) {
            currentMessage.precisionDefense = '精准防御验证通过'
        } else { currentMessage.precisionDefense = '精准防御必须为非负整数！' }
        if (validNonNegativeFloat(leftData.criticalHit) && !isFloat(leftData.criticalHit) &&
            validNonNegativeFloat(rightData.criticalHit) && !isFloat(rightData.criticalHit)) {
            currentMessage.criticalHit = '会心一击验证通过'
        } else { currentMessage.criticalHit = '会心一击必须为非负整数！' }
        if (validNonNegativeFloat(leftData.manaRegeneration) && !isFloat(leftData.manaRegeneration) &&
            validNonNegativeFloat(rightData.manaRegeneration) && !isFloat(rightData.manaRegeneration)) {
            currentMessage.manaRegeneration = '魔力回流验证通过'
        } else { currentMessage.manaRegeneration = '魔力回流必须为非负整数！' }
        if (validNonNegativeFloat(leftData.augmentedFlux) && !isFloat(leftData.augmentedFlux) &&
            validNonNegativeFloat(rightData.augmentedFlux) && !isFloat(rightData.augmentedFlux)) {
            currentMessage.augmentedFlux = '增广波动验证通过'
        } else { currentMessage.augmentedFlux = '增广波动必须为非负整数！' }
        if (validNonNegativeFloat(leftData.magicPenetration) && !isFloat(leftData.magicPenetration) &&
            validNonNegativeFloat(rightData.magicPenetration) && !isFloat(rightData.magicPenetration)) {
            currentMessage.magicPenetration = '魔法穿透验证通过'
        } else { currentMessage.magicPenetration = '魔法穿透必须为非负整数！' }
        if (validNonNegativeFloat(leftData.injuryExemption) && !isFloat(leftData.injuryExemption) &&
            validNonNegativeFloat(rightData.injuryExemption) && !isFloat(rightData.injuryExemption)) {
            currentMessage.injuryExemption = '伤病豁免验证通过'
        } else { currentMessage.injuryExemption = '伤病豁免必须为非负整数！' }
        if (validNonNegativeFloat(leftData.rapidHealing) && !isFloat(leftData.rapidHealing) &&
            validNonNegativeFloat(rightData.rapidHealing) && !isFloat(rightData.rapidHealing)) {
            currentMessage.rapidHealing = '极速痊愈验证通过'
        } else { currentMessage.rapidHealing = '极速痊愈必须为非负整数！' }
        if (validNonNegativeFloat(leftData.magicResistance) && !isFloat(leftData.magicResistance) &&
            validNonNegativeFloat(rightData.magicResistance) && !isFloat(rightData.magicResistance)) {
            currentMessage.magicResistance = '魔力抵抗验证通过'
        } else { currentMessage.magicResistance = '魔力抵抗必须为非负整数！' }
        if (validNonNegativeFloat(leftData.lastStand) && !isFloat(leftData.lastStand) &&
            validNonNegativeFloat(rightData.lastStand) && !isFloat(rightData.lastStand)) {
            currentMessage.lastStand = '最后一搏验证通过'
        } else { currentMessage.lastStand = '最后一搏必须为非负整数！' }
        if (validNonNegativeFloat(leftData.rapidFire) && !isFloat(leftData.rapidFire) &&
            validNonNegativeFloat(rightData.rapidFire) && !isFloat(rightData.rapidFire)) {
            currentMessage.rapidFire = '快速射击验证通过'
        } else { currentMessage.rapidFire = '快速射击必须为非负整数！' }
        if (validNonNegativeFloat(leftData.assistedBlock) && !isFloat(leftData.assistedBlock) &&
            validNonNegativeFloat(rightData.assistedBlock) && !isFloat(rightData.assistedBlock)) {
            currentMessage.assistedBlock = '援助格挡验证通过'
        } else { currentMessage.assistedBlock = '援助格挡必须为非负整数！' }
        setErrorMessage(currentMessage)
    }
    const handleChange = (event, direct) => {
        const data = direct === 'left' ? leftData : rightData
        const setData = direct === 'left' ? setLeftData : setRightData
        const { name, value } = event.target
        const newData = {
            ...data,
            [name]: value,
        }
        setData(newData)
    }
    const validateStatePart = () => {
        const allPass = Object.values(errorMessage).every(value => value.includes('验证通过'))
        if (allPass) { setValidStates(true) } else { setValidStates(false) }
    }
    useEffect(() => {
        validateStates()
    }, [leftData, rightData])
    useEffect(() => {
        validateStatePart()
    }, [errorMessage])
    const createTable = (direct) => {
        const createTd = (direct, label, value, name, rightPadding = '0rem') => {
            return (
                <>
                    <td style={tableTdTitleStyle}>
                        <label htmlFor={`BC ${label} ${direct}`}>
                            {label}
                        </label>
                    </td>
                    <td style={{
                        ...tableTdContentStyle,
                        paddingRight: rightPadding,
                    }}>
                        <input
                            type='number'
                            name={name}
                            id={`BC ${label} ${direct}`}
                            value={value}
                            onChange={(event) => handleChange(event, direct)}
                            style={tableInputStyle}
                        />
                    </td>
                </>
            )
        }
        const data = direct === 'left' ? leftData : rightData
        const rightPadding = '1.5rem'
        return (
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    border: '0.1rem solid darkgreen',
                    borderRadius: '2rem',
                    background: 'rgba(247, 255, 204, 0.25)',
                    padding: '1rem',
                }}>
                    <form>
                        <table>
                            <tbody>
                                <tr key={`battle calculator hp&atk ${direct}`}>
                                    {createTd(direct, '健康值：', data.hp, 'hp', rightPadding)}
                                    {createTd(direct, '攻击力：', data.atk, 'atk')}
                                </tr>
                                <tr key={`battle calculator dmg&def ${direct}`}>
                                    {createTd(direct, '伤害值：', data.dmg, 'dmg', rightPadding)}
                                    {createTd(direct, '防御力：', data.def, 'def')}
                                </tr>
                                <tr key={`battle calculator mor&cri ${direct}`}>
                                    {createTd(direct, '士气值：', data.mor, 'mor', rightPadding)}
                                    {createTd(direct, '暴击值：', data.cri, 'cri')}
                                </tr>
                                <tr key={`battle calculator str&con ${direct}`}>
                                    {createTd(direct, '力量：', data.str, 'str', rightPadding)}
                                    {createTd(direct, '体质：', data.con, 'con')}
                                </tr>
                                <tr key={`battle calculator agi&wil ${direct}`}>
                                    {createTd(direct, '灵巧：', data.agi, 'agi', rightPadding)}
                                    {createTd(direct, '意志：', data.wil, 'wil')}
                                </tr>
                                <tr key={`battle calculator int&pow ${direct}`}>
                                    {createTd(direct, '智慧：', data.int, 'int', rightPadding)}
                                    {createTd(direct, '魔力：', data.pow, 'pow')}
                                </tr>
                                <tr key={`battle calculator app&luc ${direct}`}>
                                    {createTd(direct, '魅力：', data.app, 'app', rightPadding)}
                                    {createTd(direct, '幸运：', data.luc, 'luc')}
                                </tr>
                                <tr key={`battle calculator skill 1 ${direct}`}>
                                    {createTd(direct, '徒手格斗：', data.handToHandCombat, 'handToHandCombat', rightPadding)}
                                    {createTd(direct, '近战武器：', data.meleeWeapons, 'meleeWeapons')}
                                </tr>
                                <tr key={`battle calculator skill 2 ${direct}`}>
                                    {createTd(direct, '盾牌格斗：', data.shieldCombat, 'shieldCombat', rightPadding)}
                                    {createTd(direct, '箭术：', data.archery, 'archery')}
                                </tr>
                                <tr key={`battle calculator skill 3 ${direct}`}>
                                    {createTd(direct, '投掷：', data.throwing, 'throwing', rightPadding)}
                                    {createTd(direct, '闪避：', data.evasion, 'evasion')}
                                </tr>
                                <tr key={`battle calculator skill 4 ${direct}`}>
                                    {createTd(direct, '格挡反击：', data.parryCounter, 'parryCounter', rightPadding)}
                                    {createTd(direct, '精准防御：', data.precisionDefense, 'precisionDefense')}
                                </tr>
                                <tr key={`battle calculator skill 5 ${direct}`}>
                                    {createTd(direct, '会心一击：', data.criticalHit, 'criticalHit', rightPadding)}
                                    {createTd(direct, '魔力回流：', data.manaRegeneration, 'manaRegeneration')}
                                </tr>
                                <tr key={`battle calculator skill 6 ${direct}`}>
                                    {createTd(direct, '增广波动：', data.augmentedFlux, 'augmentedFlux', rightPadding)}
                                    {createTd(direct, '魔法穿透：', data.magicPenetration, 'magicPenetration')}
                                </tr>
                                <tr key={`battle calculator skill 7 ${direct}`}>
                                    {createTd(direct, '伤病豁免：', data.injuryExemption, 'injuryExemption', rightPadding)}
                                    {createTd(direct, '极速痊愈：', data.rapidHealing, 'rapidHealing')}
                                </tr>
                                <tr key={`battle calculator skill 8 ${direct}`}>
                                    {createTd(direct, '魔力抵抗：', data.magicResistance, 'magicResistance', rightPadding)}
                                    {createTd(direct, '最后一搏：', data.lastStand, 'lastStand')}
                                </tr>
                                <tr key={`battle calculator skill 9 ${direct}`}>
                                    {createTd(direct, '快速射击：', data.rapidFire, 'rapidFire', rightPadding)}
                                    {createTd(direct, '援助格挡：', data.assistedBlock, 'assistedBlock')}
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className="container flex flex-col">

            {/* 左侧、右侧，和错误提示栏 */}
            <div className="container flex flex-row">
                <div style={{ width: '35%' }}>
                    {createTable('left')}
                </div>
                <div style={{ width: '30%' }}>
                    <div className="container" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}>
                        <div className="container">
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    {Object.keys(errorMessage).map((key, index) => {
                                        const nextkey = Object.keys(errorMessage)[index + 1]
                                        if (index % 2 === 0) {
                                            if (nextkey) {
                                                return (
                                                    <tr key={`BC state error message ${key.substring(0, 5)} ${nextkey.substring(0, 5)}`}>
                                                        <td style={
                                                            errorMessage[key].includes('验证通过') ? errorMessageStyleGreen : errorMessageStyleRed
                                                        }>{errorMessage[key]}</td>
                                                        <td style={
                                                            errorMessage[nextkey].includes('验证通过') ? errorMessageStyleGreen : errorMessageStyleRed
                                                        }>{errorMessage[nextkey]}</td>
                                                    </tr>
                                                )
                                            } else {
                                                return (
                                                    <tr key={`BC state error message ${key.substring(0, 5)}`}>
                                                        <td style={
                                                            errorMessage[key].includes('验证通过') ? errorMessageStyleGreen : errorMessageStyleRed
                                                        }>{errorMessage[key]}</td>
                                                    </tr>
                                                )
                                            }
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div style={{ width: '35%' }}>
                    {createTable('right')}
                </div>
            </div>

            {/* 最终提示栏 */}
            <div className="container" style={{
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '2rem',
                fontFamily: 'KaiTi',
                fontWeight: 'bold',
                color: 'darkgreen',
                textAlign: 'center',
            }}>
                <div style={
                    validStates ?
                        {
                            background: `linear-gradient(to right, transparent 0%, #c5e09b 25%, #c5e09b 75%, transparent 100%)`,
                            width: '60%',
                            padding: '1rem',
                        } : {
                            background: `linear-gradient(to right, transparent 0%, #c5e09b 25%, #c5e09b 75%, transparent 100%)`,
                            width: '60%',
                            padding: '1rem',
                            color: 'red',
                        }
                }>
                    {validStates ? '数据验证全部通过，可以进行战斗计算' : '有未通过验证的数据，请先通过验证'}
                </div>
            </div>
        </div >
    )
}

export default BattleCalculatorStatesPart