// ※这可能是唯一一个长度超过600行的JS文件※

import React, { useState } from "react";

const tableTdPadding = '0.6rem'
const subStateErrorMessage1 = '未填完' // 有属性没写完
const subStateErrorMessage2 = '错误！' // 有属性写错了！

const exampleTableTitleStyle = {
    border: '0.01rem solid darkgreen',
    padding: tableTdPadding,
    fontWeight: 'bold',
    width: '5rem',
    textAlign: 'center',
}

const exampleTableContentStyle = {
    border: '0.01rem solid darkgreen',
    padding: tableTdPadding,
}

const inputTableTitleStyle = {
    //border: '0.01rem solid darkgreen',
    padding: tableTdPadding,
    fontWeight: 'bold',
    textAlign: 'center',
}

const inputBarStyle = {
    border: '0.05rem solid darkgreen',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    width: '100%',
    backgroundColor: '#fdffe0',
}

const inputTableContentStyle = {
    //border: '0.01rem solid darkgreen',
    padding: tableTdPadding,
}

const errorTableContentStyle = {
    padding: '0.3rem',
    color: 'green',
    fontWeight: 'bold',
}

const getLowerAndUpper = (string) => {
    const parts = string.split('~')
    return [parseInt(parts[0]), parts[1] === "" ? 32768 : parseInt(parts[1])]
}

const validNonnegativeInteger = (string) => {
    return parseInt(string) >= 0 && /^\d+$/.test(string)
}

const validIntegerRange = (integer, string) => {
    const [lower, upper] = getLowerAndUpper(string)
    return integer >= lower && integer <= upper
}

const getLevel = (expString) => {
    const exp = parseInt(expString)
    if (exp >= 0) {
        if (exp >= 1252500) { return 500 }
        let l = 1
        while ((10 + 10 * l) * l / 2 <= exp) { l += 1 }
        return l - 1
    } else { return 0 }
}

const getPoint = (numberString) => {
    const number = parseInt(numberString)
    if (!(number > 0)) { return 0 }
    if (number <= 600) { return number }
    else if (number <= 800) { return Math.ceil(600 + (number - 600) * 1.5) }
    else if (number <= 1000) { return Math.ceil(900 + (number - 800) * 2) }
    else { return Math.ceil(1300 + (number - 1000) * 3) }
}

