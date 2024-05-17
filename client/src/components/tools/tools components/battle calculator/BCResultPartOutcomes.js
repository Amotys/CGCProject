import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";

const BCResultPartOutcomes = forwardRef(({
    leftData,
    rightData,
    validStates,
    checked,
    selectionLeft,
    selectionRight,
    percentageLeft,
    percentageRight,
    RBLeft,
    RBRight,
}, ref) => {
    const [result, setResult] = useState([])
    const calculateResult = (direction, toDirection) => {
        if (validStates) {
            // 预处理参数部分
            let stringArray = []
            const dataPrev = direction === 'left' ? leftData : rightData
            const dataNext = toDirection === 'left' ? leftData : rightData
            const selectionPrev = direction === 'left' ? selectionLeft : selectionRight
            const selectionNext = toDirection === 'left' ? selectionLeft : selectionRight
            const percentagePrev = direction === 'left' ? percentageLeft : percentageRight
            const percentageNext = toDirection === 'left' ? percentageLeft : percentageRight
            const useLastStandPrev = direction === 'left' ? checked.useLastStandLeft : checked.useLastStandRight
            const useLastStandNext = toDirection === 'left' ? checked.useLastStandLeft : checked.useLastStandRight
            const severeInjuryPrev = direction === 'left' ? checked.severeInjuryLeft : checked.severeInjuryRight
            const severeInjuryNext = toDirection === 'left' ? checked.severeInjuryLeft : checked.severeInjuryRight
            const RBPrev = direction === 'left' ? RBLeft : RBRight
            const RBNext = toDirection === 'left' ? RBLeft : RBRight
            const fixedLevel = 6 // 中间过程保留几位小数

            const tip = (tipString) => {
                stringArray.push(tipString)
            }

            const randomInt = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1.0)) + min
            }

            const counter = (skilla, skillb) => {
                const randa = randomInt(0, skilla)
                const randb = randomInt(0, skillb)
                tip(`对抗：(0~${skilla})VS(0~${skillb})=${randa}vs${randb}，${randa >= randb ? '成功' : '失败'}`)
                return randa >= randb
            }

            // 最后一搏处理
            tip('【最后一搏】')
            let lastStandSevereInjuryImmuteFactor = [0, 0]
            let lastStandStateUpFactor = [0, 0]
            let lastStandDamageUpFactor = [0, 0]
            const dealingLastStand = (isAttacker) => {
                const data = isAttacker ? dataPrev : dataNext
                const personString = isAttacker ? '攻击方' : '防御方'
                const personIndex = isAttacker ? 0 : 1
                lastStandStateUpFactor[personIndex] = [parseFloat((parseFloat(data.lastStand) * 0.0002).toFixed(4))]
                tip(`${personString}因最后一搏导致判定提升${parseInt(data.lastStand)}×0.02%=${parseFloat((lastStandStateUpFactor[personIndex] * 100).toFixed(2))}%`)
                lastStandDamageUpFactor[personIndex] = [parseFloat((parseFloat(data.lastStand) * 0.00015).toFixed(5))]
                tip(`${personString}因最后一搏导致伤害提升${parseInt(data.lastStand)}×0.015%=${parseFloat((lastStandDamageUpFactor[personIndex] * 100).toFixed(3))}%`)
                lastStandSevereInjuryImmuteFactor[personIndex] = [parseFloat((Math.min(parseFloat(data.lastStand) * 0.001, 1.0)).toFixed(3))]
                tip(`${personString}因最后一搏导致重伤惩罚下降${parseInt(data.lastStand)}×0.1%=${parseFloat((parseFloat(data.lastStand) * 0.1).toFixed(1))}%${parseFloat(data.lastStand) > 1000.0 ? `=>${lastStandSevereInjuryImmuteFactor[personIndex] * 100}%` : ''}`)
            }
            if (useLastStandPrev) {
                tip('检测到攻击方启用最后一搏……')
                dealingLastStand(true)
            }
            else if (useLastStandNext) {
                tip('检测到防御方启用最后一搏……')
                dealingLastStand(false)
            } else { tip('最后一搏没有被启用……') }

            // 重伤预处理
            tip('【重伤】')
            let statePercentage = [1.0, 1.0]
            const dealingSevereInjury = (isAttacker, useLastStand) => {
                const data = isAttacker ? dataPrev : dataNext
                const personString = isAttacker ? '攻击方' : '防御方'
                const personIndex = isAttacker ? 0 : 1
                const statePercentageWithLastStand = 0.5
                const statePercentageWithoutLastStand = 1.0 - 0.5 * (1.0 - lastStandSevereInjuryImmuteFactor[personIndex])
                tip(`${personString}因重伤导致判定下降50%${useLastStand ?
                    `，受最后一搏影响，最终导致判定下降50%×(100%-${lastStandSevereInjuryImmuteFactor[personIndex] * 100}%)=${(100.0 - lastStandSevereInjuryImmuteFactor[personIndex] * 100) * 0.5}%` : ''
                    }`)
                if (useLastStand) { statePercentage[personIndex] = statePercentageWithoutLastStand }
                else { statePercentage[personIndex] = statePercentageWithLastStand }
            }
            if (severeInjuryPrev) {
                tip('检测到攻击方为重伤状态……')
                dealingSevereInjury(true, useLastStandPrev)
            }
            else if (severeInjuryNext) {
                tip('检测到防御方为重伤状态……')
                dealingSevereInjury(false, useLastStandNext)
            } else { tip('重伤状态不满足……') }

            // 造成伤害部分
            const basicDamagePart = () => {
                tip('【输出伤害】')
                const atkPrev = parseFloat(dataPrev.atk)
                tip(`攻击方的攻击力为${dataPrev.atk}`)
                const dmgPrev = parseFloat(dataPrev.dmg)
                tip(`攻击方的伤害值为${dataPrev.dmg}`)
                const defNext = parseFloat(dataNext.def)
                tip(`防御方的防御力为${dataNext.def}`)
                const basicDamage = (atkPrev * dmgPrev / defNext).toFixed(fixedLevel)
                tip(`攻击输出的基础伤害为${atkPrev}×${dmgPrev}÷${defNext}=${parseFloat(basicDamage)}`)
                let damageFactor = 1.0
                let finalDamage = basicDamage
                if (selectionPrev.attackType != '魔法或技能') {
                    const randomFactor = (randomInt(8000, 12000) / 10000).toFixed(fixedLevel)
                    finalDamage = (finalDamage * randomFactor).toFixed(fixedLevel)
                    tip(`随机的伤害系数(80%~120%)为${parseFloat((randomFactor * 100).toFixed(fixedLevel))}%，最终伤害为${parseFloat(basicDamage)}×${parseFloat((randomFactor * 100).toFixed(fixedLevel))}%=${parseFloat(finalDamage)}`)
                    tip('【承受伤害】')
                    if (selectionNext.defendType == '精准防御') {
                        tip('防御方的防御类型为精准防御……')
                        const moreAtk = Math.max(atkPrev - defNext, 0.0)
                        if (moreAtk === 0.0) {tip('攻击方攻击力并未超过防御方防御力，将直接计算减伤效果……')}
                        else {tip(`攻击方攻击力超过防御方防御力${moreAtk}，将进行攻击方技能对抗`)}












                    }
                } else {
                    tip(`攻击类型为${'魔法或技能'}，最终输出伤害为${parseFloat(basicDamage)}×100%=${parseFloat(finalDamage)}`)
                    
                }
            }

            // 攻防技能对抗部分
            tip('【攻防技能对抗】')
            if (selectionPrev.attackType === '魔法或技能') {
                if (selectionNext.defendType === '精准防御') {
                    tip('攻击方攻击类型为魔法或技能，将直接计算伤害……')
                    basicDamagePart()
                }
            }








            else if (selectionNext.defendType == '无') {
                tip('防御方没有防御行为，将直接计算伤害……')
                basicDamagePart()
            } else if (selectionNext.defendType == '闪避') {
                tip('防御方防御类型为闪避，将直接计算伤害……')
            }





            setResult(stringArray)
        }
    }
    useImperativeHandle(ref, () => ({
        calculateResult: calculateResult,
    }))
    return (
        <div className="container" style={{
            paddingTop: '2rem',
        }}>
            <div className="container flex flex-col" style={{
                borderTop: '0.05rem solid darkgreen',
            }}>
                <div style={{
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontFamily: 'KaiTi',
                    fontWeight: 'bold',
                    color: 'darkgreen',
                    textAlign: 'center',
                }}>
                    <div style={validStates ?
                        {
                            background: `linear - gradient(to right, transparent 0 %, #c5e09b 25 %, #c5e09b 75 %, transparent 100 %)`,
                            width: '60%',
                            padding: '1rem',
                        } :
                        {
                            background: `linear - gradient(to right, transparent 0 %, #c5e09b 25 %, #c5e09b 75 %, transparent 100 %)`,
                            width: '60%',
                            padding: '1rem',
                            color: 'red',
                        }
                    }>
                        {!validStates ? '有未通过验证的数据，请先通过验证' :
                            result.length === 0 ? '点击上面的发动攻击按钮结算' : '结算完毕，再次点击将进行新一轮结算'
                        }
                    </div>
                </div>
            </div>

            {/* 展示部分 */}
            <div>
                <table>
                    <tbody>
                        {result.map((tipString, index) => (
                            <tr key={`BCRP Outcomes row ${index} `}>
                                <td>{tipString}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
})

export default BCResultPartOutcomes