const CGBasicInfoPartStateForm = ({ data, statesInfos }) => {
    const [formStates, setFormStates] = useState(
        {
            name: '',
            age: '',
            gender: '',
            sizeFactor: '',
            experience: '',
            strength: '',
            constitution: '',
            agility: '',
            willpower: '',
            intelligence: '',
            power: '',
            appearance: '',
            luck: '',
        }
    )

    const getAllStatesTotalPoint = () => {
        return getPoint(formStates.strength) + getPoint(formStates.constitution) +
            getPoint(formStates.agility) + getPoint(formStates.willpower) +
            getPoint(formStates.intelligence) + getPoint(formStates.power) +
            getPoint(formStates.appearance) + getPoint(formStates.luck)
    }

    const [errorMessage, setErrorMessage] = useState(
        {
            name: '名字尚未填完！',
            age: '年龄尚未填完！',
            gender: '性别尚未选择！',
            sizeFactor: '体积指数尚未填完！',
            experience: '阅历尚未填完！',
            strength: '力量属性尚未填完！',
            constitution: '体质属性尚未填完！',
            agility: '灵巧属性尚未填完！',
            willpower: '意志属性尚未填完！',
            intelligence: '智慧属性尚未填完！',
            power: '魔力属性尚未填完！',
            appearance: '魅力属性尚未填完！',
            luck: '幸运属性尚未填完！',
        }
    )

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormStates({
            ...formStates,
            [name]: value,
        })

        const translateName = {
            name: '名字',
            age: '年龄',
            gender: '性别',
            sizeFactor: '体积指数',
            experience: '阅历',
            strength: '力量属性',
            constitution: '体质属性',
            agility: '灵巧属性',
            willpower: '意志属性',
            intelligence: '智慧属性',
            power: '魔力属性',
            appearance: '外貌属性',
            luck: '幸运属性',
        }

        const getStateIndex = {
            strength: 4,
            constitution: 5,
            agility: 6,
            willpower: 7,
            intelligence: 8,
            power: 9,
            appearance: 10,
            luck: 11,
        }

        if (value === '') {
            if (name === 'gender') {
                setErrorMessage({
                    ...errorMessage,
                    [name]: `${translateName[name]}尚未选择！`,
                })
            } else {
                setErrorMessage({
                    ...errorMessage,
                    [name]: `${translateName[name]}尚未填完！`,
                })
            }
        } else if (['strength', 'constitution', 'agility', 'willpower', 'intelligence', 'power', 'appearance', 'luck'].includes(name)) {
            if (!validNonnegativeInteger(value)) {
                setErrorMessage({
                    ...errorMessage,
                    [name]: `${translateName[name]}必须为正整数！`,
                })
            } else if (!validIntegerRange(parseInt(value), statesInfos[0][getStateIndex[name]])) {
                setErrorMessage({
                    ...errorMessage,
                    [name]: `${translateName[name]}不在范围内！`,
                })
            } else {
                setErrorMessage({
                    ...errorMessage,
                    [name]: `${translateName[name]}填写完成，消耗属性点数${getPoint(value)}！`,
                })
            }
        } else if (['age', 'sizeFactor', 'gender'].includes(name)) {
            if (name === 'age') { }
            else if (name === 'sizeFactor') { }
            else { }
        } else if (['experience', 'name'].includes(name)) {
            if (name === 'experience' && validNonnegativeInteger(value)) {
                setErrorMessage({
                    ...errorMessage,
                    [name]: `${translateName[name]}填写完成，角色等级为${getLevel(value)}！`,
                })
            } else {
                setErrorMessage({
                    ...errorMessage,
                    [name]: `${translateName[name]}填写完成！`,
                })
            }
        }
    }

    return (
        <div className="container flex flex-col">
            <div>角色属性表格</div>
            <div>{`总点数消耗${getAllStatesTotalPoint()}`}</div>
            <div style={{
                fontSize: '0.9rem',
            }}>
                <form className="flex flex-row">

                    {/* 左侧栏 */}
                    <div style={{ width: '32%', }}>
                        <div style={{ padding: '2rem', height: '100%', }}>
                            <table className="container" style={{ height: '100%', }}>
                                <tbody>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="nameInput">
                                                角色名
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="text"
                                                name='name'
                                                id='nameInput'
                                                value={formStates.name}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的名字"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="ageInput">
                                                角色年龄
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name='age'
                                                id='ageInput'
                                                value={formStates.age}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的年龄"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="genderInput">
                                                角色性别
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <select
                                                id="genderInput"
                                                name="gender"
                                                value={formStates.gender}
                                                onChange={handleInputChange}
                                                style={inputBarStyle}
                                            >
                                                <option value="">请选择性别</option>
                                                <option value="male">男性</option>
                                                <option value="female">女性</option>
                                                <option value="none">无性</option>
                                                <option value="homo">双性</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="sizeFactorInput">
                                                角色体积指数
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name='sizeFactor'
                                                id='sizeFactorInput'
                                                value={formStates.sizeFactor}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的体积指数"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="experienceInput">
                                                角色阅历
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name='experience'
                                                id='experienceInput'
                                                value={formStates.experience}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的阅历"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 错误提示栏 */}
                    <div style={{
                        width: '28%',
                    }}>
                        <div className="container" style={{
                            padding: '2rem',
                            height: '100%',
                        }}>
                            <table style={{
                                height: '100%',
                                width: '100%',
                                padding: '2rem',
                                textAlign: 'center',
                            }}>
                                <tbody >
                                    {Object.keys(errorMessage).map((element, index) => (
                                        errorMessage[element] != '' ?
                                            <tr key={`CG basic info part state form error ${index}`}>
                                                <td style={
                                                    errorMessage[element].includes('填写完成') ? errorTableContentStyle :
                                                        {
                                                            ...errorTableContentStyle,
                                                            color: 'red',
                                                        }
                                                }>{errorMessage[element]}</td>
                                            </tr> : <></>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 右侧栏 */}
                    <div style={{ width: '40%', }}>
                        <div style={{ padding: '2rem', }}>
                            <table className="container">
                                <tbody>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="strengthInput">
                                                {`角色力量（范围${statesInfos[0][4]}）`}
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name="strength"
                                                id='strengthInput'
                                                value={formStates.strength}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的力量属性"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="constitutionInput">
                                                {`角色体质（范围${statesInfos[0][5]}）`}
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name="constitution"
                                                id='constitutionInput'
                                                value={formStates.constitution}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的体质属性"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="agilityInput">
                                                {`角色灵巧（范围${statesInfos[0][6]}）`}
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name="agility"
                                                id='agilityInput'
                                                value={formStates.agility}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的灵巧属性"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="willpowerInput">
                                                {`角色意志（范围${statesInfos[0][7]}）`}
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name="willpower"
                                                id='willpowerInput'
                                                value={formStates.willpower}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的意志属性"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="intelligenceInput">
                                                {`角色智慧（范围${statesInfos[0][8]}）`}
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name="intelligence"
                                                id='intelligenceInput'
                                                value={formStates.intelligence}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的智慧属性"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="powerInput">
                                                {`角色魔力（范围${statesInfos[0][9]}）`}
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name="power"
                                                id='powerInput'
                                                value={formStates.power}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的魔力属性"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="appearanceInput">
                                                {`角色魅力（范围${statesInfos[0][10]}）`}
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name="appearance"
                                                id='appearanceInput'
                                                value={formStates.appearance}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的魅力属性"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={inputTableTitleStyle}>
                                            <label htmlFor="luckInput">
                                                {`角色幸运（范围${statesInfos[0][11]}）`}
                                            </label>
                                        </td>
                                        <td style={inputTableContentStyle}>
                                            <input
                                                type="number"
                                                name="luck"
                                                id='luckInput'
                                                value={formStates.luck}
                                                onChange={handleInputChange}
                                                placeholder="请填写角色的幸运属性"
                                                style={inputBarStyle}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </form>
            </div>
            <div>
                <div style={{
                    padding: '2rem',
                    fontSize: '0.9rem',
                }}>
                    <table style={{ width: '100%', }}>
                        <tbody>
                            <tr>
                                <td style={exampleTableTitleStyle}>健康值</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.constitution) ?
                                        Math.floor(parseInt(formStates.constitution) * 2 + 500 + Math.pow(getLevel(formStates.experience), 0.75) * 10)
                                        : formStates.constitution === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>健康值=体质*2+500+等级^0.75*10</td>
                                <td style={exampleTableTitleStyle}>健康回复</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.constitution) && validNonnegativeInteger(formStates.willpower) ?
                                        Math.floor(Math.pow(parseInt(formStates.constitution), 2) / (parseInt(formStates.constitution) + 5000)
                                            + Math.pow(parseInt(formStates.willpower), 2) / (parseInt(formStates.constitution) + 3000))
                                        : formStates.constitution === '' || formStates.willpower === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>健康回复={'['}体质^2/{'('}体质+5000{')'}+意志^2/{'('}意志+3000{')'}{']'}*{'('}1+额外健康值/基础健康值{')'}</td>
                            </tr>
                            <tr>
                                <td style={exampleTableTitleStyle}>魔法值</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.power) ?
                                        Math.floor(parseInt(formStates.power) * 0.2 + getLevel(formStates.experience) * 0.5)
                                        : formStates.power === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>魔法值=魔力*0.2+等级*0.5</td>
                                <td style={exampleTableTitleStyle}>魔法回复</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.power) && validNonnegativeInteger(formStates.intelligence) ?
                                        Math.floor(parseInt(formStates.power) * 0.04 + parseInt(formStates.intelligence) * 0.02)
                                        : formStates.power === '' || formStates.intelligence === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>魔法回复={'('}智慧*0.02+魔力*0.04{')'}*{'('}1+额外魔法值/基础魔法值{')'}</td>
                            </tr>
                            <tr>
                                <td style={exampleTableTitleStyle}>攻击力</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.strength) && validNonnegativeInteger(formStates.power) ?
                                        Math.floor(parseInt(formStates.strength) * 0.08 + parseInt(formStates.power) * 0.02 + getLevel(formStates.experience) * 2)
                                        : formStates.strength === '' || formStates.power === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>攻击力=力量*0.08+魔力*0.02+等级*2</td>
                                <td style={exampleTableTitleStyle}>防御力</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.constitution) ?
                                        Math.floor(parseInt(formStates.constitution) * 0.1 + getLevel(formStates.experience) * 2)
                                        : formStates.constitution === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>防御力=体质*0.1+等级*2</td>
                            </tr>
                            <tr>
                                <td style={exampleTableTitleStyle}>伤害值</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.strength) ?
                                        Math.floor(parseInt(formStates.strength) * 0.12 + 40)
                                        : formStates.strength === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>伤害值=力量*0.12+40</td>
                                <td style={exampleTableTitleStyle}>成长率</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.intelligence) ?
                                        `${Math.floor(parseInt(formStates.intelligence) * 0.06 + 70)}%`
                                        : formStates.intelligence === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>成长率={'('}智慧*0.06+70{')'}%</td>
                            </tr>
                            <tr>
                                <td style={exampleTableTitleStyle}>移动力</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.agility) ?
                                        Math.floor(parseInt(formStates.agility) * 0.01)
                                        : formStates.agility === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>移动力=灵巧*0.01</td>
                                <td style={exampleTableTitleStyle}>先攻值</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.agility) ?
                                        parseInt(formStates.agility)
                                        : formStates.agility === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>先攻值=灵巧*1</td>
                            </tr>
                            <tr>
                                <td style={exampleTableTitleStyle}>士气值</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.appearance) && validNonnegativeInteger(formStates.willpower) ?
                                        Math.floor(parseInt(formStates.willpower) * 0.01 + parseInt(formStates.appearance) * 0.025 + 3)
                                        : formStates.appearance === '' || formStates.willpower === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>士气值=意志*0.01+魅力*0.025+3</td>
                                <td style={exampleTableTitleStyle}>暴击值</td>
                                <td style={exampleTableTitleStyle}>{
                                    validNonnegativeInteger(formStates.strength) && validNonnegativeInteger(formStates.agility) && validNonnegativeInteger(formStates.luck) ?
                                        Math.floor(parseInt(formStates.strength) * 0.004 + parseInt(formStates.agility) * 0.005 + parseInt(formStates.luck) * 0.01 + 1)
                                        : formStates.strength === '' || formStates.agility === '' || formStates.luck === '' ? subStateErrorMessage1 : subStateErrorMessage2}</td>
                                <td style={exampleTableContentStyle}>暴击值=力量*0.004+灵巧*0.005+幸运*0.01+1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CGBasicInfoPartStateForm